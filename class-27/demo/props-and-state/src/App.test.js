import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Kid from './kid';

test('renders the app', () => {
  render(<App />);
  const petElement = screen.getByText(/Rocky/i);
  expect(petElement).toBeInTheDocument();
});

test('can show the balance', () => {
  render(<App />);
  const balanceDisplay = screen.getByTestId("balanceHeader");
  expect(balanceDisplay).toHaveTextContent(100);
});


test('can change the balance', () => {
  render(<App />);
  const balanceDisplay = screen.getByTestId("balanceHeader");
  const input = screen.getByTestId("moneyInput");
  const form = screen.getByTestId("spendForm");
  fireEvent.change(input, {target: { value: 10 }});
  fireEvent.submit(form);
  expect(balanceDisplay).toHaveTextContent(90);
});

test('can show a name', () => {
  render(<Kid name="Zach" />);
  const name = screen.getByTestId('kidName');
  expect(name).toHaveTextContent('Zach');
});
