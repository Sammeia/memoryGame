import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game';

function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    gameStarted ?  (<Game/>) : (
      <div className="home-container">
      <header className="App-header">
        <p>Memory Game!</p>
        <p>Rules:</p>
      </header>
      <button className ="start-game-button" onClick = {()=>setGameStarted(true)}>
        Start the Game
      </button>
    </div>
    )
  );
}
export default App;
