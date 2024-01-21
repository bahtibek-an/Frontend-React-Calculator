import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");

  const clickHandier = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="calc">
          <input type="text" placeholder="" id="display" value={result} />
          <input
            type="button"
            value="C"
            className="buttons"
            onClick={clearDisplay}
          />
          <input
            type="button"
            value="("
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value=")"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="-"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="7"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="8"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="9"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="/"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="4"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="5"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="6"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="*"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="1"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="2"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="3"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="+"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="0"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="%"
            className="buttons"
            onClick={clickHandier}
          />
          <input
            type="button"
            value="="
            className="equal"
            onClick={calculate}
          />
        </div>
      </div>
    </div>
  );
};
export default App;
