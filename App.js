// // The both two are variable decletion task

var a = 7;
console.log(a);



let c = 'Diganta'
console.log(c)



// // constant Decleration

const name = 'Diganta'
const loggedIn = true;
const count = 19;

console.log(name)
console.log(loggedIn)
console.log(count)

// // Data Types


const numberVar = 42;           // Number
const stringVar = 'Hello, world!';  // String
const arrayVar = [1, 2, 3];     // Array
const booleanVar = true;        // Boolean
const objectVar = { name: 'John', age: 30 }; // Object


console.log(typeof numberVar);   // Output: number
console.log(typeof stringVar);   // Output: string
console.log(typeof arrayVar);    // Output: object (arrays are considered objects in JavaScript)
console.log(typeof booleanVar);  // Output: boolean
console.log(typeof objectVar);   // Output: object


// Reassigning Variables

let Name = 'Diganta'
console.log(Name)

Name = 'buntu'
console.log(Name)

// Understanding the Const

const myConstVar = 42;
console.log(myConstVar); 

myConstVar = 100; 


// features request

// Declare variables of different data types
let numberVar = 42;
let stringVar = 'Hello, world!';
let booleanVar = true;
let arrayVar = [1, 2, 3];
let objectVar = { name: 'Alice', age: 30 };

// // Log both the value and type of each variable
console.log(`Value of numberVar: ${numberVar}, Type: ${typeof numberVar}`);
console.log(`Value of stringVar: ${stringVar}, Type: ${typeof stringVar}`);
console.log(`Value of booleanVar: ${booleanVar}, Type: ${typeof booleanVar}`);
console.log(`Value of arrayVar: ${arrayVar}, Type: ${typeof arrayVar}`);
console.log(`Value of objectVar: ${JSON.stringify(objectVar)}, Type: ${typeof objectVar}`);

// Demonstrating the difference between let and const


let variableLet = "Initial Value";
console.log("Initial value of variableLet:", variableLet);

variableLet = "New Value";
console.log("New value of variableLet:", variableLet); 


const variableConst = "Initial Value";
console.log("Initial value of variableConst:", variableConst); 


try {
    variableConst = "New Value";
} catch (error) {
    console.log("Error when reassigning variableConst:", error.message); 
}



