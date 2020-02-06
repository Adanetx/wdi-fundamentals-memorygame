const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne); 
console.log("user flipped"+" "+cardOne);
let cardTwo =cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped"+" "+cardTwo);

 if (cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match!");
}

else {
	alert("sory try againg");
}
	