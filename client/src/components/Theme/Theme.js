import React from 'react'
import PropTypes from 'prop-types'

export default function Theme(props) {

    if (props.isDarkMode){
        return <div className="darkTheme">{props.children}</div>
    } else {
        return <div className="lightTheme">{props.children}</div>
    }
 
}

Theme.propTypes = {

}
