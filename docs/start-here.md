# Start Here

如果你今天只想知道「我現在到底該怎麼學」，就照這份走。

## 1. 準備環境

先完成 `docs/00-environment-setup.md`。

確認這三件事都能跑：

```bash
pnpm install
pnpm run typecheck
pnpm run learn:list
```

## 2. 開始今天的 lesson

先看目前進度：

```bash
pnpm run learn:list
```

選一題後開始：

```bash
pnpm run learn:start -- S1-01
```

這會把 `learning-plan/progress-tracker.md` 和 `learning-plan/session-notes.md` 的 current focus 對齊。

## 3. 寫完就檢查

```bash
pnpm run learn:check -- S1-01
```

這個命令會做兩件事：

1. 跑整個 repo 的 `typecheck`
2. 執行目前 lesson 檔案，看實際輸出

## 4. 要我 review 時

現在不用再手動交 answer sheet。

直接在對話裡說：

```txt
請 review S1-01
```

如果你想把當下程式碼、typecheck、執行輸出存成檔案，再加跑：

```bash
pnpm run learn:review -- S1-01
```

產出的 snapshot 會放在 `learning-plan/review-requests/`。

## 5. 每次卡住時先看哪裡

- 路線不清楚：`docs/typescript-learning-path.md`
- 題目順序不清楚：`docs/task-catalog.md`
- 不知道目前做到哪：`learning-plan/progress-tracker.md`
- 想看上次 review 結論：`learning-plan/review-log.md`
