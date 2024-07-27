// // // array creation and access Q 2.

const arr = [1, 2, 3, 4, 5]
console.log(arr)

const arr1 = [1, 2, 3 , 4 , 5 ]
let firstElement = arr1[0];
let lasteElement = arr1[4]

console.log(`The Firts elemtn of array is : ${firstElement}`);
console.log(`The last element of array : ${lasteElement}`)

// array method basic Q 4.

let arrayN = [ '10, 20 30, 40'];

arrayN.push(50)
console.log(arrayN)

let arrr = [ 100, 2999 , 449887, 82636];
arrr.pop(3);
console.log(arrr)

let arrrr = [ "Digu", "Figu", "Tigu"];
arrrr.shift()
console.log(arrrr   
)

let arr2 = [" hello", " helloq", " hellej"]
arr2.unshift("nnnn")
console.log(arr2)



// array method intermediate Q 3

const newar = [ 2, 3, 4, 5 ,6 ,6 ]
const doublearr = newar.map(Number => Number * 2);
console.log(doublearr)


const newwar = [1, 2, 3, 4];
const even = newwar.filter(Number => Number % 2 === 0);
console.log(even)


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((mmm, numbers) => {
    return mmm + numbers
}, 0);

console.log(sum); 



// Array Iteration
let bbb = [ 20 , 30, 40, 50, 60];
for (let i = 0; i< bbb.length; i++ ){
    console.log(bbb[i]) 
}

const students = ['Diganta', 'Mohit', 'Charlie', 'sayan', 'moumita'];

students.forEach(function(student) {
  console.log(student);
});

// Multidimentonal Array



const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  
  console.log(matrix[2] );
  console.log(matrix[2][1]);
  console.log(matrix[0] [1])

let two = [
  ['Diganta', 20, 60, 'A'],
  ['Moumita', 30, 40, 'B']
];
console.log(two[1][0])
console.log(two[1][1])

// Features Request/ Array Manipulation script.
let mn = [5, 9, 15, 20, 30, 55];

// Adding 60 to the end of the array
mn.push(60);

// Removing the last element (which is 60)
mn.pop();

// Removing the first element (which is 5)
mn.shift();

// Adding an element (e.g., 1) to the beginning of the array
mn.unshift(1);

console.log(mn); // Outputs: [1, 9, 15, 20, 30, 55]


// Array Transformation Script
// let orders = [
//     {id:1, items : [{name : 'Biryani', price : 165}, {name: 'Roll', price : 40}]},
//     {id:2, items : [{name : 'Rice', price : 50}, {name: 'Chicken', price : 80}]},
//     {id:3, items : [{name : 'Dal', price : 30}, {name : 'Varta', price : 50}]},
//     {id:4, items : [{name : 'MuttonBiryani', price : 300}, {name : 'Fishcurry', price : 100}]},
// ];

// // Total ammount price using map and reduce 

// const overall = orders.map(order =>
//     order.items.reduce((total,item) => total + item.price, 0)
// );
// console.log(overall);

// const filteringprice = overall.filter(totalPrice => totalPrice >= 150);
// console.log(filteringprice);


// let array = [1, 2, 3, 4, 5, 6, 7,  8,  9,];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
// array.forEach(function(array) {
//     console.log(array)
// })



let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log("Initial Matrix:");
console.log(matrix);

matrix[1][1] = 10;


console.log("Matrix after changing matrix[1][1] to 10:");
console.log(matrix);

let newRow = [10, 11, 12];
matrix.push(newRow);

console.log("Matrix after adding a new row:");
console.log(matrix);


matrix.pop();


console.log("Matrix after removing the last row:");
console.log(matrix);


console.log("Logging each element:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}



