/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(length: number): number[] {
  if (length <= 0) {
    return [];
  }
  if (length === 1) {
    return [0];
  }

  const result: number[] = [0, 1];

  for (let i = 2; i < length; i++) {
    const nextNumber = result[i - 1] + result[i - 2];
    result.push(nextNumber);
  }

  return result;
}

export default getFibonacciSequence;