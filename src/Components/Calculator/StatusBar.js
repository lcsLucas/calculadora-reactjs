import React from 'react';
import { FaSignal, FaWifi, FaBatteryFull } from "react-icons/fa";
import Relogio from './Relogio'

import './styles/statusBar.scss'

function StatusBar() {
    return (
        <div className="statusBar">
            <Relogio />
            <div className="icons-status">
                <FaSignal />
                <FaWifi />
                <FaBatteryFull />
            </div> 
        </div>
    )
}

export default StatusBar;