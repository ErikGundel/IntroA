
function createCard() {
  let card = document.createElement("section");
  card.classList.add("card");
  document.body.appendChild(card);
  
  let img = document.createElement("img");
  img.src="images/charmander.png";
  card.appendChild(img);
  
  let pokeName = document.createElement("h1");
  pokeName.classList.add("pokeName");
  pokeName.innerHTML = "Charmander";
  card.appendChild(pokeName);
  
  let pokeInfo = document.createElement("section");
  pokeInfo.classList.add("pokeInfo");
  card.appendChild(pokeInfo);
  
  let type = document.createElement("p");
  type.innerHTML = "Type: Fire";
  pokeInfo.appendChild(type);
  
  let hp = document.createElement("p");
  hp.innerHTML = "HP: 39";
  pokeInfo.appendChild(hp);
  
  let pokeMoves = document.createElement("section");
  pokeMoves.classList.add("pokeMoves");
  pokeInfo.appendChild(pokeMoves);
  
  let moves = document.createElement("p");
  moves.innerHTML =  "Moves";
  pokeMoves.appendChild(moves);
  
  let moveList = document.createElement("ul");
  pokeMoves.appendChild(moveList);
  
  let move1 = document.createElement("li");
  move1.innerHTML = "Scratch";
  moveList.appendChild(move1);
  
  let move2 = document.createElement("li");
  move2.innerHTML = "Growl";
  moveList.appendChild(move2);
  
  let move3 = document.createElement("li");
  move3.innerHTML = "Ember";
  moveList.appendChild(move3);
  
  let move4 = document.createElement("li");
  move4.innerHTML = "Smokescreen";
  moveList.appendChild(move4);
}

createCard();
createCard();
createCard();