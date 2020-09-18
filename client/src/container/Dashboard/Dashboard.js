import React from "react";
import PropTypes from "prop-types";

export default function DashboardContainer() {
  return (
    <div className="dashboardCnt">
      <h1 className="title is-1">Dashboard</h1>
      <p className="subtitle is-5">
        Quick overview of all your posts, upcoming items and how they have performed.
      </p>
    </div>
  );
}

DashboardContainer.propTypes = {};
