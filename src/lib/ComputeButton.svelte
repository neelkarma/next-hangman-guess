<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let disabled = false;
  const dispatch = createEventDispatcher<{ click: {} }>();
</script>

<button
  class="px-3 py-1 font-bold rounded-full text-white disabled:bg-blue-400 bg-blue-500 hover:bg-blue-700"
  {disabled}
  on:click={() => dispatch("click")}
>
  {#if disabled}
    Getting Word List...
  {:else}
    Compute
  {/if}
</button>
