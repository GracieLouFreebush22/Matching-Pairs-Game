import { makeCards } from "../utils/makeCards";
import "./Board.css";

export function Board(): JSX.Element {
  const allCards = makeCards();
  console.log(allCards);

  return (
    <>
      <div>
        <h1> MATCHING GAME </h1>
      </div>
      <div className="ctn-game-board">
        {allCards.map((card, i) => {
          return (
            <div key={card.id} className="ctn-board-item">
              {card.emoji}
            </div>
          );
        })}
      </div>
    </>
  );
}
