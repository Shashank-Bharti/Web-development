console.log("hello")

console.log(document.querySelector(".box").innerHTML )

console.log(document.querySelector(".cont").innerHTML )
console.log(document.querySelector(".cont").outerHTML )

console.log(document.querySelector(".cont").tagName )

console.log(document.querySelector(".cont").hidden )

console.log(document.querySelector(".box").innerHTML = "Hey there I was changed")

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style"))
// console.log(document.querySelector(".box").removeAttribute("style"))

console.log(document.querySelector(".box").attributes)

// console.log(document.designMode = "on")

console.log(document.querySelector(".box").dataset)

// ----------------------------------------------------------------------------
// APPEND NEW ELEMENT DYNAMIC UPDATE

let div = document.createElement("div")
div.innerHTML = "I have been inserted"
div.setAttribute("class","created")
document.querySelector(".cont").append(div)
document.querySelector(".cont").before(div)
document.querySelector(".cont").after(div)
document.querySelector(".cont").prepend(div)


let con  = document.querySelector(".cont")
con.insertAdjacentHTML("afterEnd", "<b>Hey there im new html </b>")
con.insertAdjacentHTML("beforeBegin", "<b>Yo!! </b>")


// Create a new div element
let newDiv = document.createElement("div");
newDiv.innerHTML = "This is a dynamically inserted div";
newDiv.setAttribute("class", "new-class");
document.querySelector(".cont").insertAdjacentElement("beforebegin", newDiv);


//  Node removal

let class1 = document.getElementById ("new_class")
// console.log(class1.remove())

// class and classlist
console.log(document.querySelector(".cont").classList)
console.log(document.querySelector(".cont").classList.remove("red"))
console.log(document.querySelector(".cont").classList.add("blue"))
// console.log(document.querySelector(".cont").classList.toggle("blue"))
