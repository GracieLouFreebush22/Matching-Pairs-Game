 import { CardI } from "./makeCards";

 interface GameStateI {
    cards: [] //16 cards
    turnCount: number;
    turnPhase: "none-clicked" | "one-clicked" | "two-clicked";
    clickedCards: [] //zero, one, or two cards
}
//============== STEP 6, applying a discriminated union 
 type TurnState = NoneTurnedI | OneTurnedI | TwoTurnedI
 type NoneTurned= {title: "none-turned"}
 type OneTurned = {title: "one-turned"; firstCard: CardI}
 type TwoTurned = {title: "two-turned"; firstCard: CardI; secondCard: CardI}

 interface NoneTurnedI{
    title: "none-turned"
}

 interface OneTurnedI{
    title: "one-turned";
    firstCard: CardI;
}

 interface TwoTurnedI{
    title: "two-turned",
    firstCard: CardI;
    secondCard: CardI;
}


export type {
    TurnState,
    NoneTurnedI,
    OneTurnedI,
    TwoTurnedI,
    GameStateI,
    NoneTurned,
    OneTurned,
    TwoTurned
};
