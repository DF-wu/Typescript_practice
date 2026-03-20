import { formatDateOnly, getCliLessonId, resolveLesson, runPnpm, summarizeCheck, updateCurrentFocus, updateLatestHandoff } from "./shared";

const lesson = resolveLesson(getCliLessonId());

console.log(`Checking ${lesson.id} ${lesson.title}`);
console.log("");

const typecheckResult = runPnpm(["run", "typecheck"]);
const runResult = runPnpm(["run", "dev", "--", lesson.filePath]);

console.log("Typecheck");
console.log(typecheckResult.combinedOutput);
console.log("");
console.log("Lesson run");
console.log(runResult.combinedOutput);
console.log("");

const checksPassed = typecheckResult.ok && runResult.ok;
const status = checksPassed
  ? "Checks passed; pending AI review"
  : "Checks failed; fix before AI review";
const lastCheck = summarizeCheck(typecheckResult, runResult);
const nextAction = checksPassed
  ? `直接告訴 AI：請 review ${lesson.id}（需要留快照時再跑 pnpm run learn:review -- ${lesson.id}）`
  : `修正 ${lesson.filePath} 後重跑 pnpm run learn:check -- ${lesson.id}`;

const focus = updateCurrentFocus({
  currentLessonId: lesson.id,
  currentLessonTitle: lesson.title,
  currentFile: lesson.filePath,
  status,
  lastCheck,
  nextAction,
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

console.log(`Status updated: ${status}`);
console.log(`Next: ${nextAction}`);

if (!typecheckResult.ok || !runResult.ok) {
  process.exitCode = 1;
}
