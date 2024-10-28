<script lang="ts">
  import IncorrectGuess from "./IncorrectGuess.svelte";
  import IncorrectGuessesClearButton from "./IncorrectGuessesClearButton.svelte";
  import IncorrectGuessInput from "./IncorrectGuessInput.svelte";
  import { incorrectGuesses } from "$lib/stores.svelte";

  let sorted = $derived([...incorrectGuesses].sort());

  const handleDelete = (char: string) => {
    if (!incorrectGuesses.has(char)) return;
    incorrectGuesses.delete(char);
  };

  const handleAdd = (char: string) => {
    if (incorrectGuesses.has(char)) return;
    incorrectGuesses.add(char);
  };

  const handleClear = () => {
    incorrectGuesses.clear();
  };
</script>

<div class="flex flex-wrap gap-1">
  {#each sorted as char}
    <IncorrectGuess {char} onclick={handleDelete} />
  {/each}
  <IncorrectGuessInput onsubmit={handleAdd} />
  <IncorrectGuessesClearButton onclick={handleClear}
    >Clear
  </IncorrectGuessesClearButton>
</div>
