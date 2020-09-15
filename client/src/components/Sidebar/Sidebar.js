import React from 'react'
import PropTypes from 'prop-types'
import "./Sidebar.scss"

import MainMenu from "../MainMenu/MainMenu"
import DarkModeToggle from "react-dark-mode-toggle";

export default function Sidebar(props) {

  return (
    <div className="sidebar fullHeight">
       <div className="logoCnt">
           <figure className="image is-3by1">
               <img src="/logo.png" id="logo" />
           </figure>
       </div>
       <div className="main">
        <MainMenu />

       </div>
        <div className="bottom">
            <DarkModeToggle onChange={props.toggleTheme} checked={props.isDarkMode} size={40} />
        </div>

        
       
    </div>
  );
}

Sidebar.propTypes = {

}
