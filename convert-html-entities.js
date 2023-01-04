/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
	return str.replace(/[&<>"']/g, function (m) {
		return {
				'"': '&quot;',
				"'": '&apos;',
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
		}[m]
	})
}

console.log(convertHTML("Dolce & Gabbana"))

/*
From docs:

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? "-" : "") + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

More readable one with replace returning value from function
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}
*/