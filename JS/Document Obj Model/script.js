console.log("Hello world")
console.log(document.body.childNodes)

let cont = document.body.childNodes[1]

console.log(cont)
console.log(cont.firstChild)
console.log(cont.lastChild)

console.log(cont.firstElementChild)
console.log(cont.lastElementChild)

console.log(cont.firstElementChild.style.backgroundColor = "skyblue")
console.log(cont.lastElementChild.style.color = "blue")

console.log(cont.firstElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children[1].style.backgroundColor = "gold")

console.log(document.body.firstElementChild.children[3].previousElementSibling)

console.log(document.body.children[1])
console.log(document.body.children[1].style.backgroundColor = "red")
console.log(document.body.children[1].rows[0].style.backgroundColor = "white")