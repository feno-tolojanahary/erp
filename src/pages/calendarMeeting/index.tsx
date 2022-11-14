import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { useLoaderData } from "react-router-dom";

const localizer = momentLocalizer(moment);

type EventType = {
    id: number,
    title: string,
    allDay?: boolean,
    start: Date,
    end: Date,
    desc: string
}

type LoaderDataType = {
    events: EventType
}

const CalendarMeeting = () => {
    const { events } = useLoaderData() as LoaderDataType;
    
    return (
        <div className="w-full">
            <Calendar
                defaultDate={new Date()}
                events={events}
                localizer={localizer}
                showMultiDayTimes
                step={30}
            />
        </div>
    )
}

export default CalendarMeeting;