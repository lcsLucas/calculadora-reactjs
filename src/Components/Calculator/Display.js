import React from "react";

import "./styles/display.scss";

class Display extends React.Component {
  render() {

    return (
      <div className="display">
        <div className="history">
          {this.props.history.reduce(
            (acumulador, h, i) =>
              !!acumulador[acumulador.length - 1] && acumulador[acumulador.length - 1] === "=" ? [h.value] : acumulador.concat(h.value),
            []
          ).map ((v, i) => <span key={i}>{v}</span>)}
        </div>
        <input disabled className="result" value={this.props.value} />
      </div>
    );
  }
}

export default Display;
