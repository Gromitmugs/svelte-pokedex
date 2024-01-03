import { writable, derived, type Writable } from "svelte/store";
import type { IndexMonster } from "../routes/+page";
export const count = writable(0);

//  $: doubleCount = $count * 2; equivalence
export const doubleCount = derived(count, (c) => c * 2);

// multiple derived stores
// export const doubleCount = derived(count, otherProperty, ([c, o]) => c * 2);

export const caughtMonsters: Writable<IndexMonster[]> = writable([]);