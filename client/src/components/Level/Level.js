import React from 'react'
import PropTypes from 'prop-types'

export default function Level(props) {
  return (
    <div className="level">
        <div className="level-left">
            {props.children}
        </div>
        <div className="level-right">
            {props.actions}
        </div>
    </div>
  );
}

Level.propTypes = {
    children: PropTypes.element.isRequired,
    actions: PropTypes.element    
}
