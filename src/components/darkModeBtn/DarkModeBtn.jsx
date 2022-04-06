import React from 'react';
import './DarkModeBtn.scss';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs'
import { IconContext } from 'react-icons';

function DarkModeBtn(props) {
    const handleClick = () => {
        props.setDarkMode(value => !value)
    }
    return (
        <div className='switch-container'>
            <span style={props.darkmode ? { color: '#cfdbd5' } : { color: '#242423' }}>dark mode</span>
            <div id="theme-switch">
                <IconContext.Provider value={{ size: 30 }}>
                    {props.darkmode ? <BsToggleOn onClick={handleClick} /> : <BsToggleOff onClick={handleClick} />}
                </IconContext.Provider>

            </div>
        </div>
    )
}

export default DarkModeBtn