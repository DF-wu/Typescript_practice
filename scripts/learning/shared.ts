import { spawnSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { getLessonById, type Lesson } from "./catalog";

export type CommandResult = {
  command: string;
  exitCode: number | null;
  stdout: string;
  stderr: string;
  combinedOutput: string;
  ok: boolean;
};

type CurrentFocus = {
  currentLessonId: string;
  currentLessonTitle: string;
  currentFile: string;
  status: string;
  lastCheck: string;
  lastReviewBundle: string;
  nextAction: string;
};

type LatestHandoff = {
  date: string;
  currentLessonId: string;
  currentLessonTitle: string;
  status: string;
  lastCheck: string;
  lastReviewBundle: string;
  nextAction: string;
};

const repoRoot = process.cwd();
const progressTrackerPath = path.join(repoRoot, "learning-plan", "progress-tracker.md");
const sessionNotesPath = path.join(repoRoot, "learning-plan", "session-notes.md");

function readText(filePath: string): string {
  return readFileSync(filePath, "utf8");
}

function writeText(filePath: string, content: string): void {
  writeFileSync(filePath, content, "utf8");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getMarkedSection(content: string, markerName: string): string {
  const regex = new RegExp(
    `<!-- ${escapeRegExp(markerName)}_START -->([\\s\\S]*?)<!-- ${escapeRegExp(markerName)}_END -->`,
  );
  const match = content.match(regex);

  if (!match) {
    throw new Error(`Missing marker section: ${markerName}`);
  }

  return match[1].trim();
}

function replaceMarkedSection(content: string, markerName: string, sectionBody: string): string {
  const regex = new RegExp(
    `<!-- ${escapeRegExp(markerName)}_START -->([\\s\\S]*?)<!-- ${escapeRegExp(markerName)}_END -->`,
  );

  if (!regex.test(content)) {
    throw new Error(`Missing marker section: ${markerName}`);
  }

  return content.replace(
    regex,
    `<!-- ${markerName}_START -->\n${sectionBody}\n<!-- ${markerName}_END -->`,
  );
}

function readField(section: string, label: string): string {
  const regex = new RegExp(`^- ${escapeRegExp(label)}: (.*)$`, "m");
  const match = section.match(regex);
  return match?.[1]?.trim() ?? "";
}

function readCurrentFocus(): CurrentFocus {
  const content = readText(progressTrackerPath);
  const section = getMarkedSection(content, "CURRENT_FOCUS");

  return {
    currentLessonId: readField(section, "Current lesson ID"),
    currentLessonTitle: readField(section, "Current lesson title"),
    currentFile: readField(section, "Current file"),
    status: readField(section, "Status"),
    lastCheck: readField(section, "Last check"),
    lastReviewBundle: readField(section, "Last review bundle"),
    nextAction: readField(section, "Next action"),
  };
}

export function getCurrentLessonId(): string {
  const lessonId = readCurrentFocus().currentLessonId;

  if (!lessonId) {
    throw new Error("Current lesson ID is missing in learning-plan/progress-tracker.md");
  }

  return lessonId;
}

export function resolveLesson(requestedLessonId?: string): Lesson {
  const lessonId = requestedLessonId ?? getCurrentLessonId();
  const lesson = getLessonById(lessonId);

  if (!lesson) {
    throw new Error(`Unknown lesson ID: ${lessonId}`);
  }

  return lesson;
}

export function getCliLessonId(): string | undefined {
  const rawArgs = process.argv.slice(2);
  return rawArgs.find((argument) => argument !== "--");
}

export function formatDateTime(date = new Date()): string {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function formatDateOnly(date = new Date()): string {
  return new Intl.DateTimeFormat("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function formatFileTimestamp(date = new Date()): string {
  return formatDateTime(date).replace(/[/: ]/g, "-");
}

export function toRepoPath(filePath: string): string {
  return filePath.replace(/\\/g, "/");
}

export function readLessonCode(lesson: Lesson): string {
  return readText(path.join(repoRoot, lesson.filePath));
}

export function updateCurrentFocus(update: Partial<CurrentFocus>): CurrentFocus {
  const current = readCurrentFocus();
  const next: CurrentFocus = {
    ...current,
    ...update,
  };
  const content = readText(progressTrackerPath);
  const section = [
    `- Current lesson ID: ${next.currentLessonId}`,
    `- Current lesson title: ${next.currentLessonTitle}`,
    `- Current file: ${next.currentFile}`,
    `- Status: ${next.status}`,
    `- Last check: ${next.lastCheck}`,
    `- Last review bundle: ${next.lastReviewBundle}`,
    `- Next action: ${next.nextAction}`,
  ].join("\n");

  writeText(progressTrackerPath, replaceMarkedSection(content, "CURRENT_FOCUS", section));

  return next;
}

export function updateLatestHandoff(update: Partial<LatestHandoff>): void {
  const content = readText(sessionNotesPath);
  const section = getMarkedSection(content, "LATEST_HANDOFF");
  const current: LatestHandoff = {
    date: readField(section, "Date"),
    currentLessonId: readField(section, "Current lesson ID"),
    currentLessonTitle: readField(section, "Current lesson title"),
    status: readField(section, "Status"),
    lastCheck: readField(section, "Last check"),
    lastReviewBundle: readField(section, "Last review bundle"),
    nextAction: readField(section, "Next action"),
  };
  const next: LatestHandoff = {
    ...current,
    ...update,
  };
  const nextSection = [
    `- Date: ${next.date}`,
    `- Current lesson ID: ${next.currentLessonId}`,
    `- Current lesson title: ${next.currentLessonTitle}`,
    `- Status: ${next.status}`,
    `- Last check: ${next.lastCheck}`,
    `- Last review bundle: ${next.lastReviewBundle}`,
    `- Next action: ${next.nextAction}`,
  ].join("\n");

  writeText(sessionNotesPath, replaceMarkedSection(content, "LATEST_HANDOFF", nextSection));
}

export function getCompletedLessonIds(): Set<string> {
  const tracker = readText(progressTrackerPath);
  const matches = tracker.matchAll(/^- \[x\] (S\d-\d+)/gm);

  return new Set(Array.from(matches, (match) => match[1]));
}

export function runPnpm(args: string[]): CommandResult {
  const result = process.platform === "win32"
    ? spawnSync("cmd.exe", ["/d", "/s", "/c", `pnpm ${args.join(" ")}`], {
      cwd: repoRoot,
      encoding: "utf8",
    })
    : spawnSync("pnpm", args, {
      cwd: repoRoot,
      encoding: "utf8",
    });

  const stdout = result.stdout ?? "";
  const stderr = result.stderr ?? "";
  const combinedOutput = [stdout.trim(), stderr.trim()].filter(Boolean).join("\n").trim() || "(no output)";

  return {
    command: `pnpm ${args.join(" ")}`,
    exitCode: result.status,
    stdout,
    stderr,
    combinedOutput,
    ok: result.status === 0,
  };
}

export function renderCommandReport(result: CommandResult): string {
  return [`$ ${result.command}`, result.combinedOutput].join("\n");
}

export function summarizeCheck(typecheckResult: CommandResult, runResult: CommandResult): string {
  const typecheckLabel = typecheckResult.ok ? "typecheck ok" : "typecheck failed";
  const runLabel = runResult.ok ? "exercise run ok" : "exercise run failed";
  return `${formatDateTime()} (${typecheckLabel}; ${runLabel})`;
}

export function buildReviewRequest(
  lesson: Lesson,
  typecheckResult: CommandResult,
  runResult: CommandResult,
): string {
  const code = readLessonCode(lesson);

  return [
    `# Review Request: ${lesson.id} ${lesson.title}`,
    "",
    `- Generated at: ${formatDateTime()}`,
    "- Lesson file: `" + lesson.filePath + "`",
    `- Stage: ${lesson.stage} - ${lesson.stageTitle}`,
    "",
    "## Ask the AI this",
    "",
    "請直接 review " + lesson.id + "。重點檢查 correctness / type safety / readability / test quality，並根據目前 repo workflow 更新 `learning-plan/review-log.md` 與 `learning-plan/progress-tracker.md`。不用再要求我貼 answer sheet。",
    "",
    "## Goals",
    ...lesson.goals.map((goal) => `- ${goal}`),
    "",
    "## Deliverables",
    ...lesson.deliverables.map((deliverable) => `- ${deliverable}`),
    "",
    "## Command output",
    "",
    "### Typecheck",
    "",
    "```text",
    renderCommandReport(typecheckResult),
    "```",
    "",
    "### Lesson run",
    "",
    "```text",
    renderCommandReport(runResult),
    "```",
    "",
    "## Current code",
    "",
    "```ts",
    code,
    "```",
  ].join("\n");
}

export function ensureReviewDirectory(): string {
  const directory = path.join(repoRoot, "learning-plan", "review-requests");
  mkdirSync(directory, { recursive: true });
  return directory;
}
