import React from "react";
import PropTypes from "prop-types";
import "./FieldComponent.scss";

export default function FieldComponent(props) {
  const {
    children,
    input,
    label,
    type,
    placeholder,
    id,
    required,
    disabled,
    meta: { touched, error, warning },
  } = props;

  let classType = "input"; // set default to input

  let asterisk = null;
  if (required === true) {
    asterisk = <span className="asterisk">*</span>;
  }
  let before = (
    <label className="label" htmlFor={id}>
      {label}
      {asterisk}
    </label>
  );
  let after = (
    <label className="label" htmlFor={id}>
      {label}
      {asterisk}
    </label>
  );
  if (type === "checkbox" || type === "radio") {
    before = "";
  } else {
    after = "";
  }

  if (type === "checkbox") {
    classType = "checkbox";
  }

  if (type === "radio") {
    classType = "radio";
  }

  if (type === "button") {
    classType = "button";
  }

  if (type === "select") {
    return (
      <div className="field">
        {before}
        <div className="control">
          <div className="select">
            <select
              {...input}
              id={id}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className="select"
            >
              {children}
            </select>
          </div>
        </div>
        {after}
        {touched &&
          ((error && <span className="inputError">{error}</span>) ||
            (warning && <span className="inputWarning">{warning}</span>))}
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="field">
        {before}
        <div className="control">
          <textarea className="textarea"></textarea>
        </div>
      </div>
    );
  }

  return (
    <div className="field">
      <div className="control">
        {before}
        <input
          {...input}
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={classType}
        />
        {after}
      </div>
      {touched &&
        ((error && <span className="inputError">{error}</span>) ||
          (warning && <span className="inputWarning">{warning}</span>))}
    </div>
  );
}

FieldComponent.propTypes = {};
