import React from "react";

//import Button from "./Button";
import "./styles/keyboard.scss";
import "./styles/button.scss";

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.clickNumber = this.clickNumber.bind(this);
        this.handlerClickButton = this.handlerClickButton.bind(this);
    }

    clickNumber(e) {
        const valueClass = e.target.classList;
        const retorno = { value: e.target.innerText };

        if (valueClass.contains("number")) retorno["type"] = "number";
        else if (valueClass.contains("abs")) retorno["type"] = "abs";
        else if (valueClass.contains("ac")) retorno["type"] = "ac";
        else if (valueClass.contains("porc")) retorno["type"] = "porc";
        else if (valueClass.contains("operator")) retorno["type"] = "operator";
        else if (valueClass.contains("equal")) retorno["type"] = "equal";
        else if (valueClass.contains("del")) retorno["type"] = "del";
        else if (valueClass.contains("decimal")) retorno["type"] = "decimal";

        this.handlerClickButton(retorno);
    }

    handlerClickButton(e) {
        this.props.handlerClickButton(e);
    }

    render() {
        return (
            <button onClick={this.clickNumber} className={this.props.class}>
                {this.props.value}
            </button>
        );
    }
}

class Keyboard extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClickKeyboard = this.handlerClickKeyboard.bind(this);
    }

    handlerClickKeyboard(e) {
        this.props.handlerClickKeyboard(e);
    }

    render() {
        return (
            <div className="keyboard">
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator descr ac"
                    value="AC"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator abs"
                    value="+/-"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator porc"
                    value="%"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
                    value="/"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="7"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="8"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="9"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
                    value="x"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="4"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="5"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="6"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
                    value="-"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="1"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="2"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number"
                    value="3"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
                    value="+"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button number zero"
                    value="0"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button decimal"
                    value=","
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button del descr"
                    value="DEL"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button equal"
                    value="="
                />
            </div>
        );
    }
}

export default Keyboard;
