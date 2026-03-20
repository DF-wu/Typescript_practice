# AGENTS.md

This file preserves learning context so future sessions can continue without restarting.

## User profile

- Primary language: Chinese (Traditional)
- Background: Java software engineer
- Current goal: Learn TypeScript from absolute beginner to project-ready
- Preference: Learn in stages with hands-on exercises
- Preference: Content should be written into files, not only terminal output
- Preference: Receive code review, corrections, and coaching after each lesson review

## Active learning contract

When assisting this user:

1. Start from basics if syntax is unfamiliar.
2. Always provide file-based materials (roadmap, tasks, templates, trackers).
3. Keep progression incremental: syntax -> TS essentials -> backend stack -> frontend stack -> capstone.
4. Prioritize mainstream stack and practical engineering habits.
5. Review submitted solutions with:
   - correctness
   - type safety
   - readability
   - test quality
6. Give concrete next actions after every review.

## Current curriculum source of truth

- First entry point: `docs/start-here.md`
- Main roadmap: `docs/typescript-learning-path.md`
- Lesson catalog: `docs/task-catalog.md`
- Exercises: `exercises/stage-1/`, `exercises/stage-2/`
- Lesson commands: `pnpm run learn:*`
- Planning and tracking: `learning-plan/`

## Session resume checklist

On each new session:

1. Read `learning-plan/progress-tracker.md`.
2. Read `learning-plan/session-notes.md`.
3. Check latest entry in `learning-plan/review-log.md`.
4. Continue from the current lesson ID in the tracker.
5. If the user asks for review, inspect the lesson file directly or use the latest file in `learning-plan/review-requests/` if one exists.
6. After review, update `learning-plan/review-log.md` and `learning-plan/progress-tracker.md` with the next action.
