/*
Lesson S2-01: Narrowing and type guards

Goal:
- Practice typeof-based narrowing
- Write a custom type guard
- Return different result shapes from one union input
*/

export type ParsedInput =
  | { kind: "text"; value: string; length: number }
  | { kind: "number"; value: number; isPositive: boolean }
  | { kind: "date"; value: string; timestamp: number };

// TODO 1: implement custom type guard for Date
export function isDateValue(value: string | number | Date): value is Date {
  return value instanceof Date;
}

// TODO 2: implement parseInput
// rules:
// - string => trim it and return kind="text"
// - number => return kind="number"
// - Date => return kind="date" and use toISOString()
export function parseInput(input: string | number | Date): ParsedInput {
  if (typeof input === "string") {
    return {
      kind: "text",
      value: input,
      length: 0,
    };
  }

  if (typeof input === "number") {
    return {
      kind: "number",
      value: input,
      isPositive: false,
    };
  }

  return {
    kind: "date",
    value: input.toISOString(),
    timestamp: 0,
  };
}

console.log(parseInput("  hello  "));
console.log(parseInput(42));
console.log(parseInput(new Date("2026-03-21T00:00:00.000Z")));
