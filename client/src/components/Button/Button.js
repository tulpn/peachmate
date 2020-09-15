import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {

    let isLoading = ""
    if (props.isLoading){
        isLoading = "is-loading"
    }

    
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
    if (props.isWhite){
        style = "is-white"
    }
    if (props.isLight){
        style = "is-light"
    }
    if (props.isDark){
        style = "is-dark"
    }
    if (props.isText){
        style = "is-text"
    }

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

    
    let fullwidth = ""
    if (props.isFullWidth){
        fullwidth = "is-fullwidth"
    }

    
    let outlined = ""
    if (props.isOutlined){
        outlined = "is-outlined"
    }

    
    let inverted = ""
    if (props.isInverted){
        inverted = "is-inverted"
    }

    
    let rounded = ""
    if (props.isRounded){
        rounded = "is-rounded"
    }

    
  return (
    <button disabled={props.isDisabled === true} className={`button ${isLoading} ${style} ${size} ${fullwidth} ${outlined} ${inverted} ${rounded}`}>
        {props.children}
    </button>
  );
}

Button.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isPrimary: PropTypes.bool,
    isLink: PropTypes.bool,
    isInfo: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isWarning: PropTypes.bool,
    isDanger: PropTypes.bool,
    isWhite: PropTypes.bool,
    isLight: PropTypes.bool,
    isDark: PropTypes.bool,
    isBlack: PropTypes.bool,
    isText: PropTypes.bool,
    isSmall: PropTypes.bool,
    isMedium: PropTypes.bool,
    isLarge: PropTypes.bool,
    isFullWidth: PropTypes.bool,
    isOutlined: PropTypes.bool,
    isInverted: PropTypes.bool,
    isRounded: PropTypes.bool,
    isDisabled: PropTypes.bool
}

Button.defaultProps = {
    isLoading: false,
    isPrimary: false,
    isLink: false,
    isInfo: false,
    isSuccess: false,
    isWarning: false,
    isDanger: false,
    isWhite: false,
    isLight: false,
    isDark: false,
    isBlack: false,
    isText: false,
    isLight: false,
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isFullWidth: false,
    isOutlined: false,
    isInverted: false,
    isRounded: false,
    isDisabled: false
}