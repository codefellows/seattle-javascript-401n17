import GameContext from './context/game-context.js';
import Game from './components/game.js';

function App(props) {
  return (
    <GameContext>
      <Game {...props} />
    </GameContext>
  );
}

export default App;
