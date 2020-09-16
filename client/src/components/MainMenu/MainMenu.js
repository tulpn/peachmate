import React from 'react'
import PropTypes from 'prop-types'
import "./MainMenu.scss"

import {Link, Route} from 'react-router-dom'

export default function MainMenu(props) {
  return (
    <div className="mainMenu">
    <aside className="menu">
        <p className="menu-label">
            General
        </p>
        <ul className="menu-list">
            <Route exact path='/'>
                {({ match }) => (
                    <li>
                        <Link to='/'  className={match ? "is-active" : undefined}>Dashboard</Link>
                    </li>
                )}
            </Route>
            <Route exact path='/posts'>
                {({ match }) => (
                    <li>
                        <Link to='/posts'  className={match ? "is-active" : undefined}>Posts</Link>
                    </li>
                )}
            </Route>
            <Route exact path='/calendar'>
                {({ match }) => (
                    <li>
                        <Link to='/calendar'  className={match ? "is-active" : undefined}>Calendar</Link>
                    </li>
                )}
            </Route>
        </ul>
        <p className="menu-label">
            Accounts
        </p>
        <ul className="menu-list">
            <Route exact path='/settings'>
                {({ match }) => (
                    <li>
                        <Link to='/settings'  className={match ? "is-active" : undefined}>Settings</Link>
                    </li>
                )}
            </Route>
            <Route exact path='/connect'>
                {({ match }) => (
                    <li>
                        <Link to='/connect'  className={match ? "is-active" : undefined}>Connect</Link>
                    </li>
                )}
            </Route>
        </ul>
       
        </aside>
    </div>
  );
}

MainMenu.propTypes = {

}
