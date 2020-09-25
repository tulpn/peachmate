import React from "react";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { parse } from "date-fns";

export default function FieldDatePicker(props) {
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

  const onBlurHandle = (e) => {
    
    const v = parse(e.target.value, "MMMM d, yyyy h:mm aa", new Date())
    if ( v instanceof Date && isNaN(v)){
      console.log("onBlur could not parse: Invalid Date Time Object", v, typeof v) 
      input.onBlur(null);
      return 
    }
   
    console.log("onBlur success", v, typeof v) 
    input.onBlur(v);
  };

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <DatePicker
          className="input wide-input"
          showTimeSelect
          selected={input.value || null}
          isClearable
          timeIntervals={1}
          onChange={(val) => {
            console.log("onChange", val, typeof val);
            input.onChange(val);
          }}
          minDate={new Date()}
          onBlur={onBlurHandle}
          showDisabledMonthNavigation
          disabledKeyboardNavigation
          popperPlacement="top-end"
          placeholderText="Choose Date & Time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        {touched &&
          ((error && <p className="help is-danger">{error}</p>) ||
            (warning && <p className="help is-warning">{warning}</p>))}
      </div>
    </div>
  );
}

FieldDatePicker.propTypes = {};
