import React from 'react'
import PropTypes from 'prop-types'

import { Route } from "react-router-dom"

import BaseLayout from "../Layout/BaseLayout"

export default function BaseRoute({ component: Component, isDarkMode, toggleTheme,  ...rest }) {
  return (
    <Route
    {...rest}
    render={(props) => (
        <BaseLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
            <Component {...props} />
        </BaseLayout>
    )} />
  );
}

BaseLayout.propTypes = {

}
