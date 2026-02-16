/*
Lesson 3: Objects, arrays, and immutability

Goal:
- Model object shapes with type/interface
- Process arrays using map/filter/reduce
- Avoid mutating source arrays
*/

type TxType = "INCOME" | "EXPENSE";
type Category = "FOOD" | "TRANSPORT" | "SALARY" | "OTHER";

export interface Tx {
  id: string;
  type: TxType;
  category: Category;
  amount: number;
}

const sampleTxs: ReadonlyArray<Tx> = [
  { id: "t1", type: "INCOME", category: "SALARY", amount: 3000 },
  { id: "t2", type: "EXPENSE", category: "FOOD", amount: 250 },
  { id: "t3", type: "EXPENSE", category: "TRANSPORT", amount: 80 },
  { id: "t4", type: "EXPENSE", category: "OTHER", amount: 120 },
];

export type Summary = {
  income: number;
  expense: number;
  balance: number;
  byCategory: Record<Category, number>;
};

// TODO 1: implement summarize
// rules:
// - income is total amount where type=INCOME
// - expense is total amount where type=EXPENSE
// - balance = income - expense
// - byCategory sums amounts by category (always positive totals)
export function summarize(txs: ReadonlyArray<Tx>): Summary {
  return {
    income: 0,
    expense: 0,
    balance: 0,
    byCategory: {
      FOOD: 0,
      TRANSPORT: 0,
      SALARY: 0,
      OTHER: 0,
    },
  };
}

// TODO 2: implement getHighValueExpenses
// return expenses whose amount >= minAmount
export function getHighValueExpenses(
  txs: ReadonlyArray<Tx>,
  minAmount: number,
): Tx[] {
  return [];
}

console.log(summarize(sampleTxs));
console.log(getHighValueExpenses(sampleTxs, 100));
