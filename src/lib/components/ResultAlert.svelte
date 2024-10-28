<script lang="ts">
  import { guessResult } from "$lib/stores.svelte";
</script>

{#if guessResult.display}
  <div
    class="rounded-md p-4"
    class:bg-red-300={guessResult.isError}
    class:bg-green-300={!guessResult.isError}
  >
    <span class="font-bold">
      {#if guessResult.isError}
        Error:
      {:else}
        Success:
      {/if}
    </span>
    {guessResult.message}
  </div>
{/if}
