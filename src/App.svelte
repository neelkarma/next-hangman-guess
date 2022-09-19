<script lang="ts">
  import Compute from "./lib/Compute.svelte";
  import Footer from "./lib/Footer.svelte";
  import HangmanInput from "./lib/HangmanInput.svelte";
  import IncorrectGuesses from "./lib/IncorrectGuesses.svelte";
  import ResultAlert from "./lib/ResultAlert.svelte";
</script>

<div class="p-3 md:mt-10 md:mx-auto md:max-w-[70%] flex flex-col gap-3">
  <h1 class="text-xl md:text-3xl font-bold">Next Hangman Guess</h1>
  <HangmanInput />
  <div class="p-2 flex flex-col gap-1 rounded-lg border-gray-300 border-[1px]">
    <h3 class="text-md">Incorrect Guesses</h3>
    <IncorrectGuesses />
  </div>
  <Compute />
  <ResultAlert />
  <Footer />
</div>
