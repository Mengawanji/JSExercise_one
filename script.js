// Assignments:
// Using if...else,write the code which gets a number via prompt and then shows in alert
// - 1, if the value is greater than 0
// -1, if less than 0
// 0, if equals to 0

// --------- solution-------------
let students = prompt ('How many students are in class?');

if (students > 0) {
    alert ('-1');
}else if (students < 0){
    alert ('-1');
}else {
    alert (students);
}


// Assignment:
// Create a web page that asks for a name and outputs it.
// Think of some other simple program you can write and do that.

// --------- solution-------------
let userName = prompt ('What is your name?');

alert ('Welcome to Rebase '+ userName);

let userAge = prompt ('How old are you?');

if (userAge <= 16) {
    alert ('Hello '+ userName + ', you are a minor!');
}else if (userName >18){
    alert ('Hello '+ userName + ', you are an adult!');
}else {
    alert ('Hello '+ userName + ', you are an adult!');
}


// Assignments: Write a program to print prime numbers from 1 -100

// --------- solution-------------

for (let num = 2; num <= 100; num++) {
    let primeNum = true;
    let i = 2;
  
    while (i * i <= num) {
      if (num % i === 0) {
        primeNum = false;
        break;
      }
      i++;
    }
  
    if (primeNum) {
      console.log(num);
    }
  }
  
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
  