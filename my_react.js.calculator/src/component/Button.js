function Button({ btnClick }) {
  return (
    <div className="push">
      <button onClick={() => btnClick('7')}>7</button>
      <button onClick={() => btnClick('8')}>8</button>
      <button onClick={() => btnClick('9')}>9</button>
      <button onClick={() => btnClick('C')}>AC</button>
      <button onClick={() => btnClick('4')}>4</button>
      <button onClick={() => btnClick('5')}>5</button>
      <button onClick={() => btnClick('6')}>6</button>
      <button onClick={() => btnClick('/')}>/</button>
      <button onClick={() => btnClick('1')}>1</button>
      <button onClick={() => btnClick('2')}>2</button>
      <button onClick={() => btnClick('3')}>3</button>
      <button onClick={() => btnClick('*')}>*</button>
      <button onClick={() => btnClick('0')}>0</button>
      <button onClick={() => btnClick('-')}>-</button>
      <button onClick={() => btnClick('sqrt')}>√</button> 
      <button onClick={() => btnClick('+')}>+</button>
      <button onClick={() => btnClick('%')}>%</button>
      <button onClick={() => btnClick('sin')}>sin</button>
      <button onClick={() => btnClick('cos')}>cos</button> 
      <button onClick={() => btnClick('=')}>=</button>
    </div>
  );
}

export default Button;
