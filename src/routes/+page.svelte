<script lang="ts">
  import type { PageData } from "./$types"; // associates with +page.ts

  // svelteKit special syntax for retrieving data from load fn
  export let data: PageData;
  // PageData tells the type object by looking at the result from load fn
</script>

{#each data.monsters as monster (monster.id)}
  <p>{monster.id}: {monster.name}</p>
{/each}
