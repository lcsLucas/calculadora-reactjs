import React from "react";

import "./styles/relogio.scss";

class Relogio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="relogio">
        {("0" + (this.state.time.getHours())).slice(-2)}<span>:</span>{("0" + (this.state.time.getMinutes())).slice(-2)}
      </div>
    );
  }
}

export default Relogio;
