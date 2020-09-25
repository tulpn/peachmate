import React, { useState } from "react";
import PropTypes from "prop-types";
import "./SavePostForm.scss";

import { connect } from "react-redux"
import { Field, reduxForm } from "redux-form/immutable";

import validator from "./validators";
import warn from "./warn";

import FieldComponent from "../../Forms/FieldComponent/FieldComponent";
import FieldDatePicker from "../../Forms/FieldDatePicker/FieldDatePicker";
import Button from "../../Button/Button";

let SavePostForm = (props) => {
  const { handleSubmit } = props;
  let errorContent = null;

  if (props.error !== null && props.error !== undefined) {
      let errorMessage = ""
      switch (props.error.get("status")) {
          case "form_error":
              errorMessage = "Please fill out the message correctly."
              break
          default:
              errorMessage = "Please verify that you have no errors in your form."
      }

      errorContent = (
          <div className='formError'>
              <h3>Ooops. We ran into a few errors.</h3>
              <p>{errorMessage}</p>
          </div>
      )
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      {errorContent}
      
      <Field
        id="message"
        name="message"
        type="textarea"
        label="Message"
        required
        disabled={props.loading}
        placeholder="Lorem Ipsum dolore sit amore"
        component={FieldComponent}
      />

      <Field
        id="when"
        name="when"
        type="text"
        label="When would you like to publish"        
        disabled={props.loading}
        component={FieldDatePicker}
      />

      <Field
        id="network"
        name="network"
        type="select"
        label="Select Network"
        required
        disabled={props.loading}
        component={FieldComponent}
      >
        <option value="linkedin">LinkedIn</option>
      </Field>

      <div className="field">
        <div className="control">
          <Button isPrimary isLoading={props.loading}>
            Save
            </Button>          
            <Button isWhite isLoading={props.loading}>
            Publish now
            </Button>    
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
