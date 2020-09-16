import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";

import { format } from "date-fns";

export default function PostTableItem(props) {
  let statusContent = "Scheduled",
    statusClass = "is-info",
    deleted = false,
    posted = false,
    cancelled = false;

  if (props.status === "posted") {
    statusClass = "is-success";
    statusContent = "Posted";
    posted = true;
  }

  if (props.status === "cancelled") {
    statusClass = "is-warning";
    statusContent = "Cancelled";
    cancelled = true;
  }

  if (props.status === "deleted") {
    statusClass = "is-danger";
    statusContent = "Deleted";
    deleted = true;
  }

  let dateTimeInfo = null;
  if (props.when !== undefined && props.when !== null) {
    dateTimeInfo = (
      <p>
        <p>{format(props.when, "dd MMM yyyy")}</p>
        <p>{format(props.when, "HH:mm:ss")}</p>
      </p>
    );
  } else {
    dateTimeInfo = <p className="is-italic">No date given.</p>
  }

  return (
    <tr key={props.id}>
      <td>
        {props.network === "linkedin" ? (
          <span className="icon ">
            <i class="fab fa-linkedin-in"></i>
          </span>
        ) : (
          <span>U</span>
        )}
      </td>
      <td>
        <p className="is-ellipsed">{props.message}</p>
      </td>
      <td>{dateTimeInfo}</td>
      <td>
        <span class={`tag ${statusClass}`.trim()}>{statusContent}</span>
      </td>
      <td>
        <p className="buttons ">
          <Button
            isDanger
            title="Cancel Post"
            isDisabled={!(!deleted && !posted && !cancelled)}
          >
            <span className="icon is-small">
              <i className="fas fa-window-close"></i>
            </span>
          </Button>
          <Button
            isInfo
            title="Edit Post"
            isDisabled={!((!deleted && !posted) || cancelled)}
          >
            <span className="icon is-small">
              <i className="fas fa-edit"></i>
            </span>
          </Button>
          <Button
            isSuccess
            title="Manually Share now"
            isDisabled={!(!deleted && !posted)}
          >
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
  status: PropTypes.oneOf(["scheduled", "posted", "cancelled", "deleted"]),
};
