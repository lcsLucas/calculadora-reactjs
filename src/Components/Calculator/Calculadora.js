import React from "react";

import "./styles/calculator.scss";
import StatusBar from "./StatusBar";
import Header from "./Header";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggleNight: false, resultValue: 0, queueCalc: [] };

        this.setToggle = this.setToggle.bind(this);
        this.getToggle = this.getToggle.bind(this);
        this.handlerClickCalculadora = this.handlerClickCalculadora.bind(this);
    }

    setToggle(value) {
        this.setState({
            toggleNight: !!value,
        });
    }

    getToggle() {
        return this.state.toggleNight;
    }

    logicalOperation(e) {
        if (e.type === "number") {
            if (!this.state.queueCalc[0]) {
                this.setState({
                    resultValue: (this.state.resultValue ? this.state.resultValue : "") + "" + parseInt(e.value),
                });
            }
        } else if (e.type === "operator") {

        }
    }

    handlerClickCalculadora(e) {
        this.logicalOperation(e);
    }

    render() {
        return (
            <div
                className={`calculadora${
                    this.state.toggleNight ? " night" : ""
                }`}
            >
                <StatusBar />
                <Header
                    getToggleChild={this.getToggle}
                    setToggleChild={this.setToggle}
                />
                <Display value={this.state.resultValue} />
                <Keyboard handlerClickKeyboard={this.handlerClickCalculadora} />
            </div>
        );
    }
}

export default Calculator;
