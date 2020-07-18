import React from "react";

import "./styles/calculator.scss";
import StatusBar from "./StatusBar";
import Header from "./Header";
import Display from "./Display";
import Keyboard from "./Keyboard";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleNight: false,
            lastDigit: 0,
            resultValue: 0,
            queueCalc: [],
        };

        this.setToggle = this.setToggle.bind(this);
        this.getToggle = this.getToggle.bind(this);
        this.handlerClickCalculadora = this.handlerClickCalculadora.bind(this);
        this.execCalc = this.execCalc.bind(this);
    }

    setToggle(value) {
        this.setState({
            toggleNight: !!value,
        });
    }

    getToggle() {
        return this.state.toggleNight;
    }

    execCalc() {
        let total = 0;

        for (let i = 0, j = 1; i < this.state.queueCalc.length - 1; i++, j++) {
            console.log(this.state.queueCalc[i]);
            console.log(this.state.queueCalc[j]);
            
        }

    }

    logicalOperation(e) {
        if (e.type === "number") {
            let flagInsert = true;

            if (
                this.state.lastDigit &&
                this.state.lastDigit.type === "operator"
            )
                flagInsert = false;

            this.setState((state) => ({
                resultValue:
                    (parseInt(state.resultValue) && flagInsert
                        ? state.resultValue
                        : "") +
                    "" +
                    parseInt(e.value),
            }));
        } else if (e.type === "equal") {
            this.execCalc();
        } else if (e.type === "operator") {
            let flagInsert = true;

            // tem historico
            if (
                this.state.lastDigit &&
                this.state.lastDigit.type === "operator"
            )
                flagInsert = false;

            // número válido?
            if (parseInt(this.state.resultValue)) {
                if (flagInsert) {
                    this.setState(
                        (state) => ({
                            // adicionar o númer oque está no display
                            queueCalc: state.queueCalc.concat({
                                type: "number",
                                value: state.resultValue,
                            }),
                        }),
                        () => {
                            // adiciona o operador atual
                            this.setState(
                                (state) => ({
                                    queueCalc: state.queueCalc.concat({
                                        type: "operator",
                                        value: e.value,
                                    }),
                                }),
                                () => {
                                    this.execCalc();
                                }
                            );
                        }
                    );
                } else {
                    // só atualiza a uma operação na queue de operações
                    const queueTemp = this.state.queueCalc;
                    queueTemp[queueTemp.length - 1] = {
                        type: "operator",
                        value: e.value,
                    };

                    this.setState({
                        queueCalc: queueTemp,
                    });
                }
            }
        }

        this.setState({
            lastDigit: e,
        });

        /*
        else if (e.type === "operator") {
            let flagInsert = true;

            // tem historico
            if (this.state.queueCalc.length) {
                const lastQueue = this.state.queueCalc[
                    this.state.queueCalc.length - 1
                ];

                // ultima ação já um operador
                if (lastQueue.type === "operator") flagInsert = false;
            }

            // número válido?
            if (parseInt(this.state.resultValue)) {
                // adiciona o número do display e o operador na queue de operações
                if (flagInsert) {
                    this.setState(
                        (state) => ({
                            queueCalc: state.queueCalc.concat({
                                type: "number",
                                value: state.resultValue,
                            }),
                        }),
                        () => {
                            // adiciona o perador atual
                            this.setState(
                                (state) => ({
                                    queueCalc: state.queueCalc.concat({
                                        type: "operator",
                                        value: e.value,
                                    }),
                                }),
                                () => {
                                }
                            );
                        }
                    );
                } else {

                    // só atualiza a uma operação na queue de operações
                    const queueTemp = this.state.queueCalc;
                    queueTemp[queueTemp.length - 1] = {
                        type: "operator",
                        value: e.value,
                    };

                    this.setState({
                        queueCalc: queueTemp,
                    });
                    
                }
            }
        }*/
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
                <Display
                    history={this.state.queueCalc}
                    value={this.state.resultValue}
                />
                <Keyboard handlerClickKeyboard={this.handlerClickCalculadora} />
            </div>
        );
    }
}

export default Calculator;
