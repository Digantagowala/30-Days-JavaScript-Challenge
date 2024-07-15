// Arithmetic operations

let x = 10 + 10;    
console.log(x);

let y = 10-10;
console.log(y);

let z = 20*20;
console.log(z);

let a = 2/50;
console.log(a)

let b = 500 % 2;
console.log(b)


// Assignment operators
let p = 5
p +=5
console.log(p)

let v = 20 ;
v-=10;
console.log(v)

// comperison operator

let n = 10
if(n<11){
    console.log('good')
}else{
    console.log('bad')
}


let c = 20;
let g = 30;
if (c>=30){
    console.log('L')

 } else if (g<= 40){
    console.log('right')
    
 }else {
    gooday = 'hello '
 }

 let N = 20;
 if (N == 10){
    console.log("hh")
 }else if (N===20){
    console.log('mum')
 }



 let num = 200;
 if (num<= 300 && num>=500){
    console.log('path')
 }else{
    console.log('nnnnn')
 }


 let X = 10;
 let Y = 20;

 if (X==!10){
    console.log('not good')

 }else if (Y!==10){
    console.log('alll good')
 }


//  Ternary operator

// Function to perform basic arithmetic operations


// Function to perform basic arithmetic operations
function performArithmeticOperations(num1, num2) {
    // Addition
    const addition = num1 + num2;
    console.log(`${num1} + ${num2} = ${addition}`);
    
    // Subtraction
    const subtraction = num1 - num2;
    console.log(`${num1} - ${num2} = ${subtraction}`);
    
    // Multiplication
    const multiplication = num1 * num2;
    console.log(`${num1} * ${num2} = ${multiplication}`);
    
    // Division
    if (num2 !== 0) {
      const division = num1 / num2;
      console.log(`${num1} / ${num2} = ${division}`);
    } else {
      console.log('Division by zero is not allowed');
    }
  
    // Remainder
    if (num2 !== 0) {
      const remainder = num1 % num2;
      console.log(`${num1} % ${num2} = ${remainder}`);
    } else {
      console.log('Finding remainder with zero is not allowed');
    }
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 2;
  performArithmeticOperations(num1, num2);
  


// comparison and logical operator

// Function to compare two numbers and log results
function compareNumbers(num1, num2) {
   console.log(`Comparing numbers: ${num1} and ${num2}`);

   // Comparison operators
   console.log(`Is ${num1} greater than ${num2}?`, num1 > num2);
   console.log(`Is ${num1} less than ${num2}?`, num1 < num2);
   console.log(`Is ${num1} equal to ${num2}?`, num1 == num2);
   console.log(`Is ${num1} not equal to ${num2}?`, num1 != num2);
   console.log(`Is ${num1} greater than or equal to ${num2}?`, num1 >= num2);
   console.log(`Is ${num1} less than or equal to ${num2}?`, num1 <= num2);

   // Strict comparison operators
   console.log(`Is ${num1} strictly equal to ${num2}?`, num1 === num2);
   console.log(`Is ${num1} strictly not equal to ${num2}?`, num1 !== num2);

   // Logical operators
   console.log(`Is ${num1} greater than ${num2} AND ${num1} not equal to ${num2}?`, num1 > num2 && num1 != num2);
   console.log(`Is ${num1} greater than ${num2} OR ${num1} equal to ${num2}?`, num1 > num2 || num1 == num2);
   console.log(`Is NOT ${num1} less than ${num2}?`, !(num1 < num2));
}

// Test the function with different numbers
compareNumbers(5, 3);
compareNumbers(2, 2);
compareNumbers(1, 4);


let positiveNum = 10;
let negativeNumber = 11;

if ( positiveNum / 2){
   console.log("The number is Positive")
}else if (negativeNumber /2){
   console.log("The number are Negative")
}

