<script lang="ts">
  import type { KeyboardEventHandler } from "svelte/elements";

  interface Props {
    onsubmit: (char: string) => void;
  }

  let { onsubmit }: Props = $props();

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]$/.test(e.key)) return;
    onsubmit(e.key.toUpperCase());
  };
</script>

<input
  class="w-[9ch] rounded-full border-2 border-gray-300 px-3 py-1 focus:outline-gray-400"
  type="text"
  placeholder="Add..."
  onkeydown={handleKeyDown}
/>
