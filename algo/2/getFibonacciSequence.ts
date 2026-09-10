/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  //Gerer les cas particuliers
  if (size <= 0) return [];
  if (size === 1) return [0];
  //Indexer le tableau pour commencer 
  const sequence: number[]= [0, 1];
  //La suite de Fibonacci est le nombre actuelle et la somme des 2 precedents (F(x)=F(x-1)+F(x-2)) pour realiser ca on vas faire une boucle avec iterations ou i=2
  for (let i = 2; i < size; i++){
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

export default getFibonacciSequence;
