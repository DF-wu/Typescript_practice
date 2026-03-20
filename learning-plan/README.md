# Learning Plan Folder

這個資料夾用來保存三種東西：目前 focus、review 歷史、session handoff。

## Files

- `progress-tracker.md`：目前 lesson 與 checklist
- `review-log.md`：AI review 歷史
- `session-notes.md`：最新 handoff
- `review-requests/`：可選的 review snapshot

## Workflow

1. `pnpm run learn:list`
2. `pnpm run learn:start -- <lesson-id>`
3. 修改對應 lesson 檔案
4. `pnpm run learn:check -- <lesson-id>`
5. 直接說 `請 review <lesson-id>`

如果要存快照，再跑：

```bash
pnpm run learn:review -- <lesson-id>
```

平常不需要先產生 snapshot；直接叫 AI review lesson ID 即可。
