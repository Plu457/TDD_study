import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('minus button has correct text', () => {
  render(<App />);

  const minusButtonElem = screen.getByTestId('minus-button');
  expect(minusButtonElem).toHaveTextContent('-');
});

test('plus button has correct text', () => {
  render(<App />);

  const plusButtonElem = screen.getByTestId('plus-button');
  expect(plusButtonElem).toHaveTextContent('+');
});

test('When the + button is pressed, the counter changes to 1', () => {
  render(<App />);

  const btnElem = screen.getByTestId('plus-button');
  fireEvent.click(btnElem);

  const counterElem = screen.getByTestId('counter');
  expect(counterElem).toHaveTextContent('1');
});

test('When the - button is pressed, the counter changes to -1', () => {
  render(<App />);

  const btnElem = screen.getByTestId('minus-button');
  fireEvent.click(btnElem);

  const counterElem = screen.getByTestId('counter');
  expect(counterElem).toHaveTextContent('-1');
});

test('on/off button has blue color', () => {
  render(<App />);

  const btnElem = screen.getByTestId('on/off-button');
  expect(btnElem).toHaveStyle({ backgroundColor: 'blue' });
});

test('Prevent th -, + button from being pressed when the on/off button is clicked', () => {
  render(<App />);

  const onOffBtnElem = screen.getByTestId('on/off-button');
  fireEvent.click(onOffBtnElem);

  const plusButtonElem = screen.getByTestId('plus-button');
  expect(plusButtonElem).toBeDisabled();
});
