import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App, { replaceCameWithSpaces } from './App';

test('Button has correct initial color', () => {
  // Рендеринг компонента
  render(<App />);

  // Поиск элемента по роли КНОПКА и тексту "CHANGE TO BLUE"
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  // Проверка фона кнопки что он красный
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });

  userEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('Button has correct initial text', () => {

});

test('Button turns blue when clicked', () => {
  // Рендеринг компонента
  render(<App />);

  // Поиск элемента по роли КНОПКА и тексту "CHANGE TO BLUE"
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  userEvent.click(button);

  expect(button.textContent).toBe('Change to Medium Violet Red');
});

test('Initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name:'Change to Midnight Blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  userEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  
  userEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // disable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
})

test('Disabled button has gray background and reverts to blue', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disabled button' });

  // to blue color
  userEvent.click(colorButton);

  // disable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  // re-enable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});

describe('spaces before came-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capitel letter', () => {
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCameWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})