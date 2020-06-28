import React from 'react';

import Button from './Button'
import './styles/keyboard.scss'

function Keyboard() {
    return (
        <div className="keyboard">
            <Button class="button operator descr" value="AC" />
            <Button class="button operator" value="+/-" />
            <Button class="button operator" value="%" />
            <Button class="button operator" value="/" />
            <Button class="button" value="7" />
            <Button class="button" value="8" />
            <Button class="button" value="9" />
            <Button class="button operator" value="x" />
            <Button class="button" value="4" />
            <Button class="button" value="5" />
            <Button class="button" value="6" />
            <Button class="button operator" value="-" />
            <Button class="button" value="1" />
            <Button class="button" value="2" />
            <Button class="button" value="3" />
            <Button class="button operator" value="+" />
            <Button class="button zero" value="0" />
            <Button class="button" value="." />
            <Button class="button descr" value="DEL" />
            <Button class="button equal" value="=" />
        </div>
    )
}

export default Keyboard;