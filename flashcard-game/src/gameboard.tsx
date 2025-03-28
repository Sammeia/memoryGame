import React, {useState} from 'react';
import './gameboard.css';
import Card from './card';

type Card = {
    id: string;
    match: string;
    image: string;
    content: string;
};

type GameBoardProps ={
    cardArray: Card[];
    onGameOver: () => void;
    reset: () => void;
    setCurrentMoves: React.Dispatch<React.SetStateAction<number>>;
    currentMoves: number;
}

const GameBoard: React.FC<GameBoardProps> = ({cardArray,onGameOver,reset,setCurrentMoves,currentMoves}) => {

    const [flippedCards, setFlippedCards] = useState<Card[]>([]);
    const [matchedCards, setMatchedCards] = useState<Card[]>([]);

    const handleFlip = (card: Card)=>{
        setCurrentMoves(currentMoves + 1)
        if(flippedCards.length === 0){
            setFlippedCards([card]);
        } else if(flippedCards.length === 1){
            setFlippedCards([flippedCards[0],card]);
            if(flippedCards[0].match === card.match){
                const newMatchedCards = [...matchedCards, flippedCards[0], card];
                setMatchedCards(newMatchedCards);
                setFlippedCards([]);
                if(newMatchedCards.length === cardArray.length){
                    onGameOver();
                }
            }else{
                setTimeout(()=>{
                    setFlippedCards([]);
                    setMatchedCards([]);
                },1000);
            }
        }   
    }

    return (
        <>
        <div className = "move-title">
            <div className = "moves">
                <h1>Current # of Moves: {currentMoves}</h1>
            </div>
            <div className = "reset-button">
                <button className = "reset-button" onClick={reset}>Reset Game</button>
            </div>
        </div>
        <div className="card-grid">
                {cardArray.map((card) => (
                    <Card key={card.id}
                        {...card}
                        flipped={matchedCards.includes(card) || flippedCards.includes(card)}
                        onClick={() => handleFlip(card)} />
                ))}
        </div>
        </>
    )
}
export default GameBoard