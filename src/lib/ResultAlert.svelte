<script lang="ts">
  import { guessResult } from "./stores";
  console.log($guessResult);
</script>

{#if $guessResult.display}
  <div
    class="p-4 rounded-md"
    class:bg-red-300={$guessResult.isError}
    class:bg-green-300={!$guessResult.isError}
  >
    <span class="font-bold">
      {#if $guessResult.isError}
        Error:
      {:else}
        Success:
      {/if}
    </span>{$guessResult.message}
  </div>
{/if}
