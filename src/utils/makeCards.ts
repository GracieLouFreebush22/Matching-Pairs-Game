export function makeCards(): CardI[]{
    const emojis= ['💗', '👾', '😈', '🤡', '😘 ','👹'] 
    const emojisBoard: string[]= [...emojis, ...emojis]
    
   return emojisBoard.map(cardify).sort((a,b) => Math.random() > 0.5 ? -1 : 1)
    
}

function cardify(emoji: string, index: number): CardI{
    return {
        id: index + 1,
        emoji: emoji,
        life: "faceDown"
    }
}

makeCards()

export interface CardI{
    id: number,
    life: "faceUp" | "faceDown" | "removed"
    emoji: string,
}

