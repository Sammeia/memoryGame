import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game'

const EndScreen: React.FC = () => {
    const [playAgain, setPlayAgain] = useState(false)

    return (
        playAgain ? (<Game/>):
        (<div>
            <h1>You won! Congrats!</h1>
            <h3>Would you like to play again?</h3>
            <button onClick={() => setPlayAgain(true)}>
                Play Again
            </button>
        </div>
    )
)
}
export default EndScreen