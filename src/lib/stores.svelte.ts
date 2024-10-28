import { DEFAULT_HANGMAN_INPUT, DEFAULT_INCORRECT_GUESSES } from "./defaults";
import { SvelteSet } from "svelte/reactivity";

export const hangmanInput = $state(DEFAULT_HANGMAN_INPUT);
export const incorrectGuesses = new SvelteSet<string>(
  DEFAULT_INCORRECT_GUESSES,
);
export const guessResult: {
  display: boolean;
  isError: boolean;
  message?: string;
} = $state({
  display: false,
  isError: false,
  message: undefined,
});
