import { useEffect, useState } from "react";
import { CardI, makeCards } from "../utils/makeCards";
import "./Board.css";

export function Board(): JSX.Element {
  const allCards: CardI[] = makeCards();
  const [cardsInPlay, setCardsInPlay] = useState<CardI[]>([])
  
  
  //on mount, set the cards in play to my array of emojis  
  useEffect(()=> {
    setCardsInPlay(allCards)
    console.log(setCardsInPlay)
  }, [])


  const handleCardClick = (cardToFlip: CardI) => {
    console.log("card has been clicked")
    // take the id of the card and ... map over the cards in play and return 
    const cardsPostFlip = cardsInPlay.map((oneCard) => {
        if (cardToFlip.id === oneCard.id){
            cardToFlip.life === "faceUp"
        }
    })
    //switch the life property to faceUp
    // update boardState to ... 
        // if gameState is non-clicked => update game state as one-click
        //if gameState is one-clicked => update game state to two-clicked
        //if game state is two-clicked => " you cannot do that"
    return cardsPostFlip
  }


  return (
    <>
    <h1 className= "title"> MATCHING GAME </h1>

      <div className="ctn-game-board">
        {allCards.map((card, i) => {
          return (
            <div key={card.id} className={`card${card.life}`} >
                {card.life === "faceUp" && <p onClick={() => handleCardClick(card)}> {card.emoji} </p>} 
            </div>
          );
        })}
      </div>
    </>
  );
}
