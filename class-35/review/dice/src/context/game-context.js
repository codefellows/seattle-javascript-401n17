import React, {useState} from 'react';

export const GameContext = React.createContext();

function GameContextProvider(props) {

  const [bankroll, setBankRoll] = useState(0);

  // This is "safe" because we have the chance here
  // to sanitize the incoming amount
  // What if someone sent in "puppies" for the amount?
  const setInitialBankroll = (amount) => {
    setBankRoll(parseInt(amount, 10));
  };

  const increaseBankroll = (amount) => {
    setBankRoll( bankroll + amount);
  }

  const decreaseBankroll = (amount) => {
    setBankRoll(bankroll - amount);
  }

  const ctx = {
    bankroll,
    setInitialBankroll,
    increaseBankroll,
    decreaseBankroll,
  }

  return (
    <GameContext.Provider value={ctx}>
      {props.children}
    </GameContext.Provider>
  )

}

export default GameContextProvider;
