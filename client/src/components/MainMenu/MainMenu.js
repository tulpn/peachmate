import React from 'react'
import PropTypes from 'prop-types'
import "./MainMenu.scss"

export default function MainMenu(props) {
  return (
    <div className="mainMenu">
    <aside className="menu">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Posts</a></li>
            <li><a>Calendar</a></li>
        </ul>
        <p className="menu-label">
            Accounts
        </p>
        <ul className="menu-list">
            <li><a>Settings</a></li>
            <li><a>Connect</a></li>
        </ul>
       
        </aside>
    </div>
  );
}

MainMenu.propTypes = {

}
