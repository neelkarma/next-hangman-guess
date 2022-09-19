<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import IncorrectGuess from "./IncorrectGuess.svelte";
  import IncorrectGuessesClearButton from "./IncorrectGuessesClearButton.svelte";
  import IncorrectGuessInput from "./IncorrectGuessInput.svelte";
  import { incorrectGuesses } from "./stores";

  const dispatch = createEventDispatcher<{ change: { value: Set<string> } }>();

  $: sorted = [...$incorrectGuesses].sort();

  const handleDelete = (e) => {
    if (!$incorrectGuesses.has(e.detail.char)) return;
    $incorrectGuesses.delete(e.detail.char);
    $incorrectGuesses = $incorrectGuesses;
    dispatch("change", { value: $incorrectGuesses });
  };

  const handleAdd = (e) => {
    if ($incorrectGuesses.has(e.detail.char)) return;
    $incorrectGuesses.add(e.detail.char);
    $incorrectGuesses = $incorrectGuesses;
    dispatch("change", { value: $incorrectGuesses });
  };

  const handleClear = (e) => {
    $incorrectGuesses.clear();
    $incorrectGuesses = $incorrectGuesses;
  };
</script>

<div class="flex flex-wrap gap-1">
  {#each sorted as char}
    <IncorrectGuess {char} on:click={handleDelete} />
  {/each}
  <IncorrectGuessInput on:submit={handleAdd} />
  <IncorrectGuessesClearButton on:click={handleClear}
    >Clear
  </IncorrectGuessesClearButton>
</div>
