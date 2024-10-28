<script lang="ts">
  import HangmanBlanksInput from "./HangmanBlanksInput.svelte";
  import HangmanLetterInput from "./HangmanLetterInput.svelte";
  import HangmanSideButton from "./HangmanSideButton.svelte";
  import { hangmanInput as hangman } from "$lib/stores.svelte";

  const handleLetterUpdate = (id: number, value: string) => {
    hangman[id] = value;
  };

  const handleClear = () => {
    hangman.fill("");
  };
</script>

<div class="flex flex-wrap gap-1">
  <HangmanSideButton onclick={handleClear}>C</HangmanSideButton>
  <HangmanBlanksInput />
  {#each hangman as value, id}
    <HangmanLetterInput {id} {value} oninput={handleLetterUpdate} />
  {/each}
</div>
