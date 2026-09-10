function countLetters(givenString: string, letter: string): number {
  let count = 0;

  for (const char of givenString) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}

export default countLetters;