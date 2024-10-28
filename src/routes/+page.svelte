<script lang="ts">
  import Compute from "$lib/components/Compute.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import HangmanInput from "$lib/components/HangmanInput.svelte";
  import IncorrectGuesses from "$lib/components/IncorrectGuesses.svelte";
  import ResultAlert from "$lib/components/ResultAlert.svelte";
</script>

<div
  class="flex flex-col gap-3 p-3 md:mx-auto md:mt-10 md:max-w-[70%] md:gap-4 lg:max-w-[50%]"
>
  <h1 class="text-xl font-bold md:text-3xl">Next Hangman Guess</h1>
  <HangmanInput />
  <div class="flex flex-col gap-1 rounded-lg border-[1px] border-gray-300 p-2">
    <h3 class="text-md">Incorrect Guesses</h3>
    <IncorrectGuesses />
  </div>
  <Compute />
  <ResultAlert />
  <Footer />
</div>
