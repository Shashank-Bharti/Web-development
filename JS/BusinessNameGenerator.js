// Create a Business Name Generator by combinining list of adjectives and shop name and another word

/*
Adjectives:
Crazy
Amazing
Fire

Shopname:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
function randint() {
  a = Math.floor(Math.random() * 3);
  return a;
}

let adj = "";
if (randint() == 0) {
  adj = "Crazy";
} else if (randint() == 1) {
  adj = "Amazing";
} else {
  adj = "Fire";
}

let spname = "";
if (randint() == 0) {
  spname = "Engine";
} else if (randint() == 1) {
  spname = "Garments";
} else {
  spname = "Foods";
}

let aw = "";
if (randint() == 0) {
  aw = "Bros";
} else if (randint() == 1) {
  aw = "Limited";
} else {
  aw = "Hub";
}
console.log(`Your Business Name is : ${adj} ${spname} ${aw}`);
