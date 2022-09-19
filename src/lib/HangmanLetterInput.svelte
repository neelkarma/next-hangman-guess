<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<{
    input: {
      id: number;
      value: string;
    };
  }>();

  export let id: number;
  export let value = "";

  const handleKeyDown = (e) => {
    const oldValue = value;

    if (e.key === "Backspace") {
      value = "";
      e.target.previousElementSibling?.focus();
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      value = e.key.toUpperCase();
      e.target.nextElementSibling?.focus();
    }

    if (oldValue !== value) dispatch("input", { value, id });
  };
</script>

<input
  class="p-1 rounded-lg text-xl text-center focus:outline-gray-300 w-[2ch]"
  type="text"
  placeholder="_"
  on:keydown|preventDefault={handleKeyDown}
  {value}
/>
