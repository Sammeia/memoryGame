import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';

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
    return (
        <div className = "card-grid">
            {cardArray.map((card)=>(
                <Card key={card.id} {...card}/>
            ))}
        </div>
    )
}

export default GameBoard