const ALPHABET = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export class InvalidLengthError extends Error {
  constructor() {
    super(
      "Hangman Input Length exceeds that of the longest word in the word list",
    );
    this.name = "InvalidLengthError";
  }
}

export class AlreadySolvedError extends Error {
  constructor() {
    super("The Hangman is already solved!");
    this.name = "AlreadySolvedError";
  }
}

export class NoPossibleSolutionError extends Error {
  constructor() {
    super(
      "No words are possible for this Hangman. Is the answer a valid English word?",
    );
    this.name = "NoPossibleSolutionError";
  }
}

export const guess = (
  hangmanInput: string[],
  incorrectGuesses: Set<string>,
  wordList: string[],
): string | null => {
  // Validate inputs
  if (!hangmanInput.includes("")) throw new AlreadySolvedError();

  const maxLenWord = wordList.reduce((highest, current) =>
    current.length > highest.length ? current : highest,
  );
  if (hangmanInput.length > maxLenWord.length) throw new InvalidLengthError();

  // Only consider possible words given the inputs
  const possibleWords = wordList.filter((word) => {
    if (word.length !== hangmanInput.length) return false;

    for (let i = 0; i < hangmanInput.length; i++) {
      const wordChar = word[i];
      const hangmanChar = hangmanInput[i];

      if (hangmanChar === "") continue;
      if (wordChar !== hangmanChar || incorrectGuesses.has(wordChar))
        return false;
    }

    return true;
  });

  if (!possibleWords.length) throw new NoPossibleSolutionError();

  // Compute all unguessed characters
  const unguessedChars = ALPHABET.difference(
    incorrectGuesses.union(new Set(hangmanInput.filter((c) => c !== ""))),
  );

  // The algorithm
  let bestLength = Infinity;
  let bestChar = null;

  for (const char of unguessedChars) {
    // Assume that the word doesn't contain `char`, and see how many possible words it eliminates
    const potential = possibleWords.filter(
      (word) => !word.includes(char),
    ).length;

    // Guess the character that eliminates the most possible words
    if (potential < bestLength) {
      bestLength = potential;
      bestChar = char;
    }
  }

  return bestChar;
};
