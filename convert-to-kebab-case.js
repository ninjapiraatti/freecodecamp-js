/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
	let words = str
		.replace(/([A-Z])/g, ' $1') // Add space before each capital letter
		.trim()
		.toLowerCase()
		.split(/(?:,| |_)+/)
		.join("-")
	return words
}

console.log(spinalCase('This Is   Spi_nalFinal Tap'))

/*

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

*/