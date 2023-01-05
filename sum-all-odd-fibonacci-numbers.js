/*
Given a positive integer num, return the sum of all odd Fibonacci
numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every
additional number in the sequence is the sum of the two previous
numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci
numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  let prev1 = 1
  let prev2 = 1
  let sum = 2
  let i = 0
  while (i <= num) {
    if (i % 2 != 0) {
      sum += i
    }
    i = prev1 + prev2
    prev1 = prev2
    prev2 = i
  }
  return sum
}

console.log(sumFibs(4))
console.log(sumFibs(4000000))
console.log(sumFibs(75024))
console.log(sumFibs(1000))

/*

function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

*/