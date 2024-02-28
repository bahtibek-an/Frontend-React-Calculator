import { useState } from "react";
import "./App.css";

const App = () => {
  const [result, setResult] = useState("");
  const getNumber = (e) => {
    setResult((state) => (state += e.target.name));
  };
  const Calc = () => {
    let action = ["+", "-", "*", "/", "=", "%"];

    let first_value = "";
    let second_value = "";
    for (let oper of action) {
      if (result.includes(oper)) {
        first_value = result.split(oper)[0];
        second_value = result.split(oper)[1];

        switch (oper) {
          case "+":
            setResult(
              (state) =>
                (state = String(
                  parseFloat(first_value) + parseFloat(second_value)
                ))
            );
            break;
          case "-":
            setResult(
              (state) =>
                (state = String(
                  parseFloat(first_value) - parseFloat(second_value)
                ))
            );
            break;
          case "*":
            setResult(
              (state) =>
                (state = String(
                  parseFloat(first_value) * parseFloat(second_value)
                ))
            );
            break;
          case "/":
            if (second_value === "0") {
              setResult((state) => (state = "Error"));
            } else {
              setResult(
                (state) =>
                  (state = String(
                    parseFloat(first_value) / parseFloat(second_value)
                  ))
              );
            }

            break;
          default:
            return;
        }
      }
    }
  };

  const clear = () => {
    setResult((state) => (state = ""));
  };
  const deleteResult = () => {
    setResult((state) => state.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="field">
          <input className="input-field" type="text" value={result} />
        </div>
        <div className="row">
          <button className="clear" onClick={clear}>
            clear
          </button>
          <button className="clear" onClick={deleteResult}>
            delete
          </button>
        </div>
        <div className="row">
          <button name="7" onClick={getNumber}>
            7
          </button>
          <button name="8" onClick={getNumber}>
            8
          </button>
          <button name="9" onClick={getNumber}>
            9
          </button>
          <button name="/" onClick={getNumber}>
            /
          </button>
        </div>
        <div className="row">
          <button name="4" onClick={getNumber}>
            4
          </button>
          <button name="5" onClick={getNumber}>
            5
          </button>
          <button name="6" onClick={getNumber}>
            6
          </button>
          <button name="*" onClick={getNumber}>
            *
          </button>
        </div>
        <div className="row">
          <button name="1" onClick={getNumber}>
            1
          </button>
          <button name="2" onClick={getNumber}>
            2
          </button>
          <button name="3" onClick={getNumber}>
            3
          </button>
          <button name="+" onClick={getNumber}>
            +
          </button>
        </div>
        <div className="row">
          <button name="0" onClick={getNumber}>
            0
          </button>
          <button name="." onClick={getNumber}>
            .
          </button>
          <button name="=" onClick={Calc}>
            =
          </button>
          <button name="-" onClick={getNumber}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
