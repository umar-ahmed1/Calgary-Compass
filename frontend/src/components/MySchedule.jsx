import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Box } from '@mui/material';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div width="100%" style={{ height: '100%', overflowY: "hidden" }}>
    <Calendar
      localizer={localizer}
      events={props.events}
      startAccessor="start"
      endAccessor="end"
      views="day"
      view={"day"}
      toolbar={false}
      width="100%"
      padding="0"
    />
  </div>
);

export default function MySchedule({ selectedItems }) {

  const [events, setEvents] = useState([]);
  //console.log(selectedItems)

  useEffect(() => {
    const today = new Date();
    const newEvents = Object.values(selectedItems).map(item => ({
      title: item.name,
      start: new Date(2024, today.getMonth(), today.getDate(), item.startTime, 0),
      end: new Date(2024, today.getMonth(), today.getDate(), item.endTime, 0),
    }));
    console.log("new events",newEvents)
    setEvents(newEvents);
  }, [selectedItems]);


  return (
    <Box>
    <
    <Box
      width="100%"
      height="100%"
    >
      <MyCalendar events={events} />
    </Box>

  )
}
