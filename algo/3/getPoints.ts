function getPoints(results: string[]): number {
let totalPoints = 0;

for (const match of results) {
  const [ourScoreStr, opponentScoreStr] = match.split(":");
  const ourScore = Number(ourScoreStr)
  const opponentScore = Number(opponentScoreStr);

if (ourScore > opponentScore) {
  totalPoints += 3;
} else if (ourScore === opponentScore) {
   totalPoints += 1;
}
}
return totalPoints;
}

export default getPoints;