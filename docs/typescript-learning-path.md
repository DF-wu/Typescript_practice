# TypeScript 學習路線圖 (Java 工程師版)

這份路線圖的目標不是把所有主題一次塞滿，而是讓你知道：**現在做哪一層、下一層會學什麼、每一層的完成標準是什麼。**

## 先讀這三份

- `docs/start-here.md`
- `docs/00-environment-setup.md`
- `docs/task-catalog.md`

## Stage 0 - 環境與工具基礎

### 目標

- 知道 `pnpm`、`tsx`、`tsc` 在這個 repo 各做什麼
- 可以自己切換 lesson、檢查 lesson、請 AI review

### 完成標準

- 跑過 `pnpm install`
- 跑過 `pnpm run typecheck`
- 跑過 `pnpm run learn:list`
- 跑過 `pnpm run learn:start -- S1-01`

## Stage 1 - TS 語法入門

### Lessons

- `S1-01` `exercises/stage-1/01_basic_types.ts`
- `S1-02` `exercises/stage-1/02_functions.ts`
- `S1-03` `exercises/stage-1/03_objects_arrays.ts`

### 這一階段要練出的能力

- 看到型別標註不會怕
- 會為函式補明確輸入與輸出
- 會用 `type` / `interface` / `ReadonlyArray`

### 完成標準

- 沒有 `any`
- 所有函式輸入輸出明確
- 可以說明 `type` 與 `interface` 差異

## Stage 2 - TS 型別核心能力

### Lessons

- `S2-01` `exercises/stage-2/01_narrowing.ts`
- `S2-02` `exercises/stage-2/02_null_safety.ts`
- `S2-03` `exercises/stage-2/03_utility_types.ts`
- `S2-04` `exercises/stage-2/04_generic_repository.ts`

### 這一階段要練出的能力

- 縮小 union type 範圍
- 安全處理 nullable 資料
- 用 Utility Types 減少重複型別
- 用 generic 寫可重用結構

### 完成標準

- 會用 narrowing 與 custom guard
- 會用 `?.` / `??` 處理缺值
- 會用 `Partial` / `Pick` / `Omit`
- 會用 `T extends` 設計泛型結構

## Stage 3 - Backend 主流實戰

### 主題

- Express / NestJS 分層
- Runtime validation（建議 `zod`）
- Prisma + PostgreSQL
- Unit + integration test

### 完成標準

- controller 保持薄
- 驗證與錯誤映射清楚
- 完成 Task CRUD API

## Stage 4 - Frontend 主流實戰

### 主題

- React / Next.js + TypeScript
- typed props / fetch / mutation
- 基本表單與錯誤處理
- Tailwind 組件化

### 完成標準

- 前後端型別對得起來
- loading / error / empty state 基本完整
- 完成 task list + create/edit flow

## Stage 5 - 工程化與交付

### 主題

- unit / integration / e2e test
- Docker
- GitHub Actions
- deploy + README

### 完成標準

- build / test 可跑
- CI 可跑
- 專案可部署

## Capstone

### Project

Team Task Board

### 必做功能

- 任務 CRUD
- 狀態流轉
- 篩選 / 排序 / 分頁
- 表單驗證與錯誤處理
- 基本測試與部署

## New review rule

現在的標準流程是：

1. `pnpm run learn:check -- <lesson-id>`
2. 直接跟我說：`請 review <lesson-id>`

如果你想保留當下快照，再加跑：

```bash
pnpm run learn:review -- <lesson-id>
```
