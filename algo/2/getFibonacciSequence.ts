function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return [];
  }

  if (size === 1) {
    return [0];
  }

  const sequence: number[] = [0, 1];

  for (let i = 2; i < size; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
}

export default getFibonacciSequence;