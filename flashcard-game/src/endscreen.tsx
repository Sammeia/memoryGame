import React, {useState} from 'react';
import logo from './logo.svg';
import './endscreen.css';
import Game from './game'

type EndScreenProps = {
    onReset: () => void;
}
const EndScreen: React.FC<EndScreenProps> = ({onReset}) => {
    return (
        <div className = "end-screen">
            <h1 className = "congrats-message">You won! Congrats!</h1>
            <h3>Would you like to play again?</h3>
            <button className = "reset" onClick={onReset}>
                Play Again
            </button>
        </div>
)
}
export default EndScreen