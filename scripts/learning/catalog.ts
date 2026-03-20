export type Lesson = {
  id: string;
  stage: string;
  stageTitle: string;
  title: string;
  filePath: string;
  goals: string[];
  deliverables: string[];
};

export const lessons: Lesson[] = [
  {
    id: "S1-01",
    stage: "Stage 1",
    stageTitle: "TS 語法入門",
    title: "基本型別與變數",
    filePath: "exercises/stage-1/01_basic_types.ts",
    goals: [
      "熟悉 string / number / boolean 與變數宣告",
      "替函式補上明確輸入與輸出型別",
      "先建立看到 TypeScript 語法也不怕的手感",
    ],
    deliverables: [
      "完成 TODO",
      "能解釋 let / const 差異",
      "能執行檔案並看懂輸出",
    ],
  },
  {
    id: "S1-02",
    stage: "Stage 1",
    stageTitle: "TS 語法入門",
    title: "函式、可選參數、Union",
    filePath: "exercises/stage-1/02_functions.ts",
    goals: [
      "替函式參數與回傳值補上型別",
      "理解 optional parameter 與 default value",
      "學會用 union type 描述多種輸入",
    ],
    deliverables: [
      "完成 TODO",
      "執行 3 組以上 console output",
      "沒有 any",
    ],
  },
  {
    id: "S1-03",
    stage: "Stage 1",
    stageTitle: "TS 語法入門",
    title: "物件、陣列、不可變資料",
    filePath: "exercises/stage-1/03_objects_arrays.ts",
    goals: [
      "用 type / interface 建立資料模型",
      "練習 map / filter / reduce",
      "習慣 ReadonlyArray 與不直接修改來源資料",
    ],
    deliverables: [
      "完成 summarize 與 getHighValueExpenses",
      "能說明 interface 與 type 的使用時機",
      "執行後看懂 summary 結果",
    ],
  },
  {
    id: "S2-01",
    stage: "Stage 2",
    stageTitle: "TS 型別核心能力",
    title: "Narrowing 與 Type Guard",
    filePath: "exercises/stage-2/01_narrowing.ts",
    goals: [
      "用 typeof 與自訂 guard 縮小型別範圍",
      "把 string | number | Date 轉成可預期的結果物件",
      "感受 runtime branch 與 compile-time safety 如何一起工作",
    ],
    deliverables: [
      "完成 parseInput 與 isDateValue",
      "示範三種輸入都能得到正確結果",
      "沒有 any",
    ],
  },
  {
    id: "S2-02",
    stage: "Stage 2",
    stageTitle: "TS 型別核心能力",
    title: "Null Safety 與 Optional Chaining",
    filePath: "exercises/stage-2/02_null_safety.ts",
    goals: [
      "熟悉 optional chaining 與 nullish coalescing",
      "處理缺值資料而不是假設資料一定完整",
      "把 nullable input 格式化成穩定輸出",
    ],
    deliverables: [
      "完成 formatUserProfile",
      "示範完整資料與缺值資料兩種情境",
      "避免非必要的 if-else 巢狀",
    ],
  },
  {
    id: "S2-03",
    stage: "Stage 2",
    stageTitle: "TS 型別核心能力",
    title: "Utility Types",
    filePath: "exercises/stage-2/03_utility_types.ts",
    goals: [
      "用 Pick / Omit / Partial 減少重複型別",
      "限制 patch 只允許合法欄位",
      "體會 compile-time 防呆的價值",
    ],
    deliverables: [
      "完成 buildPublicUser 與 updateUser",
      "patch 不能更新 id",
      "能說明 Utility Types 的用途",
    ],
  },
  {
    id: "S2-04",
    stage: "Stage 2",
    stageTitle: "TS 型別核心能力",
    title: "Generic Repository",
    filePath: "exercises/stage-2/04_generic_repository.ts",
    goals: [
      "用泛型建立可重用的資料存取類別",
      "用 T extends 約束必要欄位",
      "練習 class 與 immutable update",
    ],
    deliverables: [
      "完成 InMemoryRepository<T>",
      "用 User 與 Order 兩種型別示範",
      "update 只能更新既有欄位",
    ],
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return lessons.find((lesson) => lesson.id === id);
}
