# TypeScript 完整學習地圖 (Java 工程師版)

這份地圖是「從 0 到可做專案」的完整路線。

你會依序學到：

1. TypeScript 基礎語法
2. 型別系統核心能力
3. 後端主流堆疊 (Node + NestJS + Prisma)
4. 前端主流堆疊 (React + Next.js)
5. 測試、CI/CD、部署與作品集化

---

## 0. 先決條件

- 先完成 `docs/00-environment-setup.md`
- 先確認：
  - `pnpm install` 可成功
  - `pnpm run typecheck` 可執行

---

## Stage 0: 環境與工具基礎 (1-2 天)

### 目標

- 建立可穩定學習與提交作業的 TS 環境

### 知識點

- Node.js 與 npm/pnpm 的關係
- TypeScript 編譯 (`tsc`) 與執行 (`tsx`)
- `strict` 模式的重要性

### 任務

- [ ] 完成安裝與驗證 (`docs/00-environment-setup.md`)
- [ ] 看懂 `package.json` scripts
- [ ] 看懂 `tsconfig.json` 主要選項

### 驗收

- 你可以解釋：`typecheck` 跟 `dev` 差異
- 你可以執行任一 `exercises/stage-1/*.ts`

---

## Stage 1: TS 語法入門 (Week 1)

### Lesson 1 - 基本型別與變數

- 檔案：`exercises/stage-1/01_basic_types.ts`
- 知識點：`string/number/boolean`、`const/let`、函式回傳型別
- 目標：先建立「語法不怕」的手感

### Lesson 2 - 函式、可選參數、Union

- 檔案：`exercises/stage-1/02_functions.ts`
- 知識點：optional parameter、default value、`string | number`
- 目標：讓函式輸入輸出可預期

### Lesson 3 - 物件與陣列

- 檔案：`exercises/stage-1/03_objects_arrays.ts`
- 知識點：`type`/`interface`、`ReadonlyArray`、`map/filter/reduce`
- 目標：開始寫不會亂改資料的程式

### Stage 1 驗收標準

- [ ] 沒有 `any`
- [ ] 所有函式都有明確輸入輸出
- [ ] 可以說明 `type` 和 `interface` 差異

---

## Stage 2: TS 型別核心能力 (Week 2)

### Lesson 4 - Narrowing 與 Type Guard

- `typeof`、`in`、自訂 type predicate
- 題目：`parseInput(input: string | number | Date)`

### Lesson 5 - Null Safety

- `strictNullChecks`、`?.`、`??`
- 題目：`formatUserProfile(user)`

### Lesson 6 - Utility Types

- `Pick`、`Omit`、`Partial`、`Readonly`
- 題目：`updateUser(id, patch)` (禁止更新 id)

### Lesson 7 - Generic

- `T extends`、`keyof`
- 題目：`InMemoryRepository<T extends { id: string }>`

### Stage 2 驗收標準

- [ ] 能寫出型別安全的可重用函式
- [ ] 能用泛型避免重複程式碼
- [ ] 能在編譯期擋住無效更新

---

## Stage 3: Backend 主流實戰 (Week 3-5)

### 3.1 Node API 基礎 (Express)

- 知識點：router/controller/service/repository 分層
- 題目：Task CRUD API (記憶體版本)

### 3.2 Runtime Validation

- 知識點：TS 型別只在編譯期存在
- 套件：`zod`
- 題目：create/update task 的 body 驗證

### 3.3 NestJS 入門

- 知識點：module、controller、service、DI
- 題目：把 Task CRUD 改寫為 NestJS

### 3.4 Prisma + PostgreSQL

- 知識點：schema、migration、typed client
- 題目：Task/User schema + 查詢分頁

### Stage 3 驗收標準

- [ ] API 有分層，不把邏輯塞進 controller
- [ ] 有資料驗證與錯誤映射
- [ ] 可用 Prisma 完成 CRUD

---

## Stage 4: Frontend 主流實戰 (Week 6-7)

### 4.1 React + Next.js + TypeScript

- 知識點：typed props、資料抓取、載入狀態
- 題目：Task list + create form

### 4.2 Tailwind 與元件化

- 知識點：共用元件、樣式一致性
- 題目：Button/Input/Card 抽離

### 4.3 前後端整合

- 知識點：API error handling、retry、基本 UX
- 題目：完成任務新增、編輯、篩選流程

### Stage 4 驗收標準

- [ ] 介面可用且流程完整
- [ ] 前端型別與後端回傳一致
- [ ] 基本錯誤狀態處理完整

---

## Stage 5: 工程化與交付 (Week 8)

### 5.1 測試

- 單元測試：service 層
- 整合測試：API endpoint
- E2E：核心流程一條

### 5.2 DevOps

- Docker 基礎容器化
- GitHub Actions 跑 lint + test
- 雲端部署 (Vercel/Railway/Render 擇一)

### 5.3 文件與作品集

- README：啟動流程、架構說明、API 說明
- Demo 影片或簡短說明

### Stage 5 驗收標準

- [ ] 測試可執行
- [ ] CI 可跑
- [ ] 專案可部署

---

## 最終 Capstone 專案

專案名稱：Team Task Board

必要功能：

- 任務 CRUD
- 狀態流轉 (`TODO -> IN_PROGRESS -> DONE`)
- 篩選、排序、分頁
- 表單驗證與錯誤處理
- 基本測試與部署

建議技術：

- Backend: NestJS + Prisma + PostgreSQL
- Frontend: Next.js + Tailwind
- Testing: Vitest/Jest + Playwright

---

## 你每次要交什麼給我

請使用 `docs/submission-template.md`。

我會提供：

- 正確性/型別安全/可讀性/測試品質評分
- 問題分級 (critical/normal/minor)
- 修正建議與下一步
