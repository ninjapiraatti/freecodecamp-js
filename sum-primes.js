/*
A prime number is a whole number greater than 1 with exactly two
divisors: 1 and itself. For example, 2 is a prime number because it
is only divisible by 1 and 2. In contrast, 4 is not prime since it
is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that
are less than or equal to num.
*/

function sumPrimes(num) {
  let sum = 0
  let i = 2
  while (i <= num) {
    let j = 0
    let isPrime = true
    while (j <= num) {
      if (i % j == 0 && i != j && j != 1) {
        isPrime = false
        break
      }
      j++
    }
    if (isPrime === true) {
      sum += i
    }
    i++
  }
  return sum
}

console.log(sumPrimes(977))

/*

function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0)
        return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      sum += i;
  }
  return sum;
}

*/