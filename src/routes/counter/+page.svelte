<script lang="ts">
  import { count } from "$lib/stores";
</script>

<p>
  Count is: {$count}.
</p>

<!-- $count refers to access the value of the store count -->
<button on:click={() => count.set($count + 1)}>++</button>
<button on:click={() => count.update((c) => c + 1)}>+-</button>
<button on:click={() => ($count = $count + 1)}>+</button>
