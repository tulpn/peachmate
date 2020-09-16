import React from 'react'
import PropTypes from 'prop-types'
import Button from "../../Button/Button"

export default function PostTableItem(props) {
  return (
    
    <tr key={props.id}>
    <td>{props.network === "linkedin" ? <span className="icon ">
            <i class="fab fa-linkedin-in"></i>
          </span> : <span>U</span>}</td>
    <td>
      <p>{props.message}</p>
    </td>
    <td>date</td>
    <td>{props.posted === true ? <span class="tag is-success">Posted</span> : <span class="tag is-info">Scheduled</span> }</td>
    <td>
      <p className="buttons ">
        <Button isDanger title="Cancel Post">
          <span className="icon is-small">
            <i className="fas fa-window-close"></i>
          </span>
        </Button>
        <Button isInfo title="Edit Post">
          <span className="icon is-small">
            <i className="fas fa-edit"></i>
          </span>
        </Button>
        <Button isSuccess title="Manually Share now">
          <span className="icon is-small">
            <i className="fas fa-share"></i>
          </span>
        </Button>
      </p>
    </td>
  </tr>
  );
}

PostTableItem.propTypes = {
    network: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    posted: PropTypes.bool.isRequired,
}
