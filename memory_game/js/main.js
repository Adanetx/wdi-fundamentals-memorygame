
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
function checkForMatch() { this.setAttribute('src', card[id].cardImage)
if(cardsInPlay.length===2){
   this.setAttribute('src', card[id].cardImage)
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
 }}
function flipcard(){
   let cardId = this.getAttribite('src', cards[id]cardImage);
  console.log("User flipped"+" "+cards[cardId].rank );
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].suit);
  checkForMatch();
 }
 funcition createBoard(){
   for(let i = 0; i < cards.length; i++)
     let cardElement = document.createElement('img');
     cardElement.setAttribute('src', "images/bank.png");
  cardElement.setAttribute('id', i);
   cardElement.addEventListner('click', flipcard);
   documement.getElementById('game-board').appendChild(cardElement);
