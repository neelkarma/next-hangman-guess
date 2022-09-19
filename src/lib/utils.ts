export const fetchWordList = () => {
  return fetch(
    "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt"
  )
    .then((res) => res.text())
    .then((text) => text.split(/\r?\n/).map((word) => word.toUpperCase()));
};
export const zip = <T>(rows: T[][]) =>
  rows[0].map((_, c) => rows.map((row) => row[c]));

export const setUnion = <T>(a: Set<T>, b: Set<T>) => new Set([...a, ...b]);

export const setDiff = <T>(a: Set<T>, b: Set<T>) =>
  new Set([...a].filter((x) => !b.has(x)));
