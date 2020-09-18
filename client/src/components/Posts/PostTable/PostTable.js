import React from "react";
import PropTypes from "prop-types";

import PostTableItem from "../PostTableItem/PostTableItem";
import SpinningLoader from "../../SpinningLoader/SpinningLoader";
import Post from "../../../models/Posts/post";

export default function PostTable(props) {

  const items = props.items.map((i) => (<PostTableItem
    key={i.id}
    network={i.network}
    message={i.message}
    status={i.status}
    when={i.when}
  />));

  let content = null;
    if (items.length !== 0){
      content = items;
    }

  if (props.loading) {
    content = (
      <tr key="loading">
        <td rowSpan="1" colSpan="5">
          <SpinningLoader isMedium isCentered />
        </td>
      </tr>
    );
  }

  if (props.loading === false && items.length === 0) {
    content = (
      <tr key="nodata">
        <td rowSpan="1" colSpan="5">
          <p className="has-text-centered">No data to show.</p>
        </td>
      </tr>
    );
  }

  return (
    <table className="table is-striped is-hoverable is-fullwidth is-bordered is-narrow">
      <thead>
        <tr>
          <th>Network</th>
          <th>Message</th>
          <th>Scheduled</th>
          <th>Posted</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
}

PostTable.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

PostTable.defaultProps = {
  loading: false,
};
