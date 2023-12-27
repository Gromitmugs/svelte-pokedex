<script lang="ts">
  import type { IndexMonster } from "./+page";

  export let monster: IndexMonster;

  export let updateSearchParams: (key: string, value: string) => void;
</script>

<div class="monster">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => updateSearchParams("monsterId", monster.id)}>
    <div class="monster-content">
      <img src={monster.image} alt={monster.name} />
      {monster.name}
    </div>
    <div class="monster-id">
      {monster.id}
    </div>
  </div>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div on:click={() => updateSearchParams("monsterId2", monster.id)}>
    Add Monster 2
  </div>
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
