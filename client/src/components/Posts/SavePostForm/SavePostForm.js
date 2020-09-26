import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SavePostForm.scss";

import { connect } from "react-redux";
import { Field, reduxForm  } from "redux-form/immutable";

import formatISO from 'date-fns/formatISO'

import validator from "./validators";
import warn from "./warn";

import FieldComponent from "../../Forms/FieldComponent/FieldComponent";
import FieldDatePicker from "../../Forms/FieldDatePicker/FieldDatePicker";
import Button from "../../Button/Button";

import Post from "../../../models/Posts/post"

let SavePostForm = (props) => {
  const { handleSubmit } = props;
  let errorContent = null;

  if (props.error !== null && props.error !== undefined) {
    let errorMessage = "";
    switch (props.error.get("status")) {
      case "form_error":
        errorMessage = "Please fill out the message correctly.";
        break;
      default:
        errorMessage = "Please verify that you have no errors in your form.";
    }

    errorContent = (
      <div className="formError">
        <h3>Ooops. We ran into a few errors.</h3>
        <p>{errorMessage}</p>
      </div>
    );
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

      <div className="networkGroup">
        <label className="label">Select Network</label>
        <Field
          id="networkLinkedIn"
          name="networkLinkedIn"
          type="checkbox"
          label="LinkedIn"
          required
          disabled={props.loading}
          component={FieldComponent}
        />
        <Field
          id="networkTwitter"
          name="networkTwitter"
          type="checkbox"
          label="Twitter"
          required
          disabled={props.loading}
          component={FieldComponent}
        />
      </div>

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

/** in Edit mode, we want to set the initial values
 * however, they are slightly different to the form because of the networks
 * therefore we to an explicit mapping
 */
SavePostForm = connect(
  (state) => {
    if ( state.get("posts").get("save").get("post") === null)
    {
      return {}
    }
    // work with a post object, to ensure correct parsing and accessing of attributes
    const p = new Post(state.get("posts").get("save").get("post").toJS())

    return {
      initialValues: {
        id: p.id,
        message:p.message,
        when: p.when,
        networkLinkedIn: p.networks.includes("linkedin"),
        networkTwitter: p.networks.includes('twitter'),
      }
     
    }
  }
)(SavePostForm);

export default SavePostForm;
