import React, { useState } from "react";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

export default function FieldDatePicker(props) {
  const [startDate, setStartDate] = useState(new Date());

  const setScheduledDateTime = (data) => {
    console.log(
      "setting data to redux immutable js form: ",
      setScheduledDateTime
    );
  };
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <DatePicker
          className="input wide-input"
          showTimeSelect
          selected={props.input.value || null}
          onChange={props.input.onChange}
          isClearable
          disabledKeyboardNavigation
          popperPlacement="top-end"
          placeholderText="Choose Date & Time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
    </div>
  );
}

FieldDatePicker.propTypes = {};
