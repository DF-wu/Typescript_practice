import { formatDateOnly, getCliLessonId, resolveLesson, updateCurrentFocus, updateLatestHandoff } from "./shared";

const requestedLessonId = getCliLessonId();

if (!requestedLessonId) {
  throw new Error("Usage: pnpm run learn:start -- <lesson-id>");
}

const lesson = resolveLesson(requestedLessonId);

updateCurrentFocus({
  currentLessonId: lesson.id,
  currentLessonTitle: lesson.title,
  currentFile: lesson.filePath,
  status: "In progress",
  lastCheck: "Not run yet in the new workflow",
  lastReviewBundle: "None",
  nextAction: `pnpm run learn:check -- ${lesson.id}`,
});

updateLatestHandoff({
  date: formatDateOnly(),
  currentLessonId: lesson.id,
  currentLessonTitle: lesson.title,
  status: "In progress",
  lastCheck: "Not run yet in the new workflow",
  lastReviewBundle: "None",
  nextAction: `pnpm run learn:check -- ${lesson.id}`,
});

console.log(`Started ${lesson.id} ${lesson.title}`);
console.log(`File: ${lesson.filePath}`);
console.log("Goals:");

for (const goal of lesson.goals) {
  console.log(`- ${goal}`);
}

console.log("");
console.log(`Next: pnpm run learn:check -- ${lesson.id}`);
