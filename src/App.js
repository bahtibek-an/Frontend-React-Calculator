import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue(prevValue => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={displayValue} readOnly />
      <div className="buttons">
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
