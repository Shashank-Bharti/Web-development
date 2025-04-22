console.log("Konnichiva")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[0].style.backgroundColor = "deepskyblue"
boxes[1].style.backgroundColor = "green"
boxes[2].style.backgroundColor = "fuchsia"
boxes[3].style.backgroundColor = "Orange"
boxes[4].style.backgroundColor = "lightgreen"

let box_id = document.getElementById("olly")

box_id.style.backgroundColor = "floralwhite"

document.querySelector("#bob").style.backgroundColor = "saddlebrown"

document.querySelectorAll(".box").forEach(e =>{
    e.style.border = "4px solid gold"
})

let e = document.getElementsByTagName("div")

console.log(e[2].matches("#olly")) //returns true
console.log(e[4].matches("#bob")) //returns false

console.log(e[3].closest(".container")) //returns cont

console.log(document.querySelector(".container").contains(e[5]))
console.log(document.querySelector("body").contains(document.querySelector(".container")))


