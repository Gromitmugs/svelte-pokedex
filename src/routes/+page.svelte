<script lang="ts">
  import type { PageData } from "./$types"; // associates with +page.ts
  import { generations } from "./generations";
  import type { IndexMonster } from "./+page";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import Monster from "./Monster.svelte";

  import { count, doubleCount } from "$lib/stores";

  // svelteKit special syntax for retrieving data from load fn
  export let data: PageData;
  // PageData tells the type object by looking at the result from load fn

  // $: alert("count is" + count);
  // this $ statement will trigger every time whenever the variable is updated

  $: monsterId = $page.url.searchParams.get("monsterId") || "";
  $: monster = data.monsters.find((monster) => monster.id === monsterId);

  $: monsterId2 = $page.url.searchParams.get("monsterId2") || "";
  $: monster2 = data.monsters.find((monster) => monster.id === monsterId2);

  $: selectedGenerationId = $page.url.searchParams.get("generation_id") || "";

  const updateSearchParams = (key: string, value: string) => {
    const searchParams = new URLSearchParams($page.url.searchParams);
    searchParams.set(key, value);
    goto(`?${searchParams.toString()}`);
  };

  // search fn
  let form = {
    searchString: "",
  };
  let searchString = "";
  $: selectedMonsters = data.monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchString.toLowerCase());
  });

  const submitSearch = (e: Event) => {
    searchString = form.searchString;
  };
</script>

// when using store values, don't forget to use $ sign to access the stores
value.
<h2>{$count}, {$doubleCount}</h2>

{#if monster}
  <Monster {monster} {updateSearchParams} />
{/if}
{#if monster2}
  <Monster monster={monster2} {updateSearchParams} />
{/if}

<div class="generations">
  <button
    class="generation"
    class:active={selectedGenerationId == "all"}
    on:click={() => updateSearchParams("generation_id", "all")}
  >
    All
  </button>
  {#each generations as generation (generation.id)}
    <button
      class="generation"
      class:active={selectedGenerationId === generation.id.toString()}
      on:click={() =>
        updateSearchParams("generation_id", generation.id.toString())}
    >
      {generation.main_region}
    </button>
  {/each}
</div>

<form class="search-form" on:submit|preventDefault={submitSearch}>
  <input
    class="search-field"
    type="text"
    bind:value={form.searchString}
    placeholder="Pokemon Name"
  />
  <input type="submit" value="Search" />
</form>

<div class="monsters">
  {#each selectedMonsters as monster (monster.id)}
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
    cursor: pointer;
  }

  .generation.active {
    background-color: #333;
    color: #fff;
  }

  .generation:hover {
    background-color: #eee;
  }

  .generation.active:hover {
    background-color: #444;
  }

  .search-form {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .search-form input[type="text"] {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    width: 200px;
  }

  .search-form input[type="submit"] {
    padding: 5px 10px;
    border: 1px solid #333;
    border-radius: 5px;
    margin-left: 10px;
    background-color: #333;
    color: #fff;
  }
</style>
