import React from "react";

import "./styles/display.scss";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="history">10 + 10</div>
        <div className="result">{this.props.value}</div>
      </div>
    );
  }
}

export default Display;
