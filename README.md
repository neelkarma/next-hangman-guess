# Next Hangman Guess

> Web app that allows you to cheat at hangman.

## Explanation

This app uses the same method outlined in
[jan Misali's video analysis of Hangman](https://youtu.be/le5uGqHKll8?t=153).
It's copied below for convenience sake (words in square brackets were modified
for better context):

1. Consider all words that [the answer] could be, given the information you
   already have (how long [the answer] is, where specific letters are, and
   specific letters that are not in the word).
2. For each letter you have not guessed yet, assume that the word does not
   contain that letter, and determine how many of the possible words would still
   be on the table if that were the case.
3. Select whichever letter minimizes this number.

### Limitations

There are some limitations to this method.

- It doesn't take into account the popularity of words. Therefore, any ties from step 3 of the above algorithm will be broken by alphabetic order, resulting in some... weird choices.
- It doesn't work with words that aren't in the word bank.

## Acknowledgements

- [dwyl/english-words](https://github.com/dwyl/english-words) - Word Bank
- [jan Misali - "hangman is a weird game"](https://youtu.be/le5uGqHKll8) -
  Algorithm
- [Next Chess Move](https://nextchessmove.com) - Inspiration
