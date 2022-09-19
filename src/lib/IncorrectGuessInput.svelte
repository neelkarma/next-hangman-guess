<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{ submit: { char: string } }>();

  const handleKeyDown = (e) => {
    if (!/^[a-zA-Z]$/.test(e.key)) return;
    dispatch("submit", { char: e.key.toUpperCase() });
  };
</script>

<input
  class="px-3 py-1 w-[9ch] border-gray-300 focus:outline-gray-400 border-2 rounded-full"
  type="text"
  placeholder="Add..."
  on:keydown|preventDefault={handleKeyDown}
/>
