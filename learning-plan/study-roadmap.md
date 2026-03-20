# Study Roadmap (Java -> TypeScript)

Reference docs:

- `docs/00-environment-setup.md`
- `docs/typescript-learning-path.md`

## Phase 0 - Setup (Day 1)

Goal: environment ready, commands runnable

- [ ] Install Node.js LTS and pnpm
- [ ] Install dependencies (`pnpm install`)
- [ ] Confirm `pnpm run typecheck` works
- [ ] Run first exercise file with `pnpm run dev -- <file>`

Deliverable:

- Screenshot or text output proving commands run

## Phase 1 - TS Syntax Basics (Week 1)

Goal: no fear of TS syntax and typing

- [ ] Lesson 1: `exercises/stage-1/01_basic_types.ts`
- [ ] Lesson 2: `exercises/stage-1/02_functions.ts`
- [ ] Lesson 3: `exercises/stage-1/03_objects_arrays.ts`

Deliverable:

- Completed TODOs + run output

Success criteria:

- No `any`
- Can explain `let` vs `const`
- Can explain `type` vs `interface`

## Phase 2 - TS Essentials (Week 2)

Goal: type-safe data modeling and logic branching

- [ ] Narrowing and type guards
- [ ] Null safety (`?.`, `??`)
- [ ] Utility types (`Pick`, `Omit`, `Partial`)
- [ ] Generic repository

Deliverable:

- 4 focused exercise files + typecheck clean

Success criteria:

- Can model API response types safely
- Can use generic types to remove duplicate code

## Phase 3 - Backend Mainstream Stack (Week 3-5)

Goal: build backend in production-like architecture

- [ ] Express/NestJS layered architecture
- [ ] Runtime validation (`zod` or DTO validation)
- [ ] Prisma + PostgreSQL CRUD
- [ ] Unit + integration tests

Deliverable:

- Task CRUD backend repo/module with tests

Success criteria:

- Controller is thin, business logic in service
- Validation and error mapping are explicit

## Phase 4 - Frontend Mainstream Stack (Week 6-7)

Goal: consume typed API and ship usable UI

- [ ] Next.js + React + TypeScript basics
- [ ] Form handling and validation
- [ ] Data fetching and state handling
- [ ] Basic UI composition with Tailwind CSS

Deliverable:

- Task list + create/edit UI connected to API

Success criteria:

- Typed request/response flow end to end
- Loading/error states handled cleanly

## Phase 5 - Capstone Project (Week 8)

Goal: portfolio-ready fullstack project

- [ ] Team Task Board API + Web UI
- [ ] Authentication (basic)
- [ ] Filtering/pagination/sorting
- [ ] Docker + CI workflow
- [ ] README and deployment link

Deliverable:

- Publicly runnable project + docs

Success criteria:

- Demo-ready project with tests and docs
