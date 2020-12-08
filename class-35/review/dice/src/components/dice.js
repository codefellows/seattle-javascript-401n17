
import React, { useContext, useState } from 'react';
import { GameContext } from '../context/game-context.js'

export const rollOneDie = () => Math.floor(Math.random() * 6) + 1;

function Dice(props) {

  const [d1, setD1] = useState(null);
  const [d2, setD2] = useState(null);
  const [total, setTotal] = useState(null);
  const gameContext = useContext(GameContext);

  const roll = () => {

    let first = rollOneDie();
    let second = rollOneDie();
    let sum = first + second;
    props.handler(sum);

    setD1(first);
    setD2(second);
    setTotal(sum);
  }


  // data[testId=diceTotal]
  return (
    <div>
      <h2>
         <span>{d1}</span> +
         <span>{d2}</span> =
         <span data-testid="diceTotal">{total}</span>
       </h2>

      Dice
      {
        gameContext.bankroll > 0
          ? <button data-testid="roller" onClick={roll}>Roll Me</button>
          : null
      }

    </div>
  );
}

export default Dice;
