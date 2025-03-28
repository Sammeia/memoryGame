import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';

function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    gameStarted ?  (<Game/>) : (
      <div className="home-container">
      <h1 className="App-header">
        Memory Game!
      </h1>
      <p className="rules">Rules:</p>
      <button className ="start-game-button" onClick = {()=>setGameStarted(true)}>
        Start the Game
      </button>
    </div>
    )
  );
}
export default App;
