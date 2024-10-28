<script lang="ts">
  import HangmanSideButton from "./HangmanSideButton.svelte";
  import { hangmanInput } from "$lib/stores.svelte";

  const handleIncrement = () => {
    hangmanInput.length += 1;
  };

  const handleDecrement = () => {
    if (hangmanInput.length <= 1) return;
    hangmanInput.length -= 1;
  };
</script>

<div class="flex gap-1">
  <HangmanSideButton onclick={handleIncrement}>+</HangmanSideButton>
  <HangmanSideButton onclick={handleDecrement}>-</HangmanSideButton>
</div>
