/* create a faulty calc using following details :

1. takes two numbers as input from the user
2. it performs wrong operations as follows

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs faulty calc  10% of the time 
*/

let r = Math.random();
let a = parseFloat(prompt("Enter a number: "));
let b = parseFloat(prompt("Enter another number: "));
let c = prompt("Enter an operation: ");

function sum(a,b){
    let d = a + b;
    return d;
}
function diff(a,b){
    let d = a > b ? (a - b) : (b - a);
    return d;
}
function multiply(a,b){
    return a * b;
}
function division(a,b){
    return a / b;
}
function exp(a,b){
    return a ** b;
}


if (r <= 0.1){
    if (c == "+"){
        console.log(diff(a,b));
    }
    if (c == "-"){
        console.log(division(a,b));
    }
    if (c == "*"){
        console.log(sum(a,b));
    }
    if (c == "/"){
        console.log(exp(a,b));
    }
}

else {
    if (c == "+"){
        console.log(sum(a,b));
    }
    if (c == "-"){
        console.log(diff(a,b));
    }
    if (c == "*"){
        console.log(multiply(a,b));
    }
    if (c == "/"){
        console.log(division(a,b));
    }
    
}

