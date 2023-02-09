import { useState } from "react";
import { CardI, makeCards } from "../utils/makeCards";
import "./Board.css";

export function Board(): JSX.Element {
  const [cardsInPlay, setCardsInPlay] = useState<CardI[]>(makeCards())


  const handleCardClick = (cardToFlip: CardI) => {
    console.log(cardToFlip.id, "card has been clicked")
    // take the id of the card and ... map over the cards in play and return :  return {...oneCard, life:"faceUp"}
    const cardsPostFlip: CardI[] = getCardswOneFlipped(cardsInPlay, cardToFlip)
    setCardsInPlay(cardsPostFlip)
  }
// breaking down the flip cards into two different things, fix this return statement
  const getCardswOneFlipped = (cards: CardI[], targetCard: CardI): CardI[] => {
    const copyOfCards = [...cards]
    copyOfCards.map((oneCard) => {
        if (targetCard.id === oneCard.id){
            console.log(targetCard.emoji)
            return oneCard.life === "faceUp"
           
        }
    })
    console.log("i am copy of cards", copyOfCards)
    return copyOfCards
  }

  return (
    <>
    <h1 className= "title"> MATCHING GAME </h1>

      <div className="ctn-game-board">
        {cardsInPlay.map((card, i) => {
          return (
            <div key={card.id} className={`card${card.life}`} onClick={() => handleCardClick(card)}>
                {card.life === "faceUp" && <p > {card.emoji} </p>} 
            </div>
          );
        })}
      </div>
    </>
  );
}

   //switch the life property to faceUp
    // update boardState to ... 
        // if gameState is non-clicked => update game state as one-click
        //if gameState is one-clicked => update game state to two-clicked
        //if game state is two-clicked => " you cannot do that"