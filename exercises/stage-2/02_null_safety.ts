/*
Lesson S2-02: Null safety and optional chaining

Goal:
- Practice optional chaining
- Practice nullish coalescing
- Convert partial user data into stable UI text
*/

type UserProfile = {
  id: string;
  name?: string | null;
  email?: string | null;
  address?: {
    city?: string | null;
    country?: string | null;
  } | null;
};

// TODO 1: implement formatUserProfile
// rules:
// - fallback name => "Anonymous"
// - fallback email => "no-email"
// - fallback location => "Unknown"
// - final format => "name | email | location"
export function formatUserProfile(user: UserProfile | null | undefined): string {
  const name = user?.name ?? "Anonymous";
  const email = user?.email ?? "no-email";
  const city = user?.address?.city ?? "Unknown";
  return `${name} | ${email} | ${city}`;
}

console.log(formatUserProfile(null));
console.log(formatUserProfile({ id: "u1", name: "Ada" }));
console.log(
  formatUserProfile({
    id: "u2",
    name: "Bob",
    email: "bob@demo.com",
    address: { city: "Taipei", country: "Taiwan" },
  }),
);
