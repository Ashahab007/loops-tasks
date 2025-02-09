/* Write a loop 1 to 200. Use break to exit the loop once you find 100. */

for (let i = 0; i <= 200; i++) {
  if (i == 100) {
    break;
  }
  console.log(i);
}

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
let startNum = 1;

while (startNum < 20) {
  sum += startNum;
  if (sum >= 100) {
    break;
  }
  console.log("Sum is: ", sum);
  startNum++;
}

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let i = 1; i <= 40; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log("Even number: ", i);
}

/*
 display odd number from 55 to 85 and skip the numbers divisible by 5.
 */

for (let i = 55; i < 85; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    continue;
  }
  console.log("Odd numbers from 55 - 85 without divisible by 5: ", i);
}

/***
Subtask-1:
Display sum of all the odd numbers from 91 to 129.*/

let sumNum = 0;

for (let i = 91; i < 129; i++) {
  if (i % 2 !== 0) {
    sumNum += i;
    console.log("odd: ", i, "Sum of Odd: ", sumNum);
  }
}

/***Subtask-2:
Display sum of all the even numbers from 51 to 85. */

let sumNumber = 0;

for (let i = 51; i < 85; i++) {
  if (i % 2 == 0) {
    sumNumber += i;
    console.log("even", i, "Sum", sumNumber);
  }
}

/*** Generate a multiplication table for number 9*/

console.log("Multiplication Table ");

let numberTable = 9;
for (let i = 0; i <= 10; i++) {
  let result = numberTable * i;
  console.log(numberTable, "x", i, "=", result);
}

/***

Implement a countdown timer that counts down from 81 to 65.

 */

for (let i = 81; i >= 65; i--) {
  console.log("Countdown Timer", i);
}

/* Using while loop */
let countdownStart = 81;
while (countdownStart > 64) {
  console.log("Countdown using while loop", countdownStart);
  countdownStart--;
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.) 
Note: there is some confusion need to discuss with Programminghero
*/

let inputNums = 1;
// console.log(Number.isInteger(Math.sqrt(inputNums)));
console.log(Math.sqrt(inputNums));

for (let i = 1; i < 100; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    console.log("Square root is integer: ", i);
    continue;
  } else {
    console.log("Square root is not a integer", i);
  }
}

