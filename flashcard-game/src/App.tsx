import {useState} from 'react';
import './App.css';
import Game from './game';

/*
  The component that initiates gameplay
*/
function App() {

  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    gameStarted ?  (<Game/>) : (
      <div className="home-container">
        <h1 className="App-header">
          Memory Game!
        </h1>
        <div className="rules">
            <div>
              <h3 className="rules-header">Rules:</h3>
            </div>
          <p>The goal is to match all the cards in a row, without making any mistakes.</p>
          <p>Click a card to reveal it's content, and then click on it's match.</p>
          <p>Careful! If you click the wrong card, ALL THE CARDS will reset.</p>
          <p>The game tracks the current number of cards you've clicked, as well as the average moves
            needed to win across multiple games. Click the RESET GAME button at any time to start over on the
            current game, as well as reshuffle the cards. 
          </p>
          <p>Click the START GAME button below to begin.</p>
          <p>Good luck!</p>
        </div>
        <button className ="start-game-button" onClick = {()=>setGameStarted(true)}>
          Start the Game
        </button>
      </div>
    )
  );
}
export default App;
