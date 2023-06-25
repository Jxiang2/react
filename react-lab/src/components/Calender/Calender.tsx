import { Wrapper } from "./styles";
import Helper from "./helper";
import { useState } from "react";
import { CalenderDate, ZONE } from "./types";
import { DateTime } from "luxon";
import { MOCKAPPS } from "./example";

const NOW = DateTime.now().setZone(ZONE);

export function Calender() {
  const [currentMonthStart, setCurrentMonthStart] = useState<CalenderDate>({
    year: NOW.year,
    month: NOW.month,
    day: 1,
  });
  const [events, setEvents] = useState(MOCKAPPS);

  return <Wrapper>Calender</Wrapper>;
}
