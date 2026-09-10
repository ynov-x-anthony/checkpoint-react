
function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return [];
  }
  if (size === 1) {
    return [0];
  }

const tab = [0, 1];

for (let i=2; i < size; i++) {
    tab.push(tab[i-1] + tab[i-2]);
  }
return tab;
}
export default getFibonacciSequence;
