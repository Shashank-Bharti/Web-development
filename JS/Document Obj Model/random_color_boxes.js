function randcolor(){
var letters = '0123456789ABCDEF';
let color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color
}
document.querySelectorAll(".box").forEach(e =>{
    e.style.color = randcolor()
    e.style.backgroundColor = randcolor()
    e.style.borderColor = randcolor()
})
