function nice(name) {
    console.log("This is a test yourname is "+name+"Hello")
    console.log("Your Name is"+ name+".")

}

nice("Shashank")
nice("Rachit")

function sum (a,b,c=3) {
    // console.log(a + b)
    return a + b +c
}

result = sum(9,1)
console.log("the sum is" , result)

const func1 = (x)=>{
    console.log("Iam an arrow function", x)
}

func1(34);
func1(66);