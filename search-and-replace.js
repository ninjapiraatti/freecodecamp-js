/*
Perform a search and replace on the sentence using the arguments provided
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you
are replacing it. For example if you mean to replace the word Book with
the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
	let index = (str.toLowerCase().indexOf(before.toLowerCase()))
	let originalUpperCase = str[index] === str[index].toUpperCase()
	let replaceUpperCase = after[0] === after[0].toUpperCase()
	let afterMutable = after
	if (originalUpperCase && !replaceUpperCase) {
		afterMutable = afterMutable.charAt(0).toUpperCase() + afterMutable.slice(1)
	} else if (!originalUpperCase && replaceUpperCase) {
		afterMutable = afterMutable.toLowerCase()
	}
	return str.substring(0, index) + afterMutable + str.substring(index + before.length)
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leasffsdped"))
console.log(myReplace("Let us go to the storesdfsdfsd", "storesdfsdfsd", "mall"))

/*

function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

*/