import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import EndScreen from './endscreen'

type Card = {
    id: string;
    match: string;
    image: string;
    content: string;
};

type GameBoardProps ={
    cardArray: Card[];
}

const GameBoard: React.FC<GameBoardProps> = ({cardArray}) => {

    const [flippedCards, setFlippedCards] = useState<Card[]>([]);
    const [matchedCards, setMatchedCards] = useState<Card[]>([]);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [moveCount, setMoveCount] = useState(0);

    const handleGameOver = () =>{
        setFlippedCards([]);
        setMatchedCards([]);
        setGameOver(true);
    }

    const handleFlip = (card: Card)=>{
        setMoveCount(moveCount + 1)
        if(flippedCards.length == 0){
            setFlippedCards([card]);
        } else if(flippedCards.length == 1){
            if(flippedCards[0].match == card.match){
                setMatchedCards([...matchedCards, flippedCards[0],card])
                if(matchedCards.length == cardArray.length){
                    handleGameOver()
                }
            }
        }else{
            setTimeout(()=>{
                setFlippedCards([]);
        },1000);
    }
    }

    return (
        gameOver ? (<EndScreen/>) :
        (<div className = "card-grid">
            {cardArray.map((card)=>(
                <Card key={card.id} 
                {...card} 
                flipped = {matchedCards.includes(card)|| flippedCards.includes(card)}
                onClick={() => handleFlip(card)}
                />
            ))}
        </div>
        )
    )
}
export default GameBoard