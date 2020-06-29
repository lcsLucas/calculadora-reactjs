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
        else if (valueClass.contains("operator")) retorno["type"] = "operator";

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
                    type="button"
                    class="button operator descr"
                    value="AC"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
                    value="+/-"
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button operator"
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
                    class="button"
                    value="."
                />
                <Button
                    handlerClickButton={this.handlerClickKeyboard}
                    type="button"
                    class="button descr"
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
