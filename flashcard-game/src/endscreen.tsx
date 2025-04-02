import React from 'react';
import './endscreen.css';

type EndScreenProps = {
    onReset: () => void;
}

/*
    Component that represents the end-screen of the game 
    @param {function} onReset = The function that executes if the user chooses to play again.
*/
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
export default EndScreen;