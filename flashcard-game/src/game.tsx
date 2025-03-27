import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import GameBoard from './gameboard';
import EndScreen from './endscreen';

type Card = {
    id: string;
    match: string;
    image: string;
    content: string;
};

const Game: React.FC = () => {
    const cardArray = [
    {
        id:"1",
        match:"1",
        image:"https://via.placeholder.com/150",
        content:"Captain America"
    },
    {
        id:"2",
        match:"1",
        image:"https://via.placeholder.com/150",
        content:"Captain America"
    },
    {
        id:"3",
        match:"2",
        image:"https://via.placeholder.com/150",
        content:"Captain Marvel"
    },
    {
        id:"4",
        match:"2",
        image:"https://via.placeholder.com/150",
        content:"Captain Marvel"
    },
    {
        id:"5",
        match:"3",
        image:"https://via.placeholder.com/150",
        content:"The Hulk"
    },
    {
        id:"6",
        match:"3",
        image:"https://via.placeholder.com/150",
        content:"The Hulk"
    },
    {
        id:"7",
        match:"4",
        image:"https://via.placeholder.com/150",
        content:"Black Widow"
    },
    {
        id:"8",
        match:"4",
        image:"https://via.placeholder.com/150",
        content:"Black Widow"
    },
    {
        id:"9",
        match:"5",
        image:"https://via.placeholder.com/150",
        content:"Iron Man"
    },
    {
        id:"10",
        match:"5",
        image:"https://via.placeholder.com/150",
        content:"Iron Man"
    },
    {
        id:"11",
        match:"6",
        image:"https://via.placeholder.com/150",
        content:"Hawkeye"
    },
    {
        id:"12",
        match:"6",
        image:"https://via.placeholder.com/150",
        content:"Hawkeye"
    },
    {
        id:"13",
        match:"7",
        image:"https://via.placeholder.com/150",
        content:"Thor"
    },
    {
        id:"14",
        match:"7",
        image:"https://via.placeholder.com/150",
        content:"Thor"
    },
]

const [cards, setCardArray] = useState<Card[]>(cardArray);
const [gameOver, setGameOver] = useState<boolean>(false);
const [currentMoves, setCurrentMoves] = useState<number>(0);
const [totalMoves, setTotalMoves] = useState<number>(0);
const [totalGames, setTotalGames] = useState<number>(0);

const shuffleCards = (array: Card[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
      }
      return newArray;
}

const handleCardShuffle = () => {
    setCardArray(shuffleCards(cardArray));
    setCurrentMoves(0);
}

const handleGameOver = () => {
    setGameOver(true);
    setTotalGames(totalGames + 1);
    setTotalMoves(totalMoves + currentMoves);
    handleCardShuffle();
}

    return(
        <>
        <div>
            <h1>Games Played: {totalGames}</h1>
            <h1>Average # of Moves: {totalMoves/totalGames}</h1>
        </div>
        <div>
            {gameOver ? (
                <EndScreen onReset={() => setGameOver(false)}/>
            ):(
            <GameBoard 
            cardArray={cards} 
            onGameOver={handleGameOver} 
            reset={handleCardShuffle}
            setCurrentMoves = {setCurrentMoves}
            currentMoves ={currentMoves}/>
            )}
        </div>
        </>

    )
}
export default Game