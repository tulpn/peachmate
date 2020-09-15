import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from "../components/Sidebar/Sidebar"

import "./BaseLayout.scss"


export default function BaseLayout(props) {
  return (
    <div className="appCnt fullHeight">
        <div className="sidebarCnt fullHeight">
            <Sidebar toggleTheme={props.toggleTheme} isDarkMode={props.isDarkMode} />
        </div>
        <div className="contentCnt fullHeight">
            <div className="container">
            {props.children}

            </div>
        </div>
    </div>
   
  );
}

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired
}
