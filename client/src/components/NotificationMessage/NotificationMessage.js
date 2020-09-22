import React from "react";
import PropTypes from "prop-types";

export default function NotificationMessage(props) {
    let style = ""
    if (props.isPrimary){
        style = "is-primary"
    }
    if (props.isLink){
        style = "is-link"
    }
    if (props.isInfo){
        style = "is-info"
    }
    if (props.isSuccess){
        style = "is-success"
    }
    if (props.isWarning){
        style = "is-warning"
    }
    if (props.isDanger){
        style = "is-danger"
    }
    
    if (props.isLight){
        style += " is-light"
    }
    
  return (
    <div className={`notification ${style}`}>
      <button className="delete" onClick={props.onDelete}></button>
      {props.children}
    </div>
  );
}

NotificationMessage.propTypes = {
    children: PropTypes.element.isRequired,
    isPrimary: PropTypes.bool,
    isLink: PropTypes.bool,
    isInfo: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isWarning: PropTypes.bool,
    isDanger: PropTypes.bool,
    isLight: PropTypes.bool,
    onDelete: PropTypes.func.isRequired
};

NotificationMessage.defaultProps = {
    isPrimary: false,
    isLink: false,
    isInfo: false,
    isSuccess: false,
    isWarning: false,
    isDanger: false,
    isLight: false
}
