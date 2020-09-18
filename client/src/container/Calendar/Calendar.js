import React from 'react'
import PropTypes from 'prop-types'

export default function CalendarContainer() {
  return (
    <div className="calendarCnt">
      <h1 className="title is-1">Calendar</h1>
      <p className="subtitle is-5">
        Calendar presentation of your past and currently scheduled posts.
      </p>
    </div>
  );
}

CalendarContainer.propTypes = {

}
