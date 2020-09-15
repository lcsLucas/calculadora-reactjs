import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./styles/header.scss";
import { WiDaySunny } from "react-icons/wi";
import { WiMoonAltWaxingCrescent3 } from "react-icons/wi";
import { FaEllipsisH } from "react-icons/fa";
import { IoMdCalculator } from "react-icons/io";
import { GiMaterialsScience } from "react-icons/gi";
import { GiChart } from "react-icons/gi";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiTempHotLine } from "react-icons/ri";
import { BsClockHistory } from "react-icons/bs";

function DropDownOptions() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  /*
          <button type="button" className="btn-options">
          <FaEllipsisH />
        </button>
*/

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle className="btn-options">
        <FaEllipsisH />
      </DropdownToggle>
      <DropdownMenu right className="py-0">
        <DropdownItem title="Padrão">
          <IoMdCalculator />
          Padrão
          </DropdownItem>
        <DropdownItem title="Científica">
          <GiMaterialsScience />
          Científica
          </DropdownItem>
        <DropdownItem title="Gráfica">
          <GiChart />
          Gráfica
          </DropdownItem>
        <DropdownItem title="Programador">
          <BsCodeSlash />
          Programador
          </DropdownItem>
        <DropdownItem title="Moeda">
          <AiOutlineDollarCircle />
          Moeda
        </DropdownItem>
        <DropdownItem title="Temperatura">
          <RiTempHotLine />
          Temperatura
        </DropdownItem>
        <DropdownItem title="Tempo">
          <BsClockHistory />
          Tempo
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

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
          {this.props.getToggleChild() ? <WiDaySunny /> : <WiMoonAltWaxingCrescent3 />}

        </button>
        <DropDownOptions />
      </div>
    );
  }
}

export default Header;
