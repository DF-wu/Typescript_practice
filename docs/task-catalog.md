# TypeScript 任務清單

這份是 lesson 索引。用途不是解釋所有概念，而是讓你快速知道「這題在哪裡、在練什麼、怎麼驗收」。

## Stage 1 - TS 語法入門

### S1-01 基本型別與變數

- 檔案：`exercises/stage-1/01_basic_types.ts`
- 練習：primitive types、變數宣告、函式回傳型別
- 驗收：完成 TODO + 跑過 lesson 檔

### S1-02 函式、可選參數、Union

- 檔案：`exercises/stage-1/02_functions.ts`
- 練習：function typing、optional parameter、union type
- 驗收：完成 TODO + 至少 3 組輸出

### S1-03 物件、陣列、不可變資料

- 檔案：`exercises/stage-1/03_objects_arrays.ts`
- 練習：interface、ReadonlyArray、reduce
- 驗收：完成 TODO + 看懂 summary 結果

## Stage 2 - TS 型別核心能力

### S2-01 Narrowing 與 Type Guard

- 檔案：`exercises/stage-2/01_narrowing.ts`
- 練習：`typeof`、custom guard、union narrowing
- 驗收：三種輸入都能產生正確結果

### S2-02 Null Safety

- 檔案：`exercises/stage-2/02_null_safety.ts`
- 練習：`?.`、`??`、nullable input handling
- 驗收：完整資料與缺值資料都能正常輸出

### S2-03 Utility Types

- 檔案：`exercises/stage-2/03_utility_types.ts`
- 練習：`Pick`、`Omit`、`Partial`
- 驗收：patch 不能更新 `id`

### S2-04 Generic Repository

- 檔案：`exercises/stage-2/04_generic_repository.ts`
- 練習：`T extends { id: string }`、generic class、immutable update
- 驗收：User / Order 兩組示範都能跑

## Stage 3+

Stage 3 之後先以 roadmap 為主，等你完成 Stage 1 / 2 後再往下一層擴張實作。

## Review rule

- 檢查：`pnpm run learn:check -- <lesson-id>`
- 直接批改：在對話中說 `請 review <lesson-id>`
- 需要快照：`pnpm run learn:review -- <lesson-id>`
