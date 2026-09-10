function getFibonacciSequence(length: number): number[] {
  if (length <= 0) return [];
  
  if (length === 1) return [0];

  const sequence: number[] = [0, 1];

  for (let i = 2; i < length; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

export default getFibonacciSequence;