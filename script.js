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
  



    

