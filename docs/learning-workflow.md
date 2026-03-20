# Learning Workflow

這份 repo 的核心原則只有兩個：

1. **學習流程要在 repo 內完成**
2. **要我 review 時，不再需要手填 answer sheet**

## Core commands

### 列出 lesson

```bash
pnpm run learn:list
```

用途：看目前有哪些 lesson、現在 current focus 是哪一題。

### 切換目前 lesson

```bash
pnpm run learn:start -- S2-01
```

用途：把 current focus 切到指定 lesson。

### 檢查 lesson

```bash
pnpm run learn:check -- S2-01
```

用途：同時跑 typecheck 與 lesson 檔案本身。

### 產生 review snapshot

```bash
pnpm run learn:review -- S2-01
```

用途：把目前程式碼、typecheck、執行輸出存成 markdown 檔，方便保存當下狀態。

## AI review flow

### 最短版

1. 寫程式
2. `pnpm run learn:check -- <lesson-id>`
3. 直接對我說：`請 review <lesson-id>`

### 需要留檔版

1. 寫程式
2. `pnpm run learn:check -- <lesson-id>`
3. `pnpm run learn:review -- <lesson-id>`
4. 對我說：`請 review <lesson-id>`

## What changed from the old workflow

- 舊流程：填 `docs/submission-template.md`，再把內容貼給 AI
- 新流程：AI 直接看 repo 內的 lesson 檔與 tracker；需要留檔時再生成 snapshot

## Tracking files

- `learning-plan/progress-tracker.md`：今天的 current focus + lesson checklist
- `learning-plan/review-log.md`：review 歷史與下一步
- `learning-plan/session-notes.md`：最新 handoff
