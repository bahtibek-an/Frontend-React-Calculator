import { useState } from 'react';
import './App.css'
const App = () => {
 const [result, setResult] = useState('')
const getNumber = (e) => {
  setResult(state => state + e.target.name)
}
const getResult = () => {
  try {
    // eslint-disable-next-line
    setResult(eval(result))
    
  } catch (error) {
    setResult('error')
    
  }

}
const clear = () => {
  setResult('')
}
const deleteResult = () =>{
  setResult(state => state.slice(0, -1))
}

  return (
    <div className="App">
      <div className="calc-wrapper">
         <div className="field">
            <input className="input-field" type="text" value={result} />
         </div>
         <div className='row'>
          <button className='clear' onClick={clear}>clear</button>
          <button className='clear' onClick={deleteResult}>delete</button>
         </div>
        <div className="row">
          <button name='7' onClick={getNumber}>7</button>
          <button name='8' onClick={getNumber}>8</button>
          <button name='9' onClick={getNumber}>9</button>
          <button name='/' onClick={getNumber}>/</button>
        </div>
        <div className="row">
          <button name='4' onClick={getNumber}>4</button>
          <button name='5' onClick={getNumber}>5</button>
          <button name='6' onClick={getNumber}>6</button>
          <button name='*' onClick={getNumber}>*</button>
        </div>
        <div className="row">
          <button name='1' onClick={getNumber}>1</button>
          <button name='2' onClick={getNumber}>2</button>
          <button name='3' onClick={getNumber}>3</button>
          <button name='+' onClick={getNumber}>+</button>
        </div>
        <div className="row">
          <button name='0' onClick={getNumber}>0</button>
          <button name='.' onClick={getNumber}>.</button>
          <button name='=' onClick={getResult}>=</button>
          <button name='-' onClick={getNumber}>-</button>
        </div>
      </div>
    </div>
    
  );
};

export default App;
