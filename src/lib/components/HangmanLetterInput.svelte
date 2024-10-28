<script lang="ts">
  import type { KeyboardEventHandler } from "svelte/elements";

  interface Props {
    id: number;
    value: string;
    oninput: (id: number, value: string) => void;
  }

  let { id, value, oninput }: Props = $props();

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    const oldValue = value;

    let nextFocus;

    if (e.key === "Backspace") {
      value = "";
      nextFocus = e.currentTarget.previousElementSibling;
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      value = e.key.toUpperCase();
      nextFocus = e.currentTarget.nextElementSibling;
    }

    if (nextFocus) (nextFocus as HTMLElement).focus();

    if (oldValue !== value) oninput(id, value);
  };
</script>

<input
  class="w-[2ch] rounded-lg p-1 text-center text-xl focus:outline-gray-300"
  type="text"
  placeholder="_"
  onkeydown={handleKeyDown}
  {value}
/>
