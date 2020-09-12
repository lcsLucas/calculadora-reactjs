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

  execCalc(operator) {
    let total = 0;

    if (operator === "equal") {
      console.log("equal");
    } else {
      if (this.state.queueCalc.length > 2) {
        console.log(this.state.queueCalc);
        for (let i = 2; i < this.state.queueCalc.length - 1; i++) {
          if (i % 2 !== 0) continue;

          let number1 = this.state.queueCalc[i - 2].value,
            number2 = this.state.queueCalc[i].value;

          // arrumar esse calculo
          // ideia => colocar na queue o "=" e acrescentar o "total", fazer as operações apartir do ultimo "=" na queue

          switch (operator) {
            case "+":
              total += number1 + number2;
              break;
            case "-":
              total += number1 - number2;
              break;
            case "x":
              total += number1 * number2;
              break;
            case "/":
              total += number1 / number2;
              break;
          }

          this.setState({
            resultValue: total,
          });

          /*
          this.setState((state) => ({
            resultValue: total,
            queueCalc: state.queueCalc.concat({ type: "total", value: total }),
          }));
          */
        }
      }
    }
  }

  logicalOperation(e) {
    if (e.type === "number") {
      let flagInsert = true;

      if (this.state.lastDigit && this.state.lastDigit.type !== "number")
        flagInsert = false;

      this.setState((state) => ({
        queueCalc: this.state.lastDigit.type === "equal" ? [] : state.queueCalc,
        resultValue:
          (parseInt(state.resultValue) && flagInsert ? state.resultValue : "") +
          "" +
          parseInt(e.value),
      }));
    } else if (e.type === "equal") {
      if (
        !!this.state.queueCalc[this.state.queueCalc.length - 1] &&
        this.state.queueCalc[this.state.queueCalc.length - 1].type === "equal"
      ) {
        //substitui o número numero adiciona na queue pelo o que está no display

        this.setState((state) => {
          const queueTemp = state.queueCalc;
          queueTemp[queueTemp.length - 2] = {
            type: "number",
            value: state.resultValue,
          };

          return { queueCalc: queueTemp };
        });
      } else {
        this.setState(
          (state) => ({
            queueCalc: state.queueCalc.concat({
              type: "number",
              value: parseInt(state.resultValue),
            }),
          }),
          () => {
            //adiciona o = apertado na queue
            this.setState(
              (state) => ({
                queueCalc: state.queueCalc.concat(e),
              }),
              () => {
                this.execCalc(e.value);
              }
            );
          }
        );
      }
    } else if (e.type === "del") {
      this.setState({
        resultValue: 0,
      });
    } else if (e.type === "operator") {
      let flagInsert = true;

      // tem historico
      if (this.state.lastDigit && this.state.lastDigit.type === "operator")
        flagInsert = false;

      if (flagInsert) {
        // adiciona o número atual na queue
        this.setState(
          (state) => ({
            queueCalc: state.queueCalc.concat({
              type: "number",
              value: parseInt(state.resultValue),
            }),
          }),
          () => {
            //adiciona o operador apertado na queue
            this.setState(
              (state) => ({
                queueCalc: state.queueCalc.concat(e),
              }),
              () => {
                this.execCalc(e.value);
              }
            );
          }
        );
      } else {
        //atualiza a ultima operação que está na queue

        this.setState((state) => {
          const queueTemp = state.queueCalc;
          queueTemp[queueTemp.length - 1] = e;

          return { queueCalc: queueTemp };
        });
      }
    }

    this.setState({
      lastDigit: e,
    });
  }

  handlerClickCalculadora(e) {
    this.logicalOperation(e);
  }

  render() {
    return (
      <div className={`calculadora${this.state.toggleNight ? " night" : ""}`}>
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
