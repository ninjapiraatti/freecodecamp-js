/*
Write a function that takes two or more arrays and returns a new
array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be
included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the
final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...args) {
	return [...new Set(args.flatMap(arr => arr.map(item => item)))]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

/*
Solution with loops:

let uniques = []
args.forEach(arr => {
	arr.forEach(item => {
		if (!uniques.includes(item)) {
			uniques.push(item)
		}
	})
})
return uniques

Ha! Even easier than my own oneliner:
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}


*/