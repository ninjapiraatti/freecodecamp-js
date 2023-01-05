/*
Create a function that sums two arguments together. If only one argument
is provided, then return a function that expects one argument and returns the sum.

For example,

addTogether(2, 3) should return 5, and addTogether(2)

should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

// Man this is a hot mess. Check out nicer solution below

function addTogether(...args) {
	if (typeof args[0] != "number" || (args[1] && typeof args[1] != "number")) {
		return undefined
	}
	if (typeof args[1] == "undefined" && args.length == 2) {
		return undefined
	}
	if (args[1]) {
		let sum = args[0] && args[1] ? args[0] + args[1] : 0
		return sum
	} else {
		return function(y) {
			console.log(typeof y)
			if (typeof y != "number") {
				return undefined
			}
			return args[0] + y
		}
	}
}


/*

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (arguments.length === 1)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

*/