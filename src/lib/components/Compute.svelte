<script lang="ts">
  import ComputeButton from "./ComputeButton.svelte";
  import { guess } from "$lib/guesser";
  import { guessResult, hangmanInput, incorrectGuesses } from "$lib/stores.svelte";

  async function fetchWordList() {
    const res = await fetch(
      "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt",
    );
    const text = await res.text();
    const words = text.split(/\r?\n/).map((word) => word.toUpperCase());
    return words;
  }

  let wordListPromise = $state<Promise<string[]>>();

  $effect(() => {
    wordListPromise = fetchWordList();
  });

  const handleClick = (wordList: string[]) => {
    try {
      const char = guess(
        $state.snapshot(hangmanInput),
        $state.snapshot(incorrectGuesses),
        wordList,
      );
      guessResult.display = true;
      guessResult.isError = false;
      guessResult.message = `The best guess is ${char}.`;
    } catch (e) {
      let message = "Unknown error.";
      if (e instanceof Error) message = e.message;
      guessResult.display = true;
      guessResult.isError = true;
      guessResult.message = message;
    }
  };
</script>

{#if wordListPromise}
  {#await wordListPromise}
    <ComputeButton disabled />
  {:then wordList}
    <ComputeButton onclick={() => handleClick(wordList)} />
  {/await}
{:else}
  <ComputeButton disabled />
{/if}
