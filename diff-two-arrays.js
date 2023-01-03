/*
Compare two arrays and return a new array with any items only found in
one of the two given arrays, but not both. In other words, return
the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
	let res1 = arr1.filter(x => !arr2.includes(x))
	let res2 = arr2.filter(x => !arr1.includes(x))
	return [...res1, ...res2]
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
console.log(diffArray(["a", "b"], ["c", "d"]))

/*
Much better solution, only needs one filter

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

*/