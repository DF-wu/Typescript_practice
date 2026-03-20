import { writeFileSync } from "node:fs";
import path from "node:path";

import {
  buildReviewRequest,
  ensureReviewDirectory,
  formatDateOnly,
  formatFileTimestamp,
  getCliLessonId,
  resolveLesson,
  runPnpm,
  summarizeCheck,
  toRepoPath,
  updateCurrentFocus,
  updateLatestHandoff,
} from "./shared";

const lesson = resolveLesson(getCliLessonId());
const typecheckResult = runPnpm(["run", "typecheck"]);
const runResult = runPnpm(["run", "dev", "--", lesson.filePath]);
const reviewDirectory = ensureReviewDirectory();
const fileName = `${lesson.id}_${formatFileTimestamp()}.md`;
const absoluteFilePath = path.join(reviewDirectory, fileName);
const repoPath = toRepoPath(path.relative(process.cwd(), absoluteFilePath));

writeFileSync(
  absoluteFilePath,
  buildReviewRequest(lesson, typecheckResult, runResult),
  "utf8",
);

const focus = updateCurrentFocus({
  currentLessonId: lesson.id,
  currentLessonTitle: lesson.title,
  currentFile: lesson.filePath,
  status: typecheckResult.ok && runResult.ok ? "Review snapshot generated" : "Review snapshot generated with failing checks",
  lastCheck: summarizeCheck(typecheckResult, runResult),
  lastReviewBundle: repoPath,
  nextAction: `直接告訴 AI：請 review ${lesson.id}`,
});

updateLatestHandoff({
  date: formatDateOnly(),
  currentLessonId: focus.currentLessonId,
  currentLessonTitle: focus.currentLessonTitle,
  status: focus.status,
  lastCheck: focus.lastCheck,
  lastReviewBundle: focus.lastReviewBundle,
  nextAction: focus.nextAction,
});

console.log(`Review snapshot created: ${repoPath}`);
console.log(`Ask the AI: 請 review ${lesson.id}`);

if (!typecheckResult.ok || !runResult.ok) {
  console.log("Note: checks are still failing, so expect review feedback to include compile or runtime fixes.");
}
