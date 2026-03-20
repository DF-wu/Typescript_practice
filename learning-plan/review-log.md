# Review Log

這份檔案只記錄 review 結果與下一步。

## Current rule

- 先跑 `pnpm run learn:check -- <lesson-id>`
- 然後直接說 `請 review <lesson-id>`
- `learning-plan/review-requests/` 只在你想留快照時才用

## Template

## [YYYY-MM-DD] Lesson: <lesson-id>

- Score:
  - Correctness:
  - Type Safety:
  - Readability:
  - Test Quality:
- Critical issues:
  - ...
- Improvements:
  - ...
- Next step:
  - ...

---

## Historical notes

下面的紀錄是舊流程留下的 review 歷史，保留當作學習軌跡。

---

## [2026-02-16] Task: Initialization

- Score:
  - Correctness: N/A
  - Type Safety: N/A
  - Readability: N/A
  - Test Quality: N/A
- Critical issues:
  - None
- Improvements:
  - Start Lesson 1 and submit first attempt
- Next step:
  - Complete `exercises/stage-1/01_basic_types.ts`

## [2026-02-16] Task: Environment bootstrap

- Score:
  - Correctness: Pass
  - Type Safety: N/A (exercise TODOs pending)
  - Readability: Pass
  - Test Quality: N/A
- Critical issues:
  - None
- Improvements:
  - Finish Stage 1 TODOs to clear typecheck
- Next step:
  - Solve `01_basic_types.ts`, then run `pnpm run typecheck`

## [2026-02-16] Task: Stage 1 Lesson 1 + Lesson 2 (first submission)

- Score:
  - Correctness: 24/40
  - Type Safety: 10/25
  - Readability: 14/20
  - Test Quality: 0/15
- Critical issues:
  - `01_basic_types.ts` TODO 1/2/3 values are not filled with requested target values.
  - `01_basic_types.ts` has implicit `any` parameters in `buildWelcomeMessage(name, role)`.
  - `02_functions.ts` has implicit `any` parameter in `formatPrice(value, currency = "USD")`.
  - `pnpm run typecheck` fails due to TS7006 errors.
- Improvements:
  - Add explicit parameter types and union type usage where required.
  - Fill TODO values exactly as requested before moving to next lesson.
  - Simplify boolean return in `canJoin` to `return currentUsers < maxUsers;`.
- Next step:
  - Fix type errors in `01_basic_types.ts` and `02_functions.ts`, rerun `pnpm run typecheck`, then start `03_objects_arrays.ts`.

## [2026-02-16] Task: Stage 1 Lesson 1 + Lesson 2 (second submission)

- Score:
  - Correctness: 31/40
  - Type Safety: 22/25
  - Readability: 15/20
  - Test Quality: 0/15
- Critical issues:
  - `01_basic_types.ts` TODO target values are still not aligned with prompt (`appName`, `maxUsers`, `isOpen`).
  - `01_basic_types.ts` `buildWelcomeMessage` uses `role: string`; exercise intent suggests `role: UserRole`.
- Improvements:
  - Keep `formatPrice` improvement; typecheck is now clean.
  - Align TODO values exactly with requirement text, not just type correctness.
  - Simplify `canJoin` to direct boolean return for cleaner style.
- Next step:
  - Finish remaining Lesson 1 TODO requirements, then proceed to `03_objects_arrays.ts`.
