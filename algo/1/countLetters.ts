function countLetters(str: string, letter: string): number {
  let count = 0;

  for (const char of str) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}

export default countLetters;