import { useState } from "react";
import { CardI, makeCards } from "../utils/makeCards";
import "./Board.css";

export function Board(): JSX.Element {
  const allCards = makeCards();
  console.log(allCards);

  const handleCardClick = () => {
    console.log("card has been clicked")
    // take the id of the card and ...
    //switch the life property to faceUp
    // update boardState to ... 
        // if gameState is non-clicked => update game state as one-click
        //if gameState is one-clicked => update game state to two-clicked
        //if game state is two-clicked => " you cannot do that"
 
  }

  return (
    <>
    <h1 className= "title"> MATCHING GAME </h1>

      <div className="ctn-game-board">
        {allCards.map((card, i) => {
          return (
            <div key={card.id} className={`card${card.life}`}  onClick={() => handleCardClick()}>
             {card.life === "faceUp" && <p>{card.emoji}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
}
