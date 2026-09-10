function sumArrays(arr1: string[], arr2: string[]): string[] {
  const maxLength = Math.max(arr1.length, arr2.length);
  const result: string[] = [];

  for (let i = 0; i < maxLength; i++) {
    const a = Number(arr1[i] ?? 0);
    const b = Number(arr2[i] ?? 0);
    result.push(String(a + b));
  }

  return result;
}

export default sumArrays;
