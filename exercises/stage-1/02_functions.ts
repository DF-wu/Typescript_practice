/*
Lesson 2: Functions, optional params, and union types

Goal:
- Type function params and return values
- Handle optional args and union inputs
*/

// TODO 1: add types to function params and return type
export function formatPrice(value, currency = "USD") {
  return `${currency} ${value.toFixed(2)}`;
}

// TODO 2: implement function normalizeId
// input can be string or number
// output must be string
// examples:
// normalizeId(123) => "123"
// normalizeId("A-7") => "A-7"
export function normalizeId(input: string | number): string {
  return "";
}

type ContactInput = {
  name: string;
  email?: string;
};

// TODO 3: implement buildContactLabel
// rule:
// - if email exists => "name <email>"
// - if email missing => "name <no-email>"
export function buildContactLabel(input: ContactInput): string {
  return "";
}

console.log(formatPrice(12.5));
console.log(formatPrice(12.5, "TWD"));
console.log(normalizeId(123));
console.log(normalizeId("A-7"));
console.log(buildContactLabel({ name: "Tom" }));
console.log(buildContactLabel({ name: "Tom", email: "tom@demo.com" }));
