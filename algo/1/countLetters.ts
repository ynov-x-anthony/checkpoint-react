/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
	// Ton code ici !
	let count = 0;
	for (let index = 0; index < givenString.length; index++) {
		if (letter === givenString[index]) {
			count++;
		}
	}
	return count;
}

export default countLetters;
