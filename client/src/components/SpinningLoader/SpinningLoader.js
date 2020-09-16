import React from "react";
import PropTypes from "prop-types";

import "./SpinningLoader.scss";

export default function SpinningLoader(props) {

  let size = ""
  if (props.isSmall){
    size = "is-small"
  }
  if (props.isMedium){
    size = "is-medium"
  }
  if (props.isLarge){
    size = "is-large"
  }

  const classes = `lds-ring ${size}`.trim()

  const loader = <div className={classes}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  if (props.isCentered){
    return (
      <div className="level">
        <div className="level-item">
          {loader}
        </div>
      </div>
    );
  }
  return loader
  
}

SpinningLoader.propTypes = {
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool,
  isCentered: PropTypes.bool
};

SpinningLoader.defaultProps = {
  isCentered: false, 
  isMedium: true
}
