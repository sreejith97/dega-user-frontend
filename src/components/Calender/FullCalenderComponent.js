import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./calender.css";

export default function FullCalendarComponent() {
  const handleDateClick = (arg) => {
    console.log(arg);
    alert(arg.dateStr);
  };

  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={(e) => handleDateClick(e)}
        events={[
          { title: "Missed", date: "2021-12-07", color: "#ef4444" },
          { title: "Ongoing", date: "2021-12-17", color: "#3b82f6" },
          { title: "Completed", date: "2021-12-26", color: "#16a34a" },
          { title: "Completed", date: "2021-12-25", color: "#16a34a" },
          { title: "Upcomig", date: "2021-12-20", color: "#facc15" },
        ]}
        eventContent={renderEventContent}
      />
      <div className="flex justify-around mt-4 flex-wrap">
        <div className="flex flex-row color-indicator">
          <span className="mr-2 bg-[#3b82f6]"></span>
          <h1>Ongoing Service</h1>
        </div>
        <div className="flex flex-row color-indicator">
          <span className="mr-2 bg-[#ef4444]"></span>
          <h1>Missed Service</h1>
        </div>
        <div className="flex flex-row color-indicator">
          <span className="mr-2 bg-[#16a34a]"></span>
          <h1>Completed Service</h1>
        </div>
        <div className="flex flex-row color-indicator">
          <span className="mr-2 bg-[#facc15]"></span>
          <h1>Upcomig Service</h1>
        </div>
      </div>
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}
