For Loop

let x = 10;
for (let i=1; i<=x; i++){
    console.log(i)
}

const number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`)
}


while loop
let sum = 0;
 let i = 1;
 while (i<=10){
    sum+=i;
    i++
 }console.log(`The number 1to 10 sum are : ${sum}`, )




let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

do while loop
let i = 1;


do {
    console.log(i);
    i++;
}while(i<=5)



function factorialDoWhile(n) {
    if (n < 0) return -1; // Factorial is not defined for negative numbers
    let result = 1;
    let i = n;
    
    do {
        result *= i;
        i--;
    } while (i > 0);

    return result;
}

console.log(factorialDoWhile(5)); // Output: 120



Nested Loop

function printRightAngledTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

printRightAngledTriangle(5);

Loop control system

let text = '';

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    text += i + "<br>";
}

console.log(text);


let text = '';

for(let i = 0 ; i <=10; i++){
    if(i === 7){
        break
    }
    text += i + "<br>"
}
console.log(text)

