/*
Lesson S2-03: Utility types

Goal:
- Practice Pick / Omit / Partial
- Prevent invalid patch updates at compile time
- Reuse types instead of redefining everything manually
*/

type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member";
  isActive: boolean;
};

export type PublicUser = Pick<User, "id" | "name" | "role">;
export type UserPatch = Partial<Omit<User, "id">>;

// TODO 1: return only id / name / role
export function buildPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    name: user.name,
    role: user.role,
  };
}

// TODO 2: merge the patch into the original user
// rule: id must never be changed through patch
export function updateUser(user: User, patch: UserPatch): User {
  return {
    ...user,
    ...patch,
  };
}

const baseUser: User = {
  id: "u1",
  name: "Alice",
  email: "alice@demo.com",
  role: "member",
  isActive: true,
};

console.log(buildPublicUser(baseUser));
console.log(updateUser(baseUser, { name: "Alice Chen", isActive: false }));
