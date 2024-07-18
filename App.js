// function declaratio

function evenodd(number) {
    if(number  %2 === 0){
        return ' Odd'

    }else{
        return ' even'
    }
}
console.log(evenodd(10));
console.log(evenodd(7))

let num1 = 4;

function evenOdd (num1){
    return num1 * num1
}
console.log(evenOdd(num1))



// function expression

const x = function (a,b){
    return (a>b)? a:b;

}

console.log(Math.max(20,30))


let nam1 = "Diganta";
let name2 = " Gowala"
const Onename = function(nam1, name2){
    return nam1 + name2  
}
console.log(Onename(nam1, name2))



// Arrow Function q 2.
let c = 5;
let d = 5
const hello = (c, d) => {
    return c + d
}
console.log(c+ d)

let str = "Nation INDIA are the Best place to live with Spiritual life";

const containsIndia = (str) => {
    return !str.includes ("INDIA");
};

console.log(containsIndia(str)); 


// Function parameters and Default value q 2.]

function multiply(a, b = 1) {
    return a * b;
}


console.log(multiply(5, 3)); 
console.log(multiply(7));    


function person(name = 'Diganta', age = 27, ) {
    const greetingmsg = `Hello my name is ${name} and i am ${age} old`;
    return greetingmsg;
    
}
console.log(person())


// Higher order function Q 2.
function higherF(func, times) {
    for (let i = 0; i < times; i++) {
        func(); 
    }
}

function Voter() {
    console.log('Hello, I am a new voter');
}

higherF(Voter, 18);

function applyFunctions(func1, func2, value) {
    const result1 = func1(value); 
    const result2 = func2(result1); 
    return result2; 
}

function firstFunction(value) {
    return value * 2; 
}

function secondFunction(value) {
    console.log(`Result after processing: ${value}`);
}


const initialValue = 5;
const finalResult = applyFunctions(firstFunction, secondFunction, initialValue);


