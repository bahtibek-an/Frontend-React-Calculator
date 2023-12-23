import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const buttons = [
    ["C", "D", ".", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    ["00", "0", "="],
  ];

  return (
    <div className="container">
      <div className="calculator-card">
        <form action="calculator">
          <div className="display">
            <input type="text" value={value} />
          </div>
          {buttons.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((buttonValue, columnIndex) => (
                <input
                  key={columnIndex}
                  type="button"
                  value={buttonValue}
                  className={buttonValue === "=" ? "equals" : ""}
                  onClick={() => {
                    if (buttonValue === "C") {
                      setValue("");
                    } else if (buttonValue === "D") {
                      setValue(value.slice(0, -1));
                    } else if (buttonValue === "=") {
                      try {
                        setValue(eval(value));
                      } catch (error) {
                        setValue("Error");
                      }
                    } else {
                      setValue(value + buttonValue);
                    }
                  }}
                />
              ))}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
