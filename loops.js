
// Write a simple guessing game which has the user guess a selected number. Game
// should only stop when user has gotten the answer right
// hint: get a random number from 1 - 100 -> Math.floor(Math.random() * 100 + 1)





// Write a program that takes a number and prints a staircase up to that level
// eg 4
// *
// **
// ***
// ****

// --------- solution-------------

let i = 0;
while (i < 4) {
  console.log('*'.repeat(i + 1));
  i++; 
}


// Write a program to check if a number is odd or even

// --------- solution-------------

let refNum = prompt ('What is your ref num?');

if (refNum % 2 == 0) {
    console.log('even num');
}else {
    console.log('odd num');
}

// Write a program to print the sum of numbers from 0 - n, n being the number entered: eg 10 -> ??

// --------- solution-------------


let enterNum =prompt("Enter a number:");

let sum = 0;

for (let i = 0; i <= enterNum; i++) {
    console.log(sum += i);
}


// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// for multiples of 5, print "Buzz",
// and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

// --------- solution-------------

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  