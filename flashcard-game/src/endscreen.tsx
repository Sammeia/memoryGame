import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game'

type EndScreenProps = {
    onReset: () => void;
}
const EndScreen: React.FC<EndScreenProps> = ({onReset}) => {
    return (
        <div>
            <h1>You won! Congrats!</h1>
            <h3>Would you like to play again?</h3>
            <button onClick={onReset}>
                Play Again
            </button>
        </div>
)
}
export default EndScreen