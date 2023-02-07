import { makeCards } from "../utils/makeCards"


export function Board():JSX.Element{
    const allCards= makeCards()
    console.log(allCards)
    return(
        <>
        <div>
        
            <h1> MATCHING GAME </h1>

        </div>
        <div>
            {allCards.map((card,i) => {
                return(
                    <div key={card.id} className= "game-board">
                    <p>{card.emoji}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}