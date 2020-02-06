
	 const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
 }
function flipcard(cardId){
  console.log("User flipped"+" "+cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  }
flipcard(0);
flipcard(2);
checkForMatch()
