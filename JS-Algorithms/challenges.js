/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.
***** */

const readableTime = (seconds) => {
  const secondHour=  3600;
  const totalSecond = 60; 
  
  let hours = Math.floor(seconds / secondHour).toString().padStart(2, '0');
  seconds %= secondHour;
  let minutes = Math.floor(seconds / totalSecond).toString().padStart(2, '0');
  seconds %= totalSecond;
  let secs = seconds.toString().padStart(2, '0');

  return `${hours}:${minutes}:${secs}`;
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number
***** */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (index) => {
  index = index % COUNTRY_NAMES.length; //adjust the range of the index
  return [...COUNTRY_NAMES.slice(index), ...COUNTRY_NAMES.slice(0, index)]; //use array spreading to concatenate both parts of the array 
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.
***** */
const ownPower = (number, lastDigits) => {
  const sum = Array.from({ length: number }, (_, i) => BigInt(i + 1) ** BigInt(i + 1))
                   .reduce((acc, val) => acc + val, BigInt(0));
  return sum.toString().slice(-lastDigits);
};


ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);

/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

***** */

const digitSum = (n) => {
  let factorial = BigInt(1);
  for (let i = 1; i <= n; i++) {
    factorial *= BigInt(i);
  }
  sum = 0;
  const factStr = factorial.toString();
  for (let i = 0; i < factStr.length; i++) {
    sum += parseInt(factStr[i]);
  }
  return sum;
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.
***** */

const fibIndex = (n) => {
  let a = BigInt(0), b = BigInt(1);
  let index = 1;
  while (true) {
    let next = a + b;
    a = b;
    b = next;
    index++;
    if (b.toString().length === n) {
      return index;
    }
  }
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
