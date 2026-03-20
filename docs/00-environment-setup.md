# TypeScript 從零環境安裝指南 (Windows)

這份文件的目標只有一個：讓你把 repo 跑起來，然後開始做題。

## 1) 安裝必要工具

### Node.js (LTS)

- 到 Node.js 官網下載 LTS 版
- 安裝時保持預設選項即可

安裝後確認：

```bash
node -v
npm -v
```

### 安裝 pnpm

```bash
npm install -g pnpm
pnpm -v
```

### VS Code 建議擴充

- ESLint
- Prettier
- Error Lens（可選）

## 2) 安裝專案依賴

在 repo 根目錄執行：

```bash
pnpm install
```

## 3) 驗證 TypeScript 與學習命令

```bash
pnpm run typecheck
pnpm run learn:list
```

`typecheck` 如果出現 lesson 相關錯誤，不代表環境壞掉；有些題目本來就是要你修。

## 4) 開始一題 lesson

```bash
pnpm run learn:start -- S1-01
```

然後修改對應檔案，例如：

```bash
pnpm run dev -- exercises/stage-1/01_basic_types.ts
```

## 5) 固定學習節奏

1. `pnpm run learn:list`
2. `pnpm run learn:start -- <lesson-id>`
3. 修改 `exercises/...` 題目檔
4. `pnpm run learn:check -- <lesson-id>`
5. 要我批改時，直接說：`請 review <lesson-id>`

## 6) 常見錯誤排查

- `pnpm` 無法使用：重開終端機
- `node` 無法使用：確認 Node 安裝完成後再開新終端機
- `Cannot find module`：先跑 `pnpm install`
- 腳本找不到 lesson：先跑 `pnpm run learn:list` 確認 lesson ID

## 7) 下一步

- 看 `docs/start-here.md`
- 再看 `docs/typescript-learning-path.md`
- 從 `S1-01` 開始
