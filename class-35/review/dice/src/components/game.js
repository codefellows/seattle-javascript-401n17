import React, {useContext, useEffect} from 'react';

import {GameContext} from '../context/game-context.js'
import Dice from './dice.js';
import Bankroll from './bankroll.js';

function Game(props) {
  const theContext = useContext(GameContext);

  // Send this to the dice component as a prop
  // The dice will call this after each roll
  const checkWin = (total) => {
    if(total === 11 ) {
      theContext.increaseBankroll(75);
    } else {
      theContext.decreaseBankroll(5);
    }
  }

  useEffect( () => {
    theContext.setInitialBankroll(props.initialBankroll);
  }, [props.initialBankroll]); // <= Dependency Array

  return (
    <>
      <Dice handler={checkWin} />
      <Bankroll />
    </>
  );
}

export default Game;
