/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
	console.log(arr)
	if (arr.every(item => item.constructor.name != "Array")) {
		return arr
	} else {
		return steamrollArray(arr.reduce((acc, item) => {
			if (Array.isArray(item)) {
				return [...acc, ...item]
			}
			return [...acc, item]
		}, []))
	}
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

/*

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

*/