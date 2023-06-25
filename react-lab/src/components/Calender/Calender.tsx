import { Wrapper } from "./styles";
import { CalenderHelper, getDarkColor } from "./helper";
import { useDnd } from "./hooks";
import { useState } from "react";
import {
  CalenderDate,
  CreateCalenderEventFormState,
  MyCalenderEvent,
  ZONE,
} from "./types";
import { DateTime } from "luxon";
import { MOCKAPPS } from "./example";

const NOW = DateTime.now().setZone(ZONE);

export function Calender() {
  const helper = new CalenderHelper(ZONE);

  const {} = useDnd();

  const [currentMonthStart, setCurrentMonthStart] = useState<CalenderDate>({
    year: NOW.year,
    month: NOW.month,
    day: 1,
  });

  const [events, setEvents] = useState<MyCalenderEvent[]>(MOCKAPPS);
  const [showPortal, setShowPortal] = useState(false);
  const [portalData, setPortalData] = useState<CreateCalenderEventFormState>({
    title: "",
  });

  const handleOnClickEvent = (form: CreateCalenderEventFormState) => {
    setShowPortal(true);
    setPortalData(form);
  };

  const handlePotalClose = () => setShowPortal(false);

  return <Wrapper>Calender</Wrapper>;
}
