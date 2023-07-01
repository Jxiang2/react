import { useState, MouseEvent } from "react";
import { DateTime } from "luxon";
import { CalenderHelper, getDarkColor } from "./helper";
import { useDnd } from "./hooks";
import { CalenderDate, DAYS, MyCalenderItem, ZONE } from "./types";
import { MOCKAPPS } from "./example";

import { DeletePortal } from "./component";
import {
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
  StyledEvent,
  EventHeader,
  AddEvent,
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

  const handlePotalClose = () => setShowPortal(false);

  const handleDelete = () => {
    portalData &&
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.title !== portalData.title),
      );
    handlePotalClose();
  };

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

  const getCurrentMonthDate = (day: number) => ({
    year: currentMonthStart.year,
    month: currentMonthStart.month,
    day,
  });

  // undefined means days of previous month
  const sortedMonthDays = helper.getSortedDays(currentMonthStart) || [];

  console.log(events);

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
        <>
          {/* Previous month cells */}
          {sortedMonthDays
            .filter((day) => !day)
            .map((_, idx) => (
              <div key={idx} />
            ))}

          {/* Current month Cells */}
          {(sortedMonthDays.filter((day) => !!day) as number[]).map(
            (day, idx) => (
              <div
                key={idx}
                onDragOver={(e) => e.preventDefault()}
                onDragEnd={(e) => onDrop(e, setEvents)}
                onDragEnter={(e) => onDragEnter(getCurrentMonthDate(day), e)}
              >
                {/* Cell header */}
                <EventHeader
                  isToday={helper.datesAreOnSameDay(
                    { year: NOW.year, month: NOW.month, day: NOW.day },
                    getCurrentMonthDate(day),
                  )}
                >
                  {day}
                  <AddEvent
                    onClick={(e) => handleAddEvent(getCurrentMonthDate(day), e)}
                  >
                    Add
                  </AddEvent>
                </EventHeader>

                {/* Cell body (events) */}
                {events.map(
                  (event) =>
                    helper.datesAreOnSameDay(
                      event.date,
                      getCurrentMonthDate(day),
                    ) && (
                      <StyledEvent
                        key={event.id}
                        onDragStart={() => onDragStart(event.id)}
                        onClick={() => handleOnClickEvent(event)}
                        draggable
                        id={`${event.color} ${event.title}`}
                        bgColor={event.color}
                      >
                        {event.title}
                      </StyledEvent>
                    ),
                )}
              </div>
            ),
          )}
        </>
      </SevenColGrid>

      {/* Delete event portal */}
      {showPortal && portalData && (
        <DeletePortal
          item={portalData}
          handleDelete={handleDelete}
          handlePotalClose={handlePotalClose}
        />
      )}
    </Wrapper>
  );
}
