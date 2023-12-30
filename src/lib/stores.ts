import { writable, derived } from "svelte/store";
export const count = writable(0);

//  $: doubleCount = $count * 2; equivalence
export const doubleCount = derived(count, (c) => c * 2);

// multiple derived stores
// export const doubleCount = derived(count, otherProperty, ([c, o]) => c * 2);