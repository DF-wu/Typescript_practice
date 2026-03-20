# TypeScript Learning Repo

這個 repo 是給我自己用的 TypeScript 學習工作台：從 Java 工程師視角出發，從語法、型別系統，到後端、前端與 capstone。

## Start here

第一次進來先看：

- `docs/start-here.md`
- `docs/00-environment-setup.md`
- `docs/typescript-learning-path.md`

## Daily workflow

1. `pnpm run learn:list`
2. `pnpm run learn:start -- <lesson-id>`
3. 修改對應 lesson 檔案
4. `pnpm run learn:check -- <lesson-id>`
5. 要我批改時，直接說「請 review <lesson-id>」

如果你想把當下程式碼與輸出存成檔案，再跑：

```bash
pnpm run learn:review -- <lesson-id>
```

這會在 `learning-plan/review-requests/` 產生 review snapshot，但它是可選的；現在不需要再手動貼 answer sheet。

## Repo map

- `docs/start-here.md`：最短上手入口
- `docs/typescript-learning-path.md`：整體路線圖
- `docs/task-catalog.md`：lesson / task 索引
- `exercises/stage-1/`：Stage 1 練習
- `exercises/stage-2/`：Stage 2 練習
- `learning-plan/progress-tracker.md`：目前進度與 current focus
- `learning-plan/review-log.md`：review 歷史
- `learning-plan/session-notes.md`：最新 handoff
- `scripts/learning/`：lesson-aware CLI workflow
