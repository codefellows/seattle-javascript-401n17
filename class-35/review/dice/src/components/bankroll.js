import React, {useContext} from 'react';

// Brings in the react.createContext() thing
import {GameContext} from '../context/game-context.js'

function Bankroll() {
  const context = useContext(GameContext);  // this is a .Consumer

  return (
    <h1>
      Your Bankroll Is: $
      <span data-testid="bankroll">{context.bankroll}</span>
    </h1>
  );
}

export default Bankroll;
