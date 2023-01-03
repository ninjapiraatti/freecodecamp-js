/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus 
the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers
between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
	let res = 0
	let range = [...arr]
	if (range[0] > range[1]) {range.reverse()}
	for (let i = range[0]; i <= range[1]; i++) {
		res += i
	}
	return res
}

console.log(sumAll([1, 4]))

/*

Recursive solution

function sumAll(arr) {
  const [first, last] = [...arr].sort((a, b) => a - b);
  return first !== last
    ? first + sumAll([first + 1, last])
    : first;
}

*/