import React, { Component } from "react";
import "./App.css";
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  clear = () => {
    this.setState({ result: "" });
  };

  backspace = () => {
    this.setState({ result: this.state.result.slice(0, -1) });
  };

  calc = () => {
    try {
      this.setState({
        result: Number(eval(this.state.result).toString()).toFixed(2),
      });
    } catch (error) {
      this.setState({ result: "Invalid format" });
    }
  };

  handleClick = (value) => {
    this.setState({ result: this.state.result.concat(value) });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="calculator">
            <input
              type="text"
              className="calc-numbers"
              value={this.state.result}
            />
            <Header
              clear={this.clear}
              backspace={this.backspace}
              calc={this.calc}
              handleClick={this.handleClick}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
