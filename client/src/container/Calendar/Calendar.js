import React from "react";
import PropTypes from "prop-types";
import "./Calendar.scss"

import { Calendar, dateFnsLocalizer  } from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import addDays from "date-fns/addDays"
const locales = {
  'en-US': require('date-fns/locale/en-US'),
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})


const DnDCalendar = withDragAndDrop(Calendar);

export default function CalendarContainer() {
  let myEventsList = [
    {
      title: "Event 1",
      start: new Date(),
      end: addDays(new Date(), 2)
    }
  ];
  
  const onEventResize = (data) => {
    const { start, end } = data;
    console.log("start, end", start,end)
  };

  const onEventDrop = (data) => {
    console.log(data);
  };

  return (
    <div className="calendarCnt">
      <h1 className="title is-1">Calendar</h1>
      <p className="subtitle is-5">
        Calendar presentation of your past and currently scheduled posts.
      </p>

      <div className="calendarWrapper">
        <DnDCalendar
          localizer={localizer}
          events={myEventsList}
          defaultView="week"
          startAccessor="start"
          endAccessor="end"
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
          style={{height: "100%", minHeight: "800px"}}
        />
      </div>
    </div>
  );
}

CalendarContainer.propTypes = {};
