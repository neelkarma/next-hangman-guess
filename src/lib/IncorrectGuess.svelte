<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let char: string;

  const dispatch = createEventDispatcher<{ click: { char: string } }>();

  const handleClick = (_) => {
    dispatch("click", { char });
  };
</script>

<button
  class="px-3 py-1 bg-gray-200 hover:bg-red-300 text-xl rounded-full"
  on:click={handleClick}>{char}</button
>
