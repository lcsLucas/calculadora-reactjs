import React from "react";

import "./styles/header.scss";
import { WiDaySunny } from "react-icons/wi";
import { FaEllipsisH } from "react-icons/fa";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {    
    this.props.setToggleChild(!this.props.getToggleChild());
  }

  render() {
    return (
      <div className="header">
        <button
          type="button"
          className="toggle-night"
          onClick={this.clickHandler}
        >
          <WiDaySunny />
        </button>
        <button type="button" className="btn-options">
          <FaEllipsisH />
        </button>
      </div>
    );
  }
}

/*
function Header() {
  return (
    <div className="header">
      <button type="button" className="toggle-night" onClick={teste}>
        <WiDaySunny />
      </button>
      <button type="button" className="btn-options">
        <FaEllipsisH />
      </button>
    </div>
  );
}
*/

export default Header;
