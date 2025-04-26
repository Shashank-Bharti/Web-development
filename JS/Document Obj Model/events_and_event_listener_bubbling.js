let btn = document.getElementById("btn")

btn.addEventListener("mouseover",()=>{
let button = document.querySelector('#btn')
let box = document.querySelector('.box')
button.innerHTML = "<b>I got hovered</b>"
box.innerHTML = "<h1>I was changed</h1>"

})

// 