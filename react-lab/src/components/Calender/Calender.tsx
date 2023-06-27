import { useState, MouseEvent } from "react";
import { DateTime } from "luxon";
import { CalenderHelper, getDarkColor } from "./helper";
import { useDnd } from "./hooks";
import { CalenderDate, DAYS, MyCalenderItem, ZONE } from "./types";
import { MOCKAPPS } from "./example";
import Tippy from "@tippyjs/react";

import { Portal } from "./component";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  EventHeader,
} from "./styles";

const NOW = DateTime.now().setZone(ZONE);

export function Calender() {
  const helper = new CalenderHelper(ZONE);

  const { onDragEnter, onDragStart, onDrop } = useDnd();

  const [currentMonthStart, setCurrentMonthStart] = useState<CalenderDate>({
    year: NOW.year,
    month: NOW.month,
    day: 1,
  });

  const [events, setEvents] = useState<MyCalenderItem[]>(MOCKAPPS);
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState<MyCalenderItem | undefined>(
    undefined,
  );

  // Portal for delete event
  const handleOnClickEvent = (form: MyCalenderItem) => {
    setShowPortal(true);
    setPortalData(form);
  };

  console.log(events);

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    portalData &&
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.title !== portalData.title),
      );
    handlePotalClose();
  };

  // Add new event
  const handleAddEvent = (
    date: CalenderDate,
    event: MouseEvent<HTMLElement>,
  ) => {
    if (!(event.target as HTMLElement).classList.contains("StyledEvent")) {
      const text = window.prompt("title");
      if (!text) return;

      const newDate = { ...date };
      const newItem = {
        id: Math.random() * 100,
        date: newDate,
        title: text,
        color: getDarkColor(),
      };
      setEvents((prev) => [...prev, newItem]);
    }
  };

  // undefined means days of previous month
  const sortedMonthDays = helper.getSortedDays(currentMonthStart) || [];

  return (
    <Wrapper>
      {/* Control */}
      <DateControls>
        <button
          onClick={() =>
            helper.prevMonth(currentMonthStart, setCurrentMonthStart)
          }
        >
          Prev
        </button>

        {helper.getMonthAndYear(currentMonthStart)}

        <button
          onClick={() =>
            helper.nextMonth(currentMonthStart, setCurrentMonthStart)
          }
        >
          Next
        </button>
      </DateControls>

      {/* Header  */}
      <SevenColGrid>
        {DAYS.map((day) => (
          <HeadDays key={day} className="nonDRAG">
            {day}
          </HeadDays>
        ))}
      </SevenColGrid>

      {/* Calender */}
      <SevenColGrid
        fullHeight={true}
        is28Days={helper.getDaysInMonth(currentMonthStart) === 28}
      >
        {sortedMonthDays.map((day, idx) => (
          <Tippy trigger="click" key={idx} render={() => <div>hello!</div>}>
            <div
              id={`${currentMonthStart.year}/${currentMonthStart.month}/${day}`}
              key={idx}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={(e) => onDrop(e, setEvents)}
              onDragEnter={(e) =>
                !!day &&
                onDragEnter(
                  {
                    year: currentMonthStart.year,
                    month: currentMonthStart.month,
                    day,
                  },
                  e,
                )
              }
              onClick={(e) =>
                !!day &&
                handleAddEvent(
                  {
                    year: currentMonthStart.year,
                    month: currentMonthStart.month,
                    day,
                  },
                  e,
                )
              }
            >
              {/* Cell header */}
              <EventHeader
                isToday={
                  !!day &&
                  helper.datesAreOnSameDay(
                    { year: NOW.year, month: NOW.month, day: NOW.day },
                    {
                      year: currentMonthStart.year,
                      month: currentMonthStart.month,
                      day,
                    },
                  )
                }
              >
                {day}
              </EventHeader>

              {/* Cell body (events) */}
              {events.map(
                (event, index) =>
                  !!day &&
                  helper.datesAreOnSameDay(event.date, {
                    year: currentMonthStart.year,
                    month: currentMonthStart.month,
                    day,
                  }) && (
                    <StyledEvent
                      key={event.id}
                      onDragStart={(e) => onDragStart(index, e)}
                      onClick={() => handleOnClickEvent(event)}
                      draggable
                      className="StyledEvent"
                      id={`${event.color} ${event.title}`}
                      bgColor={event.color}
                    >
                      {event.title}
                    </StyledEvent>
                  ),
              )}
            </div>
          </Tippy>
        ))}
      </SevenColGrid>

      {/* Delete event portal */}
      {showPortal && portalData && (
        <Portal
          item={portalData}
          handleDelete={handleDelete}
          handlePotalClose={handlePotalClose}
        />
      )}
    </Wrapper>
  );
}
