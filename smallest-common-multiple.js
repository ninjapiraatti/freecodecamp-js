/*
Find the smallest common multiple of the provided parameters that
can be evenly divided by both, as well as by all sequential numbers
in the range between these parameters.

The range will be an array of two numbers that will not necessarily
be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of
both 1 and 3 that is also evenly divisible by all numbers
between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
	let list = [];
	arr.sort((a, b) => a - b) // an int32Array or similar might be faster
	for (let i = arr[0]; i <= arr[1]; i++) {
		list.push(i);
	}
	let i = 1
	console.log(list)
	while (i < 1000000000) {
		let yay = false
		yay = list.every(num => i % num == 0)
		if (yay) {
			return i
		}
		i++
	}
}

console.log(smallestCommons([2,10]))

/*

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // Largest possible value for SCM
  const upperBound = range.reduce((prod, curr) => prod * curr);
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    const divisible = range.every((value) => multiple % value === 0);
    if (divisible) {
      return multiple;
    }
  }
}

*/