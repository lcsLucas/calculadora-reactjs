import React from "react";

import "./styles/display.scss";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="history">{ this.props.history.map(h => h.value).join("") }</div>
        <input disabled className="result" value={this.props.value} />
      </div>
    );
  }
}

export default Display;
