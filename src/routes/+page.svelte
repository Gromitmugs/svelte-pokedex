<script lang="ts">
  import type { PageData } from "./$types"; // associates with +page.ts
  import { generations } from "./generations";
  import type { IndexMonster } from "./+page";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Monster from "./Monster.svelte";

  // svelteKit special syntax for retrieving data from load fn
  export let data: PageData;
  // PageData tells the type object by looking at the result from load fn

  // $: alert("count is" + count);
  // this $ statement will trigger every time whenever the variable is updated

  $: monsterId = $page.url.searchParams.get("monsterId") || "";
  $: monster = data.monsters.find((monster) => monster.id === monsterId);

  $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
  $: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

  const updateSearchParams = (key: string, value: string) => {
    const searchParams = new URLSearchParams($page.url.searchParams);
    searchParams.set(key, value);
    goto(`?${searchParams.toString()}`);
  };
</script>

{#if monster}
  <Monster {monster} {updateSearchParams} />
{/if}
{#if monster2}
  <Monster monster={monster2} {updateSearchParams} />
{/if}

<div class="generations">
  {#each generations as generation (generation.id)}
    <div class="generation">{generation.main_region}</div>
  {/each}
</div>

<div class="monsters">
  {#each data.monsters as monster (monster.id)}
    <Monster {monster} {updateSearchParams} />
  {/each}
</div>

<style>
  .monsters {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .monster {
    width: 100px;
    margin: 10px;
    padding: 10px;
    position: relative;
    background-color: #eee;
  }

  .monster:hover {
    background-color: #ddd;
  }

  .monster-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .monster-id {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 0.8em;
    color: #aaa;
  }

  .generations {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .generation {
    margin: 5px;
    border: 1px solid;
    padding: 5px 10px;
    border: 1px solid black;
    background-color: #f9f9f9;
    color: #333;
  }

  .generation:hover {
    background-color: #eee;
  }
</style>
