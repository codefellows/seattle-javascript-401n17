import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import App from '../App';

test('if there is no bankroll, hide the button', () => {
  render(<App initialBankroll={0} />);
  const roller = screen.queryByTestId('roller');
  expect(roller).toBeNull();
})

test('pressing the button shows the result of a roll', () => {
  render(<App initialBankroll={100} />);
  const roller = screen.getByTestId('roller');
  const total = screen.getByTestId('diceTotal');
  fireEvent.click(roller);
  let displayTotal = parseInt(total.textContent, 10);
  expect(displayTotal).toBeGreaterThan(1);
});

test('calculates a win or a loss properly', () => {
  // render app with a bankroll
  render(<App initialBankroll={100} />);
  // click the button
  const roller = screen.getByTestId('roller');
  fireEvent.click(roller);
  // inspect the balance
  const total = parseInt(screen.getByTestId('diceTotal').textContent, 10);
  const bankroll = parseInt( screen.getByTestId('bankroll').textContent, 10);
  if( total === 11)  {
    expect(bankroll).toBeGreaterThan(100);
  } else {
    expect(bankroll).toBeLessThan(100);
  }
  console.log('Bankroll', bankroll);
     // should be higher or lower, based on the number
});
