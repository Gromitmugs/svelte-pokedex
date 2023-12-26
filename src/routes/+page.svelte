<script lang="ts">
  import type { PageData } from "./$types"; // associates with +page.ts
  import { generations } from "./generations";
  import type { IndexMonster } from "./+page";

  // svelteKit special syntax for retrieving data from load fn
  export let data: PageData;
  // PageData tells the type object by looking at the result from load fn

  // $: alert("count is" + count);
  // this $ statement will trigger every time whenever the variable is updated

  let monsterId: string;
  $: monster = data.monsters.find((monster) => monster.id === monsterId);

  const monsterClick = (monster: IndexMonster) => {
    monsterId = monster.id;
  };
</script>

<h1>{monsterId}</h1>
<h2>{monster?.name}</h2>

<div class="generations">
  {#each generations as generation (generation.id)}
    <div class="generation">{generation.main_region}</div>
  {/each}
</div>

<div class="monsters">
  {#each data.monsters as monster (monster.id)}
    <div class="monster" on:click={() => monsterClick(monster)}>
      <div class="monster-content">
        <img src={monster.image} alt={monster.name} />
        {monster.name}
      </div>
      <div class="monster-id">
        {monster.id}
      </div>
    </div>
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
