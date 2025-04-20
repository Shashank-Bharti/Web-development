// WAP to calculate factorial of a given number
// 6! = 6*5*4*3*2*1

/*Plan
 assign a var a no. 
 make a loop iterate until 1 append it to a array 
 then use reduce func to iterate over the array and multiply each 

*/ 

let array = []
for (let i = 6 ; i > 0; i--) {
    const element = i;
    array.push(element)
}

const factorial = (a,b) =>{
    return a*b
}

console.log(array.reduce(factorial))