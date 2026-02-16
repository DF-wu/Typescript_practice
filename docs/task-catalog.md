# TypeScript 任務清單 (完整題庫)

這份是你可直接照著做的題庫。每題都包含知識點與交付物。

## Stage 0 - 環境題

### S0-01: 安裝驗證

- 知識點：Node/pnpm/tsc 角色
- 任務：完成 `docs/00-environment-setup.md` 全步驟
- 交付：`node -v`, `pnpm -v`, `pnpm run typecheck` 輸出

### S0-02: Script 理解

- 知識點：`package.json` scripts
- 任務：說明 `dev`, `typecheck`, `build` 三者差異
- 交付：3 句說明 + 你執行過的指令

## Stage 1 - 語法入門題

### S1-01: 基本型別

- 檔案：`exercises/stage-1/01_basic_types.ts`
- 知識點：primitive types, function return type
- 交付：完成 TODO + 執行結果

### S1-02: 函式與 union

- 檔案：`exercises/stage-1/02_functions.ts`
- 知識點：optional param, union type
- 交付：完成 TODO + 3 個測試案例

### S1-03: 物件與陣列

- 檔案：`exercises/stage-1/03_objects_arrays.ts`
- 知識點：interface, ReadonlyArray, reduce
- 交付：完成 TODO + 統計結果

## Stage 2 - 型別進階題

### S2-01: Narrowing

- 知識點：`typeof`, `in`, custom guard
- 任務：`parseInput(input: string | number | Date)`
- 交付：3 種輸入 + discriminated union 結果

### S2-02: Null 安全

- 知識點：`?.`, `??`, strict null
- 任務：`formatUserProfile(user)`
- 交付：缺值與完整值測試

### S2-03: Utility Types

- 知識點：`Pick/Omit/Partial`
- 任務：`updateUser(id, patch)`
- 交付：合法 patch 與非法 patch 測試

### S2-04: Generic Repository

- 知識點：`T extends`, `keyof`
- 任務：`InMemoryRepository<T extends { id: string }>`
- 交付：User 與 Order 兩組示範

## Stage 3 - Backend 題

### S3-01: Express Task CRUD

- 知識點：controller/service/repository 分層
- 交付：REST API 基本 CRUD

### S3-02: Zod 驗證

- 知識點：runtime validation
- 交付：create/update body 驗證 + 400 回應

### S3-03: 錯誤模型

- 知識點：`Result<T,E>`、error mapping
- 交付：404/400/409 錯誤對應

### S3-04: NestJS 化

- 知識點：module, service, DI
- 交付：Task CRUD NestJS 版本

### S3-05: Prisma + PostgreSQL

- 知識點：schema, migration
- 交付：Task + User model, list query

## Stage 4 - Frontend 題

### S4-01: Next.js Task List

- 知識點：typed fetch, state handling
- 交付：可顯示任務列表

### S4-02: Task Form

- 知識點：form state, validation display
- 交付：建立任務表單

### S4-03: 編輯與狀態流轉

- 知識點：UI event handling, mutation flow
- 交付：狀態更新可同步到 API

### S4-04: Tailwind 元件化

- 知識點：共用元件抽取
- 交付：Button/Input/Card 共用元件

## Stage 5 - 工程化題

### S5-01: 測試

- 知識點：unit, integration, e2e
- 交付：至少 1 單元 + 1 整合 + 1 e2e

### S5-02: Docker

- 知識點：multi-service compose
- 交付：web/api/db 一鍵啟動

### S5-03: GitHub Actions

- 知識點：CI pipeline
- 交付：push 後跑 lint + test + build

### S5-04: 部署

- 知識點：部署流程與環境變數
- 交付：可訪問網址 + README 說明

## Capstone

### CAP-01: Team Task Board

- 必做功能：CRUD / 狀態流轉 / 篩選分頁 / 驗證 / 測試 / 部署
- 交付：repo + demo link + readme

## 提交規則

- 一次交一題或一個小階段
- 使用 `docs/submission-template.md`
- 我會給你逐題評分與修正方向
