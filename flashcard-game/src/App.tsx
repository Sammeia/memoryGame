import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [showGameBoard, setShowGameBoard] = useState(false);

  const handleStartGame = () => {
    setShowGameBoard(true)
  }

  return (
    <div className="app-container">
      <header className="App-header">
        <p>
          Memory Game!
        </p>
        <p>
          Rules:
        </p>
      </header>
      <button className ="start-game-button" onClick = {handleStartGame}>
        Start the Game
      </button>
    </div>
  );
}

export default App;
