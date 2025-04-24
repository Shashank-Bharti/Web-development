function createCard(title, cname, views, thumbnail, monthsOld, duration) {
  let a; 
  if (views >= 1000000) {
    a = Math.round((views / 1000000)) + 'M'; 
  } else if (views >= 1000) {  
    a = Math.round((views / 1000))+ 'K'; 
  } else {
    a = views; 
  }

  let formatted_views = a; 

  let card = document.createElement("div");
  card.innerHTML = `
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

createCard('Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1', 'CodeWithHarry', 4400000, 'thumbnail.webp', '1 year', '31:20');
createCard('Your First HTML Website | Sigma Web Development Course - Tutorial #2', 'CodeWithHarry', 16000, 'thumbnail.webp', '1 year', '28:31');
createCard('Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3', 'CodeWithHarry', 1000000, 'thumbnail.webp', '1 year', '11:21');
