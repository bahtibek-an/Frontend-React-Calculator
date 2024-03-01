import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState('');

  const handleButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      clearDisplay();
    } else if (buttonText === '=') {
      calculateResult();
    } else {
      setCurrentNumber((prevNumber) => {
        if (buttonText === '0' && prevNumber === '0') {
          return '0';
        } else if (buttonText === '0' && /\s[+\-*/]\s/.test(prevNumber)) {
          return prevNumber + '0';
        } else {
          return prevNumber + buttonText;
        }
      });
    }
  };

  const updateDisplay = () => {
    // You can use resultElement to update your display in the UI
  };

  const clearDisplay = () => {
    setCurrentNumber('');
    updateDisplay();
  };

  const calculateResult = () => {
    try {
      const result = eval(currentNumber);
      setCurrentNumber(result.toString());
    } catch (error) {
      setCurrentNumber('Xato');
    }
  };

  return (
    <div className="all">
      <div className="ramka">
        <div className="input">
          <b className="num">{currentNumber}</b> <b className="operator"></b> <b className="num"></b>
        </div>
        <div className="sonlar">
          <div className="tugmalar">
            <br />
            <div className="birinchi_qator">
              {[1, 2, 3, '+'].map((buttonText) => (
                <button key={buttonText} onClick={() => handleButtonClick(buttonText)}>
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="ikkinchi_qator">
              {[4, 5, 6, '-'].map((buttonText) => (
                <button key={buttonText} onClick={() => handleButtonClick(buttonText)}>
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="uchinchi_qator">
              {[7, 8, 9, '*'].map((buttonText) => (
                <button key={buttonText} onClick={() => handleButtonClick(buttonText)}>
                  {buttonText}
                </button>
              ))}
            </div>
            <div className="uchinchi_qator">
              {['C', 0, '=', '/'].map((buttonText) => (
                <button
                  key={buttonText}
                  onClick={() => handleButtonClick(buttonText)}
                  style={
                    buttonText === 'C'
                      ? { backgroundColor: 'rgb(42, 165, 163)', color: 'white' }
                      : buttonText === '='
                      ? { backgroundColor: 'gold' }
                      : null
                  }
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;