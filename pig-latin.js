/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/

function translatePigLatin(str) {
	const vowels = ["a", "i", "e", "o", "u", "y"]
	if (vowels.includes(str[0].toLowerCase())) {
		return str.concat("way")
	} else {
		let words = str.replace(/([AIEOUaieou])/, ' $1').split(" ")
		return words.reverse().join("").concat("ay")
	}
}

console.log(translatePigLatin('rhythm'))
console.log(translatePigLatin('awesome'))

/*

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

*/