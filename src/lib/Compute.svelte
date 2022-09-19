<script lang="ts">
  import { get } from "svelte/store";
  import ComputeButton from "./ComputeButton.svelte";
  import { guess } from "./guesser";
  import { guessResult, hangmanInput, incorrectGuesses } from "./stores";
  import { fetchWordList } from "./utils";

  const wordListPromise = fetchWordList();

  const handleClick = (wordList: string[]) => {
    try {
      const char = guess(get(hangmanInput), get(incorrectGuesses), wordList);
      guessResult.set({
        display: true,
        isError: false,
        message: `The best guess is ${char}.`,
      });
    } catch (e) {
      let message = "Unknown error.";
      if (e instanceof Error) message = e.message;
      guessResult.set({
        display: true,
        isError: true,
        message,
      });
    }
  };
</script>

{#await wordListPromise}
  <ComputeButton disabled />
{:then wordList}
  <ComputeButton on:click={() => handleClick(wordList)} />
{/await}
