function getFibonacciSequence(size: number): number[] {
  // Cas où la taille demandée est 0 ou négative
  if (size <= 0) {
    return [];
  }

  // Cas où on ne demande que le premier terme
  if (size === 1) {
    return [0];
  }

  // Initialisation avec les 2 premiers termes
  const sequence: number[] = [0, 1];

  // Calcul des termes suivants jusqu'à atteindre la taille voulue
  for (let i = 2; i < size; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence;
}

export default getFibonacciSequence;