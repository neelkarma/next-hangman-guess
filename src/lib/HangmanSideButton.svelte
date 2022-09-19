<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ click: {} }>();
</script>

<button
  class="px-3 py-1 text-xl font-bold bg-gray-200 hover:bg-gray-400 rounded-full"
  on:click={() => dispatch("click")}
>
  <slot />
</button>
