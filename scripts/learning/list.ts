import { lessons } from "./catalog";
import { getCompletedLessonIds, getCurrentLessonId } from "./shared";

const completedLessonIds = getCompletedLessonIds();
const currentLessonId = getCurrentLessonId();

const groupedLessons = lessons.reduce<Map<string, typeof lessons>>((map, lesson) => {
  const key = `${lesson.stage}｜${lesson.stageTitle}`;
  const bucket = map.get(key) ?? [];
  bucket.push(lesson);
  map.set(key, bucket);
  return map;
}, new Map());

console.log("TypeScript 學習清單");
console.log("");

for (const [stageKey, stageLessons] of groupedLessons.entries()) {
  console.log(stageKey);

  for (const lesson of stageLessons) {
    const marker = completedLessonIds.has(lesson.id)
      ? "✓"
      : lesson.id === currentLessonId
        ? "▶"
        : "○";

    console.log(`${marker} ${lesson.id} ${lesson.title}`);
    console.log(`  file: ${lesson.filePath}`);
    console.log(`  focus: ${lesson.goals[0]}`);
  }

  console.log("");
}

console.log("Commands");
console.log("- pnpm run learn:start -- <lesson-id>");
console.log("- pnpm run learn:check -- <lesson-id>");
console.log("- pnpm run learn:review -- <lesson-id>");
