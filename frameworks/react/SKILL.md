# React Framework Skill

**Version:** 1.0.0
**Compatible:** project_skills >= 1.0
**Requires:** stacks/typescript or stacks/javascript
**Outputs:** (none — guidance only)

---

## Purpose

Guidance for working with React projects (SPA or library usage). Activated when React is detected without Next.js.

---

## Architecture understanding

- Is this a SPA (single-page application) with client-side routing?
- Is it embedded in a larger application (micro-frontend, widget)?
- Is it using a state management library? Which one? (Redux, Zustand, Jotai, Context, MobX, or none)
- Is it using a routing library? Which one?
- Is it server-rendered at all, or purely client-side?

---

## Conventions

### Component design

- Components should be focused. A component that does too much is a sign that it should be split.
- Custom hooks extract behavior. If a component has logic that could be reused, consider a hook.
- Props should be as specific as practical. Avoid passing large objects when specific values would do.

### State management

- Start simple. Local state, then context, then a state library if there is a real need.
- Not everything needs to be in a global store. State that is only used in one component tree should stay there.

### Data flow

- Data flows down. Events flow up. This is the React model. Respect it.
- Avoid mutating props.
- If data is shared across distant components, understand why before choosing a solution.

### Effects

- `useEffect` is for side effects, not for derived state. If you can compute a value during render, do that instead.
- Effect dependencies should be correct. Missing dependencies cause bugs. Unnecessary dependencies cause re-renders.

---

## Anti-patterns

- Putting business logic in UI components.
- Using effect for everything.
- Prop drilling without considering context or component restructuring.
- Global state for everything.
- Uncontrolled components where controlled would be clearer (or vice versa, depending on the actual need).
