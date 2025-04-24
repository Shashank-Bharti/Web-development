function createCard(title, cname, views, thumbnail, monthsOld, duration,v_num) {
  let a; 
  if (views >= 1000000) {
    a = (views / 1000000).toFixed(1) + 'M'; 
  } else if (views >= 1000) {  
    a = (views / 1000).toFixed(1)+ 'K'; 
  } else {
    a = views; 
  }

  let formatted_views = a; 

  let card = document.createElement("div");
  card.innerHTML = `
  <div class = "v_num">${v_num}</div>
  <div class="thumb_and_time">
    <img class="thumb" src=${thumbnail} alt="Thumbnail" />
    <div class="time">${duration}</div>
  </div>
  <div class="title">${title}
  <div class="sub-info"> ${cname} • ${formatted_views} views • ${monthsOld} ago</div>
  </div>`;
  card.setAttribute("class", "card");
  document
    .querySelector(".container")
    .insertAdjacentElement("beforeBegin", card);
}

createCard('Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 'CodeWithHarry', 4446546, 'thumbnail.webp', '1 year', '31:20',1);
createCard('Your First HTML Website | Sigma Web Development Course - Tutorial #2', 'CodeWithHarry', 1619456, 'thumbnail.webp', '1 year', '28:31',2);
createCard('Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3', 'CodeWithHarry', 1146522, 'thumbnail.webp', '1 year', '11:21',3);
