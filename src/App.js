import { useState } from 'react';
import './App.css';

export function replaceCameWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1').trim();
}

function App() {
  const [buttonColor, setToggleBtnText] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <button
        style={{
          backgroundColor: disabled
            ? 'gray'
            : buttonColor === 'MidnightBlue'
            ? 'blue'
            : 'red',
          color: 'white',
        }}
        onClick={() => setToggleBtnText(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCameWithSpaces(newButtonColor)}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={disabled}
        onChange={() => setDisabled((prev) => !prev)}
        aria-checked={disabled}
      />
      <label htmlFor="disable-button-checkbox">Disabled button</label>
    </div>
  );
}

export default App;
