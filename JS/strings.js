console.log ("This is a strings tutorial")

let a = "Shashank"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
// console.log(a[8])

console.log(a.length)

let r_name = "Shashank"
let friend = "Sahil"

console.log("His name is "+r_name+" and his friend name is "+friend)
console.log(`His "name" is ${r_name} and his friend name is ${friend}`)

// Escape sequence

// b = "Har\nry"
b = "  Harry Bhai  "
console.log(b)

console.log(b.toUpperCase())
console.log(b.toLowerCase())

console.log(b.slice(1,5))
console.log(b.slice(1))

console.log(b.replace("Bhai","Bro"))

console.log(b.concat(a,"Shivam"))

console.log(b.trim())

// Strings are immutable

console.log(b.charAt(3))

