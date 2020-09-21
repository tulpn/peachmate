import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SavePostForm.scss";

import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form/immutable";

import validator from "./validators";
import warn from "./warn";

import FieldComponent from "../../Forms/FieldComponent/FieldComponent";
import FieldDatePicker from "../../Forms/FieldDatePicker/FieldDatePicker";

let SavePostForm = (props) => {
  const { handleSubmit } = props;
  let errorContent = null;

  return (
    <form onSubmit={handleSubmit} className="form">
      {errorContent}
      <Field
        id="title"
        name="title"
        type="text"
        label="Post Title"
        placeholder="Lorem Ipsum dolore sit amore"
        component={FieldComponent}
      />
      <Field
        id="message"
        name="message"
        type="textarea"
        label="Message"
        placeholder="Lorem Ipsum dolore sit amore"
        component={FieldComponent}
      />

      <Field
        label="When would you like to publish"
        name="when"
        id="when"
        type="text"
        component={FieldDatePicker}
      />

      <Field
        id="network"
        name="network"
        type="select"
        label="Select Network"
        placeholder=""
        component={FieldComponent}
      >
        <option value="linkedin">LinkedIn</option>
      </Field>

      <div className="field">
        <div className="control">
          <button
            type="submit"
            className="button is-primary"
            disabled={props.loading}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

SavePostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  hasFinished: PropTypes.bool,
  hasSucceeded: PropTypes.bool,
};

SavePostForm = reduxForm({
  form: "SavePostForm",
  validate: validator,
  warn,
})(SavePostForm);


SavePostForm = connect(
    (state) => ({
        initialValues: {
            network: "linkedin",
        },
    }),
    {
        load: console.log,
    }
)(SavePostForm)

export default SavePostForm;
