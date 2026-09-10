function countLetters(givenString: string, letter: string): number {
  let count = 0;

  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] === letter) {
      count++;
    }
  }

  return count;
}

export default countLetters;
