/*
Lesson 1: Primitive types and variables

Goal:
- Practice string/number/boolean typing
- Practice explicit function return types

Instructions:
1) Fill all TODOs.
2) Do not use any.
3) Run with ts-node or compile with tsc.
*/

type UserRole = "admin" | "member";

// TODO 1: declare a constant named appName with type string and value "TS Learning Lab"
const appName = "";

// TODO 2: declare a variable named maxUsers with type number and value 100
let maxUsers = 0;

// TODO 3: declare a variable named isOpen with type boolean and value true
let isOpen = false;

// TODO 4: fix function signature and return type
function buildWelcomeMessage(name, role): string {
  return `Welcome ${name}, role=${role}`;
}

// TODO 5: create function canJoin(currentUsers, maxUsers) => boolean
// rule: return true when currentUsers < maxUsers
function canJoin(currentUsers: number, maxUsers: number): boolean {
  return false;
}

console.log(appName);
console.log(maxUsers, isOpen);
console.log(buildWelcomeMessage("Alice", "admin"));
console.log(canJoin(50, 100));
