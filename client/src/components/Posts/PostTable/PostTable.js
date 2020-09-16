import React from 'react'
import PropTypes from 'prop-types'

import PostTableItem from '../PostTableItem/PostTableItem';

export default function PostTable(props) {


    const items = props.items.map(i => (<PostTableItem key={i._id} network={i.network} message={i.message} posted={i.posted} when={i.when}/>))


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
        <tbody>{items}</tbody>
      </table>
  );
}

PostTable.propTypes = {
    items: PropTypes.array.isRequired
}
