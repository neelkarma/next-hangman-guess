<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import HangmanSideButton from "./HangmanSideButton.svelte";

  export let value = 5;

  const dispatch = createEventDispatcher<{
    change: { value: number };
  }>();

  const handleIncrement = () => {
    if (value >= 10) return; // TODO: Make max limit max word length in word bank
    value += 1;
    dispatch("change", { value });
  };

  const handleDecrement = () => {
    if (value <= 1) return;
    value -= 1;
    dispatch("change", { value });
  };
</script>

<div class="flex gap-1">
  <HangmanSideButton on:click={handleIncrement}>+</HangmanSideButton>
  <HangmanSideButton on:click={handleDecrement}>-</HangmanSideButton>
</div>
