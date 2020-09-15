import React from 'react'
import PropTypes from 'prop-types'
import "./MainMenu.scss"

import {Link} from 'react-router-dom'

export default function MainMenu(props) {
  return (
    <div className="mainMenu">
    <aside className="menu">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
        </ul>
        <p className="menu-label">
            Accounts
        </p>
        <ul className="menu-list">
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/connect">Connect</Link></li>
        </ul>
       
        </aside>
    </div>
  );
}

MainMenu.propTypes = {

}
