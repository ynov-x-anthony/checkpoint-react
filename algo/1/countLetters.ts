export function countLetters(str: string): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }
  return counts;
}