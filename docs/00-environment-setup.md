# TypeScript 從零環境安裝指南 (Windows)

這份文件是給「完全沒碰過 TS」的版本。
照順序做完，你就能開始寫題目。

## 1) 安裝必要工具

### 1.1 安裝 Node.js (LTS)

- 到 Node.js 官網下載 LTS 版安裝程式
- 安裝時保持預設選項即可

安裝完成後，開新終端機確認：

```bash
node -v
npm -v
```

預期：能看到版本號，不是 command not found。

### 1.2 安裝 pnpm

```bash
npm install -g pnpm
pnpm -v
```

### 1.3 安裝 VS Code 推薦擴充

- ESLint
- Prettier
- Error Lens (可選，錯誤提示更明顯)

## 2) 專案初始化 (本倉庫已幫你建立基礎檔案)

你現在的專案已包含：

- `package.json`
- `tsconfig.json`
- `.gitignore`
- `exercises/stage-1/*.ts`

請在專案根目錄執行：

```bash
pnpm install
```

## 3) 驗證 TypeScript 可正常運作

```bash
pnpm run typecheck
```

如果看到型別錯誤，代表環境是正常的（因為題目本來留有 TODO）。

## 4) 如何執行單一練習檔

例如執行 Lesson 1：

```bash
pnpm run dev -- exercises/stage-1/01_basic_types.ts
```

如果程式內有 `console.log`，會直接印出結果。

## 5) 你每次學習的固定流程

1. 打開 `learning-plan/progress-tracker.md`
2. 看目前任務是哪一題
3. 修改 `exercises/...` 題目檔
4. 執行：
   - `pnpm run dev -- <file>`
   - `pnpm run typecheck`
5. 用 `docs/submission-template.md` 格式貼給我批改

## 6) 常見錯誤排查

- `pnpm` 無法使用：重開終端機再試
- `node` 無法使用：確認 Node 安裝完成，重開機或重開終端機
- `Cannot find module`：先跑 `pnpm install`
- 中文路徑亂碼：建議把專案放在英文路徑

## 7) 下一步

- 完成後去 `docs/typescript-learning-path.md`
- 從 Stage 0 / Lesson 0 開始（環境驗證題）
