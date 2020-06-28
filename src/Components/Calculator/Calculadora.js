import React from "react";

import "./styles/calculator.scss";
import StatusBar from "./StatusBar";
import Header from "./Header";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggleNight: false };
    this.setToggle = this.setToggle.bind(this);
    this.getToggle = this.getToggle.bind(this);
  }

  setToggle(value) {
    this.setState({
      toggleNight: !!value
    });
  }

  getToggle() {
    return this.state.toggleNight;
  }

  render() {
    return (
      <div className={`calculadora${this.state.toggleNight ? " night" : ""}`}>
        <StatusBar />
        <Header getToggleChild={this.getToggle} setToggleChild={this.setToggle} />
        <Display />
        <Keyboard />
      </div>
    );
  }
}

export default Calculator;
