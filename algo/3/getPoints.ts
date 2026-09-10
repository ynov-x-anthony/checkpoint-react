function getPoints(arr: string[]): number {
  return arr.reduce((total, score) => {
    const [teamA, teamB] = score.split(":").map(Number);

    if (teamA > teamB) return total + 3; // victoire
    if (teamA === teamB) return total + 1; // nul
    return total; // défaite
  }, 0);
}

export default getPoints;
