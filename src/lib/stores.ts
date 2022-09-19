import { writable } from "svelte/store";
import { DEFAULT_HANGMAN_INPUT, DEFAULT_INCORRECT_GUESSES } from "./defaults";

export const hangmanInput = writable<string[]>(DEFAULT_HANGMAN_INPUT);
export const incorrectGuesses = writable<Set<string>>(
  DEFAULT_INCORRECT_GUESSES
);
export const guessResult = writable<{
  display: boolean;
  isError: boolean;
  message?: string;
}>({
  display: false,
  isError: false,
  message: null,
});
