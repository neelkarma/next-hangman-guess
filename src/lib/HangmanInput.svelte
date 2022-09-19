<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { DEFAULT_HANGMAN_BLANKS } from "./defaults";
  import HangmanBlanksInput from "./HangmanBlanksInput.svelte";
  import HangmanLetterInput from "./HangmanLetterInput.svelte";
  import HangmanSideButton from "./HangmanSideButton.svelte";
  import { hangmanInput as hangman } from "./stores";

  const dispatch = createEventDispatcher<{
    input: { value: string[] };
  }>();

  let blanks = DEFAULT_HANGMAN_BLANKS;

  const handleLetterUpdate = (e) => {
    $hangman[e.detail.id] = e.detail.value;
    dispatch("input", { value: $hangman });
  };

  const handleBlanksChange = (e) => {
    let newBlanks = e.detail.value;

    if (newBlanks > blanks) {
      $hangman = $hangman.concat(new Array(newBlanks - blanks).fill(""));
    } else {
      $hangman = $hangman.slice(0, newBlanks);
    }

    blanks = newBlanks;
  };

  const handleClear = (e) => {
    $hangman = $hangman.fill("");
  };
</script>

<div class="flex flex-wrap gap-1">
  <HangmanSideButton on:click={handleClear}>C</HangmanSideButton>
  <HangmanBlanksInput on:change={handleBlanksChange} />
  {#each $hangman as _, id}
    <HangmanLetterInput
      {id}
      value={$hangman[id]}
      on:input={handleLetterUpdate}
    />
  {/each}
</div>
