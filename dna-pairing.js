/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are
represented by the characters AT and CG, which form building blocks
of the DNA double helix.

The DNA strand is missing the pairing element. Write a function
to match the missing base pairs for the provided DNA strand.
For each character in the provided string, find the base pair
character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the
arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
  const pairs = {
    G: "C",
    C: "G",
    A: "T",
    T: "A"
  }
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push([str[i], pairs[str[i]]])
  }
  return result
}

console.log(pairElement("GCGATGC"))

/*
function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("")
    .map(x => [x, pairs[x]]);
}

*/