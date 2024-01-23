import React, { Component } from "react";
import Details from "../Details/Details";
import './style.css';

class Header extends Component {
  render() {
    const { clear, backspace, calc, handleClick } = this.props;

    return (
      <div className="calculator-buttons">
        <Details onClick={clear} className="orange clear span-2">
          AC
        </Details>
        <Details onClick={backspace} className="orange">
          &larr;
        </Details>
        <Details onClick={() => handleClick("/")} className="orange">
          &divide;
        </Details>
        <Details onClick={() => handleClick("7")} className="btn">
          7
        </Details>
        <Details onClick={() => handleClick("8")} className="btn">
          8
        </Details>
        <Details onClick={() => handleClick("9")} className="btn">
          9
        </Details>
        <Details onClick={() => handleClick("*")} className="btn">
          *
        </Details>
        <Details onClick={() => handleClick("4")} className="btn">
          4
        </Details>
        <Details onClick={() => handleClick("5")} className="btn">
          5
        </Details>
        <Details onClick={() => handleClick("6")} className="btn">
          6
        </Details>
        <Details onClick={() => handleClick("-")} className="orange">
          -
        </Details>
        <Details onClick={() => handleClick("1")} className="btn">
          1
        </Details>
        <Details onClick={() => handleClick("2")} className="btn">
          2
        </Details>
        <Details onClick={() => handleClick("3")} className="btn">
          3
        </Details>
        <Details onClick={() => handleClick("+")} className="orange">
          +
        </Details>
        <Details onClick={() => handleClick("0")} className="btn span-3">
          0
        </Details>
        <Details onClick={calc} className="orange equal">
          =
        </Details>
      </div>
    );
  }
}

export default Header;
