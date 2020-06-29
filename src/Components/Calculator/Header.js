import React from "react";

import "./styles/header.scss";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
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
          { this.props.getToggleChild() ? <WiDaySunny /> : <WiMoonAltWaxingCrescent3 /> }
          
        </button>
        <button type="button" className="btn-options">
          <FaEllipsisH />
        </button>
      </div>
    );
  }
}

export default Header;
