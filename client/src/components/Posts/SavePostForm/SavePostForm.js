import React from "react";
import PropTypes from "prop-types";

import { Field, reduxForm } from "redux-form/immutable";

import validator from "./validators";
import warn from "./warn";

import FieldComponent from "../../Forms/FieldComponent/FieldComponent";

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
        id="when"
        name="when"
        type="datetime"
        label="When"
        placeholder=""
        component={FieldComponent}
      />
      <Field
        id="network"
        name="network"
        type="select"
        label="Select Network"
        placeholder=""
        component={FieldComponent}
      >
        <option value="1">LinkedIn</option>
      </Field>

      <div>
        <button
          type="submit"
          className="button is-primary"
          disabled={props.loading}
        >
          Save Post
        </button>
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

export default SavePostForm;
