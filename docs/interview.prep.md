# Interview Prep — Nguyen Anh Tan (Senior Frontend Engineer)

> Danh sách kiến thức cần ôn tập, bám sát theo `RESUME.md`.
> Ưu tiên theo mức độ resume nhấn mạnh: **React · TypeScript · Frontend Architecture · Performance · AI/LLM integration · Real-time UIs · Leadership**.
> Ký hiệu độ ưu tiên: 🔴 phải nắm chắc (chắc chắn bị hỏi) · 🟡 nên ôn · 🟢 nếu được hỏi sâu / bonus.

---

## 0. Cách dùng tài liệu này

- Với mỗi mục: đọc **Key topics** → tự trả lời **Câu hỏi mẫu** không nhìn tài liệu → tra cứu lại chỗ hổng.
- Mọi con số trong resume (~30%, ~3,000 beacons/s, ~80% coverage...) **phải giải thích được cách đo và cách đạt được** — interviewer sẽ đào sâu.
- Mỗi dự án trong resume → chuẩn bị 1 câu chuyện theo **STAR** (Situation, Task, Action, Result). Xem §17.
- Ưu tiên ôn theo thứ tự: §2 → §4 → §3 → §7 → §8 → §6 → §9 → phần còn lại.

---

## 1. Foundations — JavaScript (ES6+) 🔴

Resume: *"JavaScript (ES6+)"*, nền tảng cho mọi thứ React.

**Key topics**
- Closure, scope (var/let/const), hoisting, Temporal Dead Zone.
- `this` binding: default / implicit / explicit (call, apply, bind) / arrow function.
- Prototype & prototype chain, inheritance, `class` syntax sugar.
- Event loop: call stack, microtask vs macrotask queue, `Promise` vs `setTimeout` ordering.
- Async: callbacks → Promises → async/await, `Promise.all/allSettled/race/any`, error handling.
- Immutability, shallow vs deep copy, structured clone, spread/rest.
- Modules: ESM vs CommonJS, tree-shaking, dynamic `import()`.
- Iterators, generators, `Symbol`, `Map/Set/WeakMap/WeakRef`.
- Debounce & throttle (tự viết được từ đầu).

**Câu hỏi mẫu**
- Giải thích output của một đoạn code trộn `setTimeout`, `Promise.then`, và code đồng bộ.
- Viết `debounce` / `throttle` không dùng thư viện.
- Sự khác nhau giữa deep clone thủ công, `JSON.parse(JSON.stringify())`, và `structuredClone`?
- Closure gây memory leak như thế nào?

---

## 2. TypeScript 🔴

Resume nhấn mạnh: *"~8 years... in React and **TypeScript**"*.

**Key topics**
- Type vs Interface — khi nào dùng cái nào; declaration merging.
- Generics: constraint (`extends`), default type params, generic components/hooks.
- Utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`, `ReturnType`, `Parameters`, `Awaited`, `NonNullable`.
- Union / intersection / discriminated unions; narrowing & type guards (`typeof`, `in`, `instanceof`, user-defined `is`).
- `keyof`, `typeof`, indexed access types, mapped types, conditional types (`T extends U ? X : Y`), `infer`.
- Literal types, template literal types, `as const`.
- `unknown` vs `any` vs `never`; assertion (`as`) và tại sao nên tránh lạm dụng.
- Typing React: props, `children`, `ReactNode`, event handlers, `useRef`, generic hooks, `forwardRef`.
- `tsconfig` quan trọng: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`.

**Câu hỏi mẫu**
- Viết một generic `useFetch<T>()` hook có type-safe.
- Discriminated union để model API response (loading/success/error) như thế nào?
- Giải thích conditional types + `infer` qua ví dụ `ReturnType` tự viết.
- Khác nhau `interface` và `type` — cái nào extend được, cái nào merge được?

---

## 3. React — Deep 🔴

Resume: *"specialize in frontend architecture... state management at scale"*, 4 production apps, code-splitting/memoization.

**Key topics**
- JSX → `React.createElement`, virtual DOM, reconciliation & diffing, `key` prop.
- Rendering: khi nào component re-render; render vs commit phase; Fiber (high level).
- Hooks:
  - `useState`, `useEffect` (dependency array, cleanup, stale closure), `useLayoutEffect` (khác gì `useEffect`).
  - `useMemo`, `useCallback` — khi nào **nên** và khi nào **không** dùng.
  - `useRef` (DOM ref + mutable value), `useContext`, `useReducer`.
  - `useImperativeHandle`, `useTransition`, `useDeferredValue`, `useId`, `useSyncExternalStore`.
  - Rules of Hooks & tại sao (linked-list order).
- Custom hooks — tách logic tái sử dụng.
- Performance: `React.memo`, memoization, list virtualization, `startTransition`, tránh re-render thừa, key stability.
- Context: use cases + vấn đề re-render toàn bộ consumer.
- Error boundaries, Suspense, lazy loading (`React.lazy`).
- Controlled vs uncontrolled components.
- Refs & portals.
- Concurrent features (React 18): automatic batching, transitions.
- **React 19** (nếu được hỏi): `use()`, Actions, `useOptimistic`, `useActionState`, Server Components (khái niệm).

**Câu hỏi mẫu**
- Vì sao `useEffect` chạy 2 lần trong dev (StrictMode)?
- Stale closure trong `useEffect` là gì, cách fix?
- Khi nào `useMemo`/`useCallback` gây hại nhiều hơn lợi?
- Giải thích reconciliation và vai trò của `key`.
- Cách debug một component re-render quá nhiều (React DevTools Profiler).

---

## 4. State Management 🔴

Resume: *"state management at scale"*, Redux / Redux-Saga, React Query, NgXS, MobX.

**Key topics**
- **Redux**: store, actions, reducers, immutability, middleware, selectors; Redux Toolkit (`createSlice`, `createAsyncThunk`, RTK Query).
- **Redux-Saga**: generator-based side effects, `takeLatest/takeEvery`, `call/put/select/fork`, so với Redux-Thunk.
- **React Query (TanStack Query)**: server state vs client state, caching, `staleTime` vs `gcTime`, invalidation, optimistic updates, `useQuery`/`useMutation`.
- Context + `useReducer` như một state solution nhẹ.
- Zustand / Jotai / Recoil (khái niệm, khi nào chọn thay Redux).
- **NgXS** (Angular, dự án Dialog ORION) và **MobX** (Flutter/Gomo) — observable/store pattern.
- Nguyên tắc: **server state ≠ UI state ≠ form state ≠ URL state** — chọn tool phù hợp cho từng loại.

**Câu hỏi mẫu**
- Khi nào bạn dùng React Query thay vì Redux? (server state vs client state)
- Redux-Saga vs Thunk — trade-off?
- Cách xử lý optimistic update và rollback khi lỗi?
- Kiến trúc state cho app lớn: chia store thế nào để tránh over-fetch / re-render?

---

## 5. JavaScript Frameworks — Secondary 🟡

Resume: Vue, Next.js, Angular; React Native, Flutter.

**Next.js** (dự án hiện tại, nên nắm khá chắc — có thể lên 🔴 tùy JD)
- Rendering strategies: CSR, SSR, SSG, ISR — khác nhau & khi nào dùng.
- App Router vs Pages Router; Server Components vs Client Components.
- Data fetching, caching, `generateStaticParams`, streaming, `loading.tsx`.
- Route handlers / API routes, middleware.
- Image/font optimization, `next/dynamic`.

**Vue** (dự án Colors) 🟡
- Reactivity system (ref/reactive, Proxy), Composition API vs Options API.
- `computed` vs `watch`, lifecycle, `v-model`, slots.
- So sánh Vue vs React (reactivity vs re-render).

**Angular** (dự án Dialog ORION) 🟢
- Components/modules, DI, RxJS observables, change detection (zone.js), NgRx/NgXS.

**Mobile** 🟢
- React Native: bridge/JSI, khác gì web React.
- Flutter/Dart (Gomo): widget tree, state management (MobX), so với RN.

**Câu hỏi mẫu**
- SSR vs SSG vs ISR — cho ví dụ use case mỗi loại.
- Server Components giải quyết vấn đề gì so với SSR truyền thống?
- So sánh reactivity của Vue với model re-render của React.

---

## 6. Performance & Core Web Vitals 🔴

Resume: *"LCP ~3.4s → ~1.6s, Lighthouse ~72 → ~95, bundle ~-45%"* — **phải giải thích được cách đạt**.

**Key topics**
- Core Web Vitals: **LCP, INP** (thay FID từ 2024), **CLS** — định nghĩa, ngưỡng tốt, cách đo.
- Loading: code-splitting (route-based & component-based), lazy loading, tree-shaking, dynamic import.
- Bundle analysis: `webpack-bundle-analyzer` / `rollup-plugin-visualizer`, giảm bundle size, tách vendor chunk.
- Rendering perf: memoization, virtualization (react-window/virtuoso), tránh layout thrashing, `content-visibility`.
- Network: HTTP caching, CDN, preload/prefetch/preconnect, compression (gzip/brotli), image formats (WebP/AVIF), responsive images.
- Runtime: debounce/throttle, web workers, avoid long tasks (INP).
- Measuring: Lighthouse, WebPageTest, Chrome DevTools Performance panel, React Profiler, `PerformanceObserver`, RUM.
- Critical rendering path, render-blocking resources.

**Câu hỏi mẫu**
- LCP của bạn từ 3.4s xuống 1.6s — bạn đã làm gì cụ thể? (đo bằng gì, tối ưu resource nào?)
- Bundle giảm 45% bằng cách nào — code-splitting ở đâu, tách chunk thế nào?
- INP là gì, khác FID ra sao, cách cải thiện?
- CLS bị gây ra bởi những gì và cách fix?

---

## 7. Frontend Architecture & Design Systems 🔴

Resume: *"frontend architecture, reusable component/design systems"*, shared component library, owned architecture & code-review standards.

**Key topics**
- Component-driven development, atomic design (atoms→molecules→organisms).
- Design system: design tokens, theming, Storybook, component API design (props, composition, compound components).
- Reusable component library: versioning, publishing, documentation, accessibility baked-in.
- Architecture patterns: container/presentational, hooks-based logic separation, feature-based folder structure, monorepo (Nx/Turborepo), micro-frontends (khái niệm).
- Separation of concerns: UI / state / data-fetching / business logic.
- Code quality: ESLint/Prettier, code-review standards, conventional commits, husky/lint-staged.
- Scalability: khi team lên 6–7 người thì tổ chức code & convention thế nào để không dẫm chân nhau.

**Câu hỏi mẫu**
- Thiết kế API cho một `<Button>` / `<Select>` tái sử dụng — bạn expose props gì, dùng composition hay config?
- Compound component pattern là gì, khi nào dùng?
- Bạn thiết lập design system cho team 6 người thế nào? (tokens, Storybook, review gate)
- Làm sao đảm bảo consistency & accessibility across teams?

---

## 8. CSS, Styling & Accessibility 🔴

Resume: Tailwind CSS, styled-components, *"responsive & accessible UI"*, HTML5/CSS3.

**Key topics**
- Layout: Flexbox, Grid, positioning, stacking context, z-index.
- Responsive: media queries, mobile-first, container queries, `clamp()`, fluid typography.
- Box model, specificity, cascade, inheritance, BEM.
- Modern CSS: custom properties (variables), logical properties, `:has()`, nesting.
- **Tailwind**: utility-first triết lý, config/theme, `@apply`, JIT, pros/cons vs CSS-in-JS.
- **styled-components / CSS-in-JS**: runtime vs zero-runtime (vanilla-extract), theming, SSR concerns.
- **Accessibility (a11y)** — resume nhấn mạnh "accessible":
  - Semantic HTML, ARIA roles/attributes (và khi nào KHÔNG cần ARIA).
  - Keyboard navigation, focus management, focus trap (modal).
  - Screen readers, `alt`, labels, `aria-live`.
  - Color contrast, WCAG 2.1 AA, prefers-reduced-motion.
- Animations: CSS transitions/animations vs JS, performance (transform/opacity), `will-change`.

**Câu hỏi mẫu**
- Tailwind vs CSS-in-JS — trade-off về performance, DX, bundle?
- Làm accessible modal: focus trap, ESC, aria, restore focus — mô tả đầy đủ.
- Cách debug z-index/stacking context.
- Fluid typography với `clamp()` hoạt động thế nào?

---

## 9. Testing & Quality 🔴

Resume: *"~40% → ~80% coverage, -35% regression"*, Jest, RTL, Cypress, Playwright, TDD, CI coverage gating.

**Key topics**
- Testing pyramid: unit / integration / E2E — tỉ lệ hợp lý.
- **Jest**: matchers, mocking (`jest.mock`, `jest.fn`, spies), fake timers, snapshot testing (và lạm dụng).
- **React Testing Library**: query priority (`getByRole` > `getByText`...), user-centric testing, `userEvent` vs `fireEvent`, `waitFor`/`findBy`, tránh test implementation details.
- **Playwright / Cypress**: E2E, selectors, fixtures, network mocking, flaky test handling, parallelization.
- **TDD**: red-green-refactor.
- Test doubles: mock vs stub vs spy vs fake.
- CI coverage gating: threshold, khi nào coverage là chỉ số giả (coverage cao vẫn có thể test kém).
- Testing hooks, async, context, error states.

**Câu hỏi mẫu**
- Vì sao RTL khuyến khích `getByRole` thay vì `getByTestId`?
- Bạn nâng coverage 40%→80% thế nào mà không viết test vô nghĩa? (đo -35% regression ra sao)
- Chiến lược chống flaky test trong Playwright.
- Test một component gọi API bất đồng bộ — mock ở tầng nào?

---

## 10. Real-time & High-throughput / Data-heavy UIs 🔴

Resume điểm nhấn mạnh nhất: *"rendering ~3,000 location beacons/second"*, *"map render under ~16ms (60fps)"*, RxJS/NgXS, OpenLayers.

**Key topics**
- Real-time transport: WebSocket, SSE, polling/long-polling, WebRTC — trade-off.
- **RxJS**: Observable/Subject, operators (`map`, `filter`, `debounceTime`, `throttleTime`, `buffer`, `bufferTime`, `mergeMap/switchMap/concatMap/exhaustMap`, `distinctUntilChanged`), backpressure, subscription management & unsubscribe.
- High-frequency data handling: batching, throttling render, requestAnimationFrame, coalescing updates, off-main-thread (web workers).
- Rendering 60fps: 16ms budget, avoid layout thrash, canvas vs SVG vs DOM, GPU compositing.
- **Maps/geo**: OpenLayers layers/sources/features, tile rendering, clustering, viewport culling; Navitime routing APIs.
- Virtualization for large lists/tables.
- Memory management với stream dữ liệu liên tục (leak từ subscription).

**Câu hỏi mẫu**
- 3,000 beacons/s mà không lag — pipeline của bạn thế nào? (batch, throttle, rAF, culling, canvas?)
- `switchMap` vs `mergeMap` vs `concatMap` vs `exhaustMap` — cho ví dụ mỗi cái.
- Giữ render < 16ms bằng cách nào khi data đổi liên tục?
- WebSocket vs SSE cho location streaming — chọn cái nào, vì sao?

---

## 11. AI / LLM Integration 🔴 (điểm nổi bật, recent focus)

Resume: *"LLM-powered features (chatbots, AI writing assistant), streaming-response UI"*, *"AI-agent & automation framework built on Claude and Codex"*, open-source AI ChatPad.

**Key topics**
- LLM basics: tokens, context window, temperature/top-p, system vs user prompts, function/tool calling.
- **Streaming UI**: SSE / fetch `ReadableStream`, incremental rendering, token-by-token display, cancel/abort (`AbortController`), backpressure, markdown streaming.
- Chatbot UX: message state, optimistic UI, retry, error/timeout handling, conversation history, context management.
- RAG (Retrieval-Augmented Generation) — khái niệm, embeddings, vector search (nếu được hỏi).
- AI agents & workflows: tools/skills, planning loop, orchestration (framework bạn tự build trên Claude/Codex).
- Prompt engineering, structured output (JSON mode / schema), guarding against hallucination.
- Cost/latency trade-offs, caching, rate limiting.
- Frontend integration: API layer, secure key handling (không để lộ key ở client), proxy backend.

**Câu hỏi mẫu**
- Bạn build streaming-response UI thế nào? (SSE vs ReadableStream, render incremental, abort)
- Support-ticket deflection ~30% đo ra sao? Chatbot giải quyết loại câu hỏi nào?
- Kiến trúc AI-agent framework (skills/workflows) của bạn — orchestration ra sao, cắt delivery time 25% thế nào?
- Xử lý streaming bị gián đoạn / user hủy giữa chừng?
- Làm sao đảm bảo API key không lộ ở frontend?

---

## 12. Backend Fluency 🟡

Resume: *"full-stack fluency (Node.js / NestJS, REST & GraphQL)"*, 20+ APIs, PostgreSQL.

**Key topics**
- **Node.js**: event loop (khác browser), streams, non-blocking I/O, `libuv` (high level), cluster/worker threads.
- **NestJS**: modules, controllers, providers, DI, pipes/guards/interceptors, DTO validation.
- **Express**: middleware, routing, error handling.
- **REST**: resource design, HTTP methods/status codes, idempotency, versioning, pagination, HATEOAS (khái niệm).
- **GraphQL**: schema/resolvers, query vs mutation vs subscription, N+1 problem & DataLoader, over/under-fetching vs REST.
- Auth: JWT, session, OAuth2, refresh token, CORS, CSRF, XSS (bảo mật frontend↔backend).
- **Databases**: PostgreSQL/MySQL (SQL, joins, indexing, transactions, N+1), MongoDB (khi nào NoSQL), Firebase.
- API contract & frontend↔backend handoff (resume: -40% handoff time — nói được cách làm: shared types, OpenAPI, mock).

**Câu hỏi mẫu**
- REST vs GraphQL — khi nào chọn cái nào cho một feature cụ thể?
- N+1 problem xảy ra ở đâu (DB & GraphQL) và fix thế nào?
- Bạn giảm handoff time frontend↔backend 40% bằng cách nào? (contract-first, codegen, mock server?)
- JWT vs session — trade-off, lưu token ở đâu (localStorage vs httpOnly cookie)?

---

## 13. Web Fundamentals & Security 🟡

Không ghi rõ trong resume nhưng gần như chắc bị hỏi ở level Senior.

**Key topics**
- Browser: rendering pipeline, critical rendering path, repaint/reflow, event bubbling/capturing, delegation.
- HTTP: methods, status codes, headers, HTTP/1.1 vs 2 vs 3, caching headers (`Cache-Control`, `ETag`), CORS chi tiết.
- Storage: cookies vs localStorage vs sessionStorage vs IndexedDB.
- **Security**: XSS (stored/reflected/DOM), CSRF, clickjacking, CSP, SameSite cookies, sanitization, dependency vulnerabilities, secure auth flows.
- PWA/Service Workers, offline, caching strategies (nếu được hỏi).
- Web APIs: `IntersectionObserver`, `ResizeObserver`, `MutationObserver`, `requestIdleCallback`.

**Câu hỏi mẫu**
- XSS xảy ra thế nào trong React (dangerouslySetInnerHTML) và cách phòng?
- CORS hoạt động ra sao, preflight request là gì?
- localStorage vs httpOnly cookie cho lưu token — bảo mật khác nhau chỗ nào?

---

## 14. Tooling, DevOps & Build 🟡

Resume: Vite/Webpack, AWS, Docker, CI/CD, Git, Figma.

**Key topics**
- **Build tools**: Vite (esbuild/Rollup, HMR) vs Webpack (loaders, plugins, config) vs esbuild/SWC; khác nhau về tốc độ & cơ chế.
- Module bundling, tree-shaking, code-splitting config, source maps.
- **Git**: branching (GitFlow/trunk-based), rebase vs merge, cherry-pick, resolve conflict, interactive workflows, PR review flow.
- **CI/CD**: pipeline stages, coverage gating, GitHub Actions (repo này có `.github/`), build & deploy static.
- **Docker**: image vs container, layers, multi-stage build (cơ bản).
- **AWS**: S3/CloudFront (static hosting), Lambda, EC2 (khái niệm), khi nào dùng gì.
- Monorepo tooling, package management (yarn/npm/pnpm), lockfiles.

**Câu hỏi mẫu**
- Vite nhanh hơn Webpack ở dev nhờ đâu (ESM native, esbuild)?
- Rebase vs merge — khi nào dùng, rủi ro của rebase?
- Multi-stage Docker build giải quyết vấn đề gì?

---

## 15. Frontend System Design 🔴 (senior sẽ có vòng này)

**Key topics & framework trả lời**
1. Requirements: functional + non-functional (scale, latency, offline, a11y, i18n).
2. Component architecture & data flow.
3. State management strategy (server/client/URL state).
4. API design & data fetching (REST/GraphQL, caching, pagination, real-time).
5. Performance (loading, rendering, bundle, CWV).
6. Scalability & maintainability (design system, code org, team scale).
7. Trade-offs & bottlenecks.

**Bài tập thường gặp** (chuẩn bị 1–2 cái)
- Design a news feed / infinite scroll (virtualization, pagination, caching).
- Design a chat / real-time app (WebSocket, message state, optimistic UI) — **liên quan trực tiếp AI ChatPad của bạn**.
- Design an autocomplete/typeahead (debounce, caching, keyboard nav, a11y).
- Design a data-heavy dashboard / real-time map (liên quan Dialog ORION).
- Design a design system / component library.
- Design an image carousel / data table with sort-filter-paginate.

**Câu hỏi mẫu**
- Thiết kế Google-Docs-style collaborative editor (CRDT/OT — khái niệm).
- Thiết kế real-time location dashboard cho 3000 beacons/s — chính là project của bạn, chuẩn bị kỹ.

---

## 16. Data Structures, Algorithms & Coding 🟡

Nhiều công ty (đặc biệt product/outsourcing lớn, cross-border) vẫn có vòng coding.

**Key topics**
- Arrays/strings: two pointers, sliding window, hash map.
- Recursion, sorting/searching (binary search), Big-O analysis.
- Stack/queue, linked list, tree/BFS/DFS, basic graph.
- JS-specific: array methods, `Map/Set`, dùng đúng cấu trúc.
- Frontend-flavored coding: implement `debounce/throttle`, `Promise.all`, event emitter, deep clone, flatten array, `curry`, retry-with-backoff, LRU cache, virtual DOM diff (mini).

**Câu hỏi mẫu**
- Implement `Promise.all` / `Promise.allSettled` từ đầu.
- Implement một LRU cache.
- Flatten nested array không dùng `.flat()`.
- Event emitter (`on/off/emit`).

---

## 17. Leadership, Mentoring & Behavioral 🔴

Resume: *"led frontend teams of up to 7... owned architecture and code-review standards, mentored developers"*, Team Lead ở FPT, Best Performance Member ×2, Udemy mentor.

**Chuẩn bị câu chuyện STAR cho:**
- Dẫn dắt team 7 người (NTA UniNext) → giảm defect ~30%: bạn set up architecture/review/mentoring thế nào.
- Xử lý conflict trong team / bất đồng technical decision.
- Mentor junior (Udemy 10+ learners, RTL course) — cách bạn nâng người khác lên.
- Một quyết định kiến trúc khó & trade-off bạn đã cân nhắc.
- Một lần bạn sai / dự án thất bại và bài học.
- Deadline gấp / scope creep — cách bạn ưu tiên.
- Thuyết phục stakeholder/team theo một hướng kỹ thuật.
- Code review standards bạn thiết lập — cân bằng chất lượng vs tốc độ.

**Behavioral cần sẵn**
- "Tell me about yourself" (2 phút, bám arc: 8 năm FE → architecture/leadership → AI focus).
- Tại sao nghỉ chỗ cũ / tại sao muốn vào công ty này.
- Điểm mạnh / điểm yếu (thật, kèm cách cải thiện).
- Câu hỏi ngược lại cho interviewer (chuẩn bị 3–5 câu chất lượng).

---

## 18. Per-Project Deep-Dive (bám resume — interviewer sẽ đào bất kỳ dòng nào) 🔴

Với mỗi project, chuẩn bị: **vai trò · tech · vấn đề khó nhất · con số & cách đo · điều bạn tự hào · điều sẽ làm khác đi**.

| Project | Cần nắm chắc |
|---|---|
| **Vitalify — LLM features** | Streaming UI, chatbot/AI writing assistant, đo deflection ~30%, cut content-ops ~8h/tuần. |
| **Vitalify — AI-agent framework** | Kiến trúc skills/workflows trên Claude/Codex, cắt delivery ~25% across 5+ projects. |
| **Vitalify — CWV** | LCP 3.4→1.6s, Lighthouse 72→95, bundle -45%: cách đo & tối ưu cụ thể. |
| **Colors (Vue/NestJS)** | PDF → family tree parsing/rendering, ~300 docs/day, Vue reactivity, NestJS API. |
| **OMRON Pressure (React/PHP)** | Blood-pressure app, ~1000 users, measurement tracking/history. |
| **NTA UniNext (React/Redux)** | Lead 7 người, Navitime + MapScript, route latency -35%, defect -30%. |
| **Gomo PH (Flutter)** | 25+ screens, MobX, DIO, crash-free ~99.5%. |
| **Dialog ORION (Angular/RxJS)** | 3000 beacons/s, 60fps/16ms, RxJS+NgXS pipeline, OpenLayers, Stimulsoft exports. |
| **Ames English (React/RN)** | ~20,000 users, shared Redux/Redux-Saga across web+mobile, 4 skills. |
| **AI ChatPad (open source)** | React/TS streaming chat UI — demo được, giải thích kiến trúc. |

**Bẫy thường gặp:** interviewer hỏi *"con số ~30% này đo bằng gì?"* → phải trả lời được metric, baseline, phương pháp. Nếu là số tham chiếu, hãy chuẩn bị con số thật/hợp lý trước khi phỏng vấn (xem note trong RESUME.md).

---

## 19. Ngân hàng câu hỏi phỏng vấn (mở rộng) 🔴

> Tổng hợp câu hỏi hay gặp, gom theo chủ đề để tự test. Mỗi cụm gồm **rapid-fire** (trả lời nhanh) và **deep-dive** (đào sâu). Tự trả lời to thành lời, bấm giờ ~2 phút/câu deep-dive.

### 19.1 JavaScript
- `var` / `let` / `const` khác nhau thế nào? Hoisting & TDZ?
- Closure là gì? Cho một ví dụ thực tế bạn từng dùng.
- Giải thích event loop: call stack, microtask, macrotask. Dự đoán output đoạn trộn `setTimeout` + `Promise`.
- `this` được xác định thế nào trong 4 trường hợp (default/implicit/explicit/arrow)?
- Prototype chain hoạt động ra sao? `class` khác gì prototype thuần?
- `==` vs `===`, coercion, `NaN`, `null` vs `undefined`.
- Shallow vs deep copy — `structuredClone` vs `JSON.parse(JSON.stringify)` khác gì?
- `Promise.all` vs `allSettled` vs `race` vs `any`.
- Debounce vs throttle — khác nhau, tự implement.
- Curry / partial application là gì?
- `map`/`Map`/`WeakMap` khác nhau? Khi nào WeakMap tránh leak?
- Generator & iterator dùng để làm gì?
- Cách JS xử lý số thực (0.1 + 0.2 !== 0.3)?

### 19.2 TypeScript
- `interface` vs `type` — khác biệt & khi nào chọn cái nào?
- `any` vs `unknown` vs `never` — cho ví dụ mỗi cái.
- Generics constraint (`extends`) — viết `identity<T>`, `pluck<T, K extends keyof T>`.
- Utility types nào bạn dùng nhiều nhất? Tự viết lại `Partial`/`Pick`/`ReturnType`.
- Discriminated union model API state (loading/success/error) thế nào?
- Type guard & narrowing: `typeof`, `in`, `instanceof`, user-defined `is`.
- Conditional types + `infer` — giải thích qua ví dụ.
- Mapped types & template literal types dùng khi nào?
- `as const` làm gì? Khác gì không có nó?
- Cách type một hàm nhận generic React component.
- `strict` mode bật những gì? `noUncheckedIndexedAccess` giúp gì?

### 19.3 React
- Virtual DOM & reconciliation hoạt động ra sao? Vai trò của `key`?
- Khi nào component re-render? Cách chặn re-render thừa.
- `useEffect` vs `useLayoutEffect`? Cleanup chạy khi nào?
- Stale closure trong `useEffect` — ví dụ & cách fix.
- `useMemo`/`useCallback` — khi nào có hại? Đo lợi ích bằng gì?
- `useRef` dùng cho gì ngoài DOM?
- `useReducer` vs `useState` — khi nào chọn reducer?
- Rules of Hooks — vì sao không được gọi hook trong điều kiện?
- Context gây re-render toàn bộ consumer — cách giảm thiểu?
- Controlled vs uncontrolled component.
- Error boundary bắt được lỗi nào, không bắt được lỗi nào (async, event handler)?
- `React.lazy` + `Suspense` hoạt động thế nào?
- Automatic batching ở React 18 là gì?
- `useTransition` / `useDeferredValue` giải quyết vấn đề gì?
- `useSyncExternalStore` dùng khi nào?
- (React 19) `use()`, Actions, `useOptimistic`, Server Components là gì?
- Vì sao StrictMode chạy effect 2 lần ở dev?
- Cách share logic giữa components (custom hook vs HOC vs render prop).

### 19.4 State Management
- Server state vs client state khác nhau thế nào? Vì sao cần tách?
- Khi nào dùng React Query thay Redux?
- Redux-Saga vs Thunk — trade-off? `takeLatest` vs `takeEvery`?
- `staleTime` vs `gcTime` trong React Query?
- Optimistic update + rollback khi lỗi — mô tả flow.
- Cách tổ chức store cho app lớn để tránh re-render lan rộng.
- Zustand/Jotai giải quyết gì mà Redux nặng nề hơn?
- Normalizing state (chuẩn hoá dữ liệu quan hệ) — vì sao & làm thế nào?
- Redux Toolkit giúp gì so với Redux thuần?

### 19.5 Next.js & Frameworks khác
- CSR vs SSR vs SSG vs ISR — use case mỗi loại.
- Server Components giải quyết vấn đề gì so với SSR truyền thống?
- App Router vs Pages Router khác gì?
- Hydration là gì? Hydration mismatch xảy ra khi nào?
- Data fetching & caching trong App Router.
- So sánh reactivity của Vue với model re-render của React.
- Angular change detection (zone.js) hoạt động thế nào?
- React Native render lên native ra sao (bridge/JSI)?
- Flutter widget tree & rebuild khác React thế nào?

### 19.6 Performance
- LCP/INP/CLS là gì, ngưỡng "good", cách đo?
- INP khác FID ra sao? Cách cải thiện INP (long tasks)?
- CLS gây bởi gì và cách fix?
- Code-splitting: route-based vs component-based, đặt ở đâu?
- Tree-shaking hoạt động thế nào? Điều gì phá vỡ nó (side effects)?
- Cách phân tích & giảm bundle size.
- Critical rendering path & render-blocking resources.
- Repaint vs reflow — cái nào đắt hơn, cách tránh layout thrashing.
- Image optimization: format, responsive `srcset`, lazy loading.
- `preload`/`prefetch`/`preconnect`/`dns-prefetch` khác gì?
- List virtualization giải quyết vấn đề gì?
- Web Worker dùng khi nào ở frontend?
- Đo perf ngoài lab (RUM) thế nào?

### 19.7 Architecture & Design Systems
- Thiết kế API cho `<Button>`/`<Select>` tái sử dụng — props hay composition?
- Compound component pattern — ví dụ (`<Tabs><Tab/></Tabs>`).
- Design tokens là gì? 3 tầng (primitive → semantic → component)?
- Storybook đóng vai trò gì trong workflow team?
- Container/presentational vs hooks-based logic — bạn tổ chức thế nào?
- Feature-based vs layer-based folder structure.
- Micro-frontends — khi nào cần, trade-off?
- Monorepo (Nx/Turborepo) giải quyết gì?
- Đảm bảo consistency & a11y across nhiều team thế nào?
- Bạn thiết lập code-review standards ra sao (cân bằng chất lượng vs tốc độ)?
- Versioning & breaking change cho shared component library.

### 19.8 CSS & Accessibility
- Flexbox vs Grid — chọn khi nào?
- Stacking context & z-index không hoạt động — debug thế nào?
- Specificity tính ra sao? Cascade & inheritance.
- CSS custom properties vs Sass variables.
- `:has()`, container queries, logical properties dùng khi nào?
- Tailwind vs CSS-in-JS — trade-off perf/DX/bundle.
- CSS-in-JS runtime vs zero-runtime (vanilla-extract).
- Làm accessible modal đầy đủ: focus trap, ESC, `aria-modal`, restore focus.
- Khi nào KHÔNG cần ARIA (semantic HTML là đủ)?
- Keyboard navigation & focus management cho custom dropdown.
- `aria-live` regions dùng cho gì (vd streaming chat)?
- WCAG AA: color contrast ratio bao nhiêu?
- Animation nào chạy trên compositor (transform/opacity) & vì sao mượt hơn?
- `prefers-reduced-motion` — tại sao nên tôn trọng?

### 19.9 Testing
- Testing pyramid — tỉ lệ unit/integration/E2E hợp lý?
- Vì sao RTL ưu tiên `getByRole` hơn `getByTestId`?
- `userEvent` vs `fireEvent`?
- Mock vs stub vs spy vs fake.
- Test một hook / async component / context như thế nào?
- Snapshot testing — lợi & hại, khi nào lạm dụng?
- Coverage 80% có nghĩa test tốt không? Vì sao không?
- Chiến lược chống flaky test trong Playwright/Cypress.
- Test streaming/real-time UI thế nào?
- TDD red-green-refactor — bạn áp dụng thực tế ra sao?

### 19.10 Real-time / RxJS / Data-heavy
- WebSocket vs SSE vs long-polling — chọn cho location streaming nào?
- `switchMap` vs `mergeMap` vs `concatMap` vs `exhaustMap` — ví dụ mỗi cái.
- `debounceTime` vs `throttleTime` vs `auditTime`.
- Memory leak từ subscription — cách quản lý unsubscribe.
- Xử lý 3,000 events/s không lag: batch, throttle, `requestAnimationFrame`, coalesce.
- Giữ render < 16ms — canvas vs SVG vs DOM khi nào?
- Viewport culling & clustering trên map (OpenLayers) là gì?
- Backpressure là gì, xử lý thế nào?
- Virtualization cho bảng/list 100k dòng.

### 19.11 AI / LLM Integration
- Build streaming-response UI thế nào? SSE vs fetch `ReadableStream`?
- Cancel/abort streaming giữa chừng (`AbortController`) ra sao?
- Render markdown/token tăng dần mà không giật — kỹ thuật gì?
- Token, context window, temperature — ảnh hưởng output thế nào?
- Function/tool calling hoạt động ra sao? Structured output (JSON schema)?
- RAG là gì? Embeddings & vector search giải quyết vấn đề gì?
- Kiến trúc AI-agent framework (skills/workflows) của bạn — orchestration?
- Bảo mật API key: vì sao không để ở client, proxy backend thế nào?
- Xử lý hallucination / lỗi / timeout / rate limit ở UI.
- Optimistic UI + retry cho chat.
- Đo impact (deflection ~30%) bằng metric gì?

### 19.12 Backend / API
- REST vs GraphQL — chọn cho feature cụ thể nào?
- N+1 problem (DB & GraphQL) — phát hiện & fix (DataLoader/join).
- HTTP status codes bạn dùng cho create/validation-error/conflict/auth.
- Idempotency là gì? Method nào idempotent?
- Pagination: offset vs cursor — trade-off.
- JWT vs session — lưu token ở đâu (localStorage vs httpOnly cookie)?
- Refresh token flow.
- NestJS: pipe/guard/interceptor khác nhau chỗ nào?
- Node event loop khác browser thế nào? `worker_threads` khi nào?
- DB index giúp gì, đánh index sai gây hại gì?
- Transaction & isolation level (cơ bản).
- Giảm handoff FE↔BE 40% — contract-first / OpenAPI codegen / mock server?

### 19.13 Web Fundamentals & Security
- XSS trong React (`dangerouslySetInnerHTML`) — phòng thế nào?
- CSRF là gì, SameSite cookie chống ra sao?
- CORS & preflight request hoạt động thế nào?
- CSP giúp gì?
- Cookie vs localStorage vs sessionStorage vs IndexedDB.
- HTTP caching: `Cache-Control`, `ETag`, `max-age` vs `no-cache`.
- HTTP/1.1 vs 2 vs 3 khác gì?
- Event bubbling/capturing & delegation.
- `IntersectionObserver`/`ResizeObserver` dùng cho gì?
- Service Worker & offline caching strategies.

### 19.14 Tooling / Git / Build
- Vite nhanh hơn Webpack ở dev nhờ đâu?
- Webpack loader vs plugin khác gì?
- esbuild/SWC nhanh nhờ đâu (viết bằng Go/Rust)?
- Rebase vs merge — khi nào, rủi ro rebase.
- Resolve conflict & cherry-pick.
- Trunk-based vs GitFlow.
- CI coverage gating cấu hình thế nào?
- Multi-stage Docker build giải quyết gì?
- Static hosting trên S3/CloudFront hoạt động ra sao?

### 19.15 System Design (đề bài hay gặp)
- Design real-time chat (WebSocket, message state, optimistic UI, reconnect) — liên quan **AI ChatPad**.
- Design real-time location dashboard 3,000 beacons/s — liên quan **Dialog ORION**.
- Design autocomplete/typeahead (debounce, cache, keyboard nav, a11y).
- Design infinite-scroll news feed (virtualization, pagination, cache).
- Design a design system / component library.
- Design data table: sort + filter + paginate + column resize + virtualization.
- Design image carousel / lazy gallery.
- Design collaborative editor (CRDT/OT — khái niệm).
- Design file upload (chunk, resume, progress, retry).
- Khung trả lời: requirements → component/data flow → state → API/fetch → performance → scale → trade-offs.

### 19.16 Coding challenges (frontend-flavored)
- Implement `debounce` & `throttle`.
- Implement `Promise.all` / `allSettled` từ đầu.
- Implement LRU cache.
- Implement event emitter (`on/off/emit/once`).
- Deep clone (xử lý circular reference).
- Flatten nested array (không dùng `.flat()`).
- `curry(fn)`.
- Retry with exponential backoff.
- Group array by key / `debounce` một hàm async có cancel.
- Render tree từ flat list (parentId) — dùng ở Colors (family tree).

### 19.17 Behavioral & Leadership (chuẩn bị STAR)
- Kể về một lần dẫn dắt team (7 người NTA UniNext) — bạn set up gì để giảm defect 30%?
- Một xung đột technical trong team — bạn xử lý thế nào?
- Mentor một junior khó tiến bộ — bạn làm gì (Udemy/RTL course)?
- Một quyết định kiến trúc khó & trade-off bạn cân nhắc.
- Một lần bạn sai / dự án thất bại — bài học?
- Deadline gấp + scope creep — cách bạn ưu tiên & giao tiếp.
- Thuyết phục stakeholder theo hướng kỹ thuật họ ban đầu phản đối.
- Nhận code review gắt / feedback tiêu cực — bạn phản ứng thế nào?
- Cân bằng "ship nhanh" vs "chất lượng/tech debt".
- Điều bạn tự hào nhất trong 8 năm qua? Điều muốn làm khác đi?
- "Tell me about yourself" (2 phút, arc: FE 8y → architecture/leadership → AI).
- Vì sao rời chỗ cũ / vì sao muốn vào công ty này?
- Điểm mạnh / điểm yếu (kèm cách cải thiện).

### 19.18 Câu hỏi đào sâu theo resume (interviewer sẽ hỏi con số)
- "~30% ticket deflection đo bằng gì, baseline ra sao?"
- "Cut delivery time ~25% across 5+ projects — đo thế nào, framework AI-agent orchestration ra sao?"
- "LCP 3.4→1.6s: tối ưu resource nào cụ thể, đo bằng lab hay field?"
- "Bundle -45%: tách chunk ở đâu, cái gì chiếm bundle trước đó?"
- "Coverage 40→80% mà không viết test rác — chiến lược nào? -35% regression đo sao?"
- "3,000 beacons/s không lag — mô tả toàn bộ pipeline RxJS→render."
- "Route latency -35% (NTA UniNext) — tối ưu ở Navitime API hay client?"
- "Crash-free 99.5% (Gomo) — bạn theo dõi & giảm crash thế nào?"
- "Handoff FE↔BE -40% — cụ thể quy trình/công cụ nào?"
- Với mỗi dòng resume: *"Cái khó nhất của project này là gì?"* và *"Nếu làm lại bạn đổi gì?"*

### 19.19 Câu hỏi ngược nên hỏi interviewer (chuẩn bị 3–5 câu)
- Team frontend hiện tổ chức & quy mô thế nào? Có design system chưa?
- Thách thức kỹ thuật lớn nhất team đang gặp là gì?
- Quy trình review, testing, release & mức độ tech debt?
- Kỳ vọng cho vai trò này trong 3–6 tháng đầu?
- Định hướng AI/LLM của sản phẩm/công ty ra sao?
- Cơ hội mentoring / lộ trình lên lead/architect?

---

## 20. Checklist ôn tập nhanh

- [ ] JS core: closure, event loop, async, `this`, prototype.
- [ ] TS: generics, utility types, conditional/mapped types, typing React.
- [ ] React: hooks sâu, reconciliation, re-render/perf, Suspense/error boundary, React 18/19.
- [ ] State: Redux(-Saga/Toolkit), React Query (server vs client state).
- [ ] Performance: CWV (LCP/INP/CLS), code-splitting, bundle, giải thích số resume.
- [ ] Architecture: design system, component API, folder/monorepo, code review.
- [ ] CSS: Flexbox/Grid, Tailwind vs CSS-in-JS, **accessibility (modal focus trap)**.
- [ ] Testing: RTL query priority, Jest mocking, Playwright, giải thích số coverage.
- [ ] Real-time: RxJS operators, WebSocket vs SSE, 60fps rendering, giải thích 3000 beacons/s.
- [ ] AI/LLM: streaming UI (SSE/ReadableStream + abort), agent framework, giải thích số.
- [ ] Backend: REST vs GraphQL, N+1, NestJS, JWT/auth, SQL indexing.
- [ ] Security: XSS/CSRF/CORS/CSP.
- [ ] System design: 2 bài (chat real-time, data dashboard) theo framework §15.
- [ ] Coding: debounce/throttle, Promise.all, LRU, event emitter, flatten.
- [ ] Behavioral: 8–10 câu chuyện STAR + "tell me about yourself" + câu hỏi ngược.
- [ ] Mỗi project resume: 1 story + giải thích mọi con số.

---

_Cập nhật lần cuối theo `RESUME.md`. Ưu tiên §2, §3, §4, §6, §7, §8, §10, §11, §17 — đây là những gì resume của bạn hứa hẹn và interviewer sẽ kiểm chứng._
