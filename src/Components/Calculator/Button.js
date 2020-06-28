import React from 'react';

import './styles/button.scss';

function Button(props) {
    return (
    <button className={props.class}>{props.value}</button>
    );
}

export default Button;