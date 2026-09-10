export function getFibonacciSequence(n: number): number[] {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const sequence: number[] = [0, 1];
  while (sequence.length < n) {
    const nextVal = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextVal);
  }
  return sequence;
}