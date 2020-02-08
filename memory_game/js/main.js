const cards = [ 
       { rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png"
        },
        {
      rank: "queen",
      suit: "diamends",
      cardImage: "images/queen-of-diamonds.png"
  }, 
      {
       rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
      }, 
      {
        rank: "kign",
        suit: "diamends",
        cardImage: "images/king-of-diamonds.png"
      }];
const cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
 }
function flipcard(cardId){
  console.log("User flipped"+" "+cards[cardId].rank );
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].image);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].image);
  cardsInPlay.push(cards[cardId].suit);
  checkForMatch();
}
flipcard(0);
flipcard(2);