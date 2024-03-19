import { useState } from 'react';
import './App.css';
import Button from './component/Button';

function App() {
  const [display, setDisplay] = useState('');

  const btnClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error input');
      }
    } else if (value === 'sin' || value === 'cos') {
      try {
        const result = Math[value](eval(display));
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error input');
      }
    } else if (value === '%') {
      try {
        const result = eval(display) / 100;
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error input');
      }
    } else if (value === 'sqrt') { 
      try {
        const result = Math.sqrt(eval(display));
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error input');
      }
    } else {
      setDisplay(display + value);
    }
  };
  return (
    <div className="container">
      <div className="kalkulyator">
        <div className="screen">
          <input type="text" value={display} readOnly />
        </div>
        <Button btnClick={btnClick} />
      </div>
    </div>
  );
}
export default App;
