/*
Lesson S2-04: Generic repository

Goal:
- Practice T extends { id: string }
- Build a reusable in-memory repository
- Update data immutably
*/

type WithId = {
  id: string;
};

export class InMemoryRepository<T extends WithId> {
  constructor(private readonly items: T[] = []) {}

  // TODO 1: return all items
  list(): T[] {
    return this.items;
  }

  // TODO 2: find item by id
  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  // TODO 3: add a new item and return a new repository instance
  add(item: T): InMemoryRepository<T> {
    return new InMemoryRepository([...this.items, item]);
  }

  // TODO 4: update an existing item by id and return a new repository instance
  update(id: string, patch: Partial<Omit<T, "id">>): InMemoryRepository<T> {
    const nextItems = this.items.map((item) => (
      item.id === id ? { ...item, ...patch } : item
    ));
    return new InMemoryRepository(nextItems);
  }
}

type User = {
  id: string;
  name: string;
  email: string;
};

type Order = {
  id: string;
  total: number;
  status: "PENDING" | "PAID";
};

const userRepo = new InMemoryRepository<User>()
  .add({ id: "u1", name: "Ada", email: "ada@demo.com" })
  .update("u1", { name: "Ada Lovelace" });

const orderRepo = new InMemoryRepository<Order>()
  .add({ id: "o1", total: 1200, status: "PENDING" })
  .update("o1", { status: "PAID" });

console.log(userRepo.list());
console.log(orderRepo.getById("o1"));
