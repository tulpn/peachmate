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

    if (error !== undefined && error !== null && touched ){
        classType += ' is-danger'
    }

  if (type === "select") {
      
    let selectClasses = 'select'

    if (error !== undefined && error !== null && touched ){
        selectClasses += ' is-danger'
    }
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
              className={selectClasses}
            >
              {children}
            </select>
          </div>
        </div>
        {after}
        {touched &&
          ((error && <p className="help is-danger">{error}</p>) ||
            (warning && <p className="help is-warning">{warning}</p>))}
      </div>
    );
  }

  if (type === "textarea") {


    let textAreaClasses = 'textarea'

    if (error !== undefined && error !== null && touched ){
        textAreaClasses += ' is-danger'
    }

    return (
      <div className="field">
        {before}
        <div className="control">
          <textarea {...input} className={textAreaClasses}></textarea>
        </div>
        {after}
        {touched &&
          ((error && <p className="help is-danger">{error}</p>) ||
            (warning && <p className="help is-warning">{warning}</p>))}
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
        ((error && <p className="help is-danger">{error}</p>) ||
        (warning && <p className="help is-warning">{warning}</p>))}
    </div>
  );
}

FieldComponent.propTypes = {};
