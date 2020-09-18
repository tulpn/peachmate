import React from "react";
import PropTypes from "prop-types";

export default function BreadCrumbs(props) {
  // Don't render a single breadcrumb.
  if (
    props.crumbs === undefined ||
    props.crumbs === null ||
    props.crumbs.length <= 1
  ) {
    console.log("no crumbs to show");
    return null;
  }
  return (
    <div className="breadcrumb " aria-label="breadcrumbs">
      <ul>
        {/* Link back to any previous steps of the breadcrumb. */}
        {props.crumbs.map(({ title, path }, key) =>
          key + 1 === props.crumbs.length ? (
            <li className="is-active" key={key}>
               <a  href={path}>
                {title}
              </a>
            </li>
          ) : (
            <li  key={key}>
              <a href={path}>
                {title}
              </a>
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
