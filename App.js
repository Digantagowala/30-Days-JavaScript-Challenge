
  // Template Literals
// const person = `Diganta`
// const age = 27
// const Log = `My name is ${person} and My age ${age}`
// console.log(Log)

// const Name = `Diganta`
// const email = `digantagowala@123gmail.com`
// const asse = `Welcome to my ${email}
//             if you have any questtion , than can ask me about my Project and also ask me about my Ideas`

// console.log(asse)


// Destructuring

// const dArr = [1, 2, 3, 4,]
// const  [First, Second, third] = dArr
// console.log(First)
// console.log(Second)


// const book = {
//   title : 'The book',
//   author : 'Chai and code'
// }

// const {title, author} = book

// console.log(title)
// console.log(author)

// spread and rest operators

// const newArr = [1, 2, 3,]
// const secondArr = [4, 5, 6]

// const newArray = [...newArr, ...secondArr];
// console.log(newArray)



// function add(a, b, c) {
//   return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(add(...numbers)); 


// Default parameters

// function name(a, b=1) {
//   return a + b;
  
// }

// console.log(name(2,2));
// console.log(name(2))

// const name = 'Diganta';
// const age = 25;

// const firstName = 'Digu'
// const lastName = 'Oggi'
// const age = 27

// const person = {
//   firstName,
//   lastName,
//   age,
//   getfullName(){
//     return `${firstName} & ${lastName}`;
//   },
  
// }

// console.log(person);
// console.log(person.getfullName())


// feature request
const Name = "Diganta"
const contact = 'digantagowala123@gmail.com'
const personbio = `Hi i am Person who are interest in development
                  and i want to get a job in Softare industry. 
                  So if you have interest on me that you can ,
                  Contact Me : ${contact} this email adress.`

console.log(personbio)   

// Destrutuing Script
const  colors = ['Red', 'Green', 'Blue']
const Positions = [First, Second, Third] = colors
console.log(colors)
console.log(First)
console.log(Second)
console.log(Third)

const person = {
  name: 'Diganta',
  age: 25,
  email: 'digantagowala123@gmail.com'
};
const { name, age, email } = person;


console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email}`);


// spread and rest operator
const arr = [1,2, 3, 4, 5, 6, ]
const arr1 = [7, 8, 9, 10, 11, 12, 13, 14, 15]

const newAray = [...arr, ...arr1]
console.log(newAray)


function person1(name, age, adress) {
  console.log(`Name: ${name}`)
  console.log(`Age is : ${age}`)
  console.log(`My Adress : ${adress}`)
}

function createProfile(name, age, ...hobbies) {
  console.log(`নাম: ${name}`);
  console.log(`বয়স: ${age}`);
  console.log(`শখ: ${hobbies.join(', ')}`);
}

createProfile('Alice', 25, 'Reading', 'Hiking', 'Cooking'); 

// default parameter script
function script (a, b=2) {
   return a*2
}

console.log(script(2));
console.log(script(4))

// Enhanced Object  Literal


const dynamicKey = 'dynamicProperty';

const myObject = {
 
  [dynamicKey]: 'This is a dynamic property value',


  greet() {
    console.log('Hello, welcome to enhanced object literals!');
  },


  calculateSum(a, b) {
    return a + b;
  }
};


console.log(myObject);


myObject.greet();
console.log('Sum:', myObject.calculateSum(5, 10));


console.log('Dynamic Property Value:', myObject[dynamicKey]);



