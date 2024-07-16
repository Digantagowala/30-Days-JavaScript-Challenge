// Control structures

if else statement
let b = 10;
if(b<=9, b+=9){
    console.log("Positive")
}else if (b>=9, b--){
    console.log('Negative')
}else{
    console.log('Zero')
}

let age = 18;
if (age>16){
    console.log('The person are eligible of the Voter')
}else if(age<16){
    console.log("Not aligible of the voting")
}




// Nested if -else statement
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1<=5){
    console.log('Not greate as alike')
    if(num1&num2 >=30){
        console.log("I think it is not actuall")
    }
}else{
    console.log(`This is my Greate number : ${num3}`);
}

// Function to check if a number is even or odd using the ternary operator

  
// combinig condition
function Checkleapyear(year) {
    const Leapyear = ( year % 4 === 0 &&(year % 100 !== 0 || year %400 == 0)? 'leap year': 'not leap year')
    console.log(`The Year : ${year} is ${Leapyear}`)
    
}

Checkleapyear(2024);
Checkleapyear(2023);
Checkleapyear(2022);
Checkleapyear(1997);
  