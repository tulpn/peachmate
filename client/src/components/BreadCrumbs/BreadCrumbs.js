import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default function BreadCrumbs(props) {
  // Don't render a single breadcrumb.
  if (
    props.crumbs === undefined ||
    props.crumbs === null ||
    props.crumbs.length <= 1
  ) {
    return null;
  }
  return (
    <div className="breadcrumb " aria-label="breadcrumbs">
      <ul>
        {/* Link back to any previous steps of the breadcrumb. */}
        {props.crumbs.map(({ title, path }, key) =>
          key + 1 === props.crumbs.length ? (
            <li className="is-active" key={key}>
               <Link  to={path}>
                {title}
              </Link>
            </li>
          ) : (
            <li  key={key}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

BreadCrumbs.propTypes = {
  crumbs: PropTypes.array.isRequired,
};
