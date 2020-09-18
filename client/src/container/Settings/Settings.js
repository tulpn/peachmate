import React from "react";
import PropTypes from "prop-types";

export default function SettingsContainer() {
  return (
    <div className="settingsCnt">
      <h1 className="title is-1">Settings</h1>
      <p className="subtitle is-5">
        Configure PeachMate to your liking, set your personal preferences and adjust post related defaults.
      </p>
    </div>
  );
}

SettingsContainer.propTypes = {};
