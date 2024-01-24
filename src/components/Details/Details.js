import React, { Component } from "react";
import './style.css'

class Details extends Component {
  render() {
    const { onClick, className, children } = this.props;

    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }
}

export default Details;
