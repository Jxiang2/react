import { CalenderDate, MonthStartCalenderDate } from "./types";
import { DateTime, PossibleDaysInMonth } from "luxon";

export class CalenderHelper {
  private timeZone: string;

  constructor(timeZone: string) {
    this.timeZone = timeZone;
  }

  getDaysInMonth(date: CalenderDate) {
    const daysInMonth = DateTime.fromObject(
      {
        year: date.year,
        month: date.month,
        day: date.day,
      },
      { zone: this.timeZone },
    ).daysInMonth;

    return daysInMonth;
  }

  range(end: PossibleDaysInMonth) {
    const { result } = Array.from({ length: end }).reduce(
      ({ result, current }) => ({
        result: [...result, current],
        current: current + 1,
      }),
      { result: [], current: 1 },
    );
    return result as number[];
  }

  getSortedDays(date: MonthStartCalenderDate) {
    const daysInMonth = this.getDaysInMonth(date);

    if (!daysInMonth) {
      return undefined;
    }

    const daysInMonthRange = this.range(daysInMonth);
    const weekday = DateTime.fromObject(
      { day: date.day, month: date.month, year: date.year },
      { zone: this.timeZone },
    ).weekday;

    const lastMonthDays = weekday - 1;

    if (lastMonthDays > 0) {
      return [...Array.from({ length: lastMonthDays }), ...daysInMonthRange];
    }

    return [...daysInMonthRange];
  }

  datesAreOnSameDay(first: CalenderDate, second: CalenderDate) {
    return (
      first.year === second.year &&
      first.month === second.month &&
      first.day === second.day
    );
  }

  getMonthAndYear(date: CalenderDate) {
    return `${date.month} ${date.year}`;
  }

  nextMonth = (date: CalenderDate, cb: (date: CalenderDate) => void) => {
    const dateCopy = { ...date };
    const month = dateCopy.month;
    const year = dateCopy.year;

    if (month < 11) {
      dateCopy.month = month + 1;
    } else {
      dateCopy.month = 1;
      dateCopy.year = year + 1;
    }

    cb(dateCopy);
  };

  prevMonth(date: CalenderDate, cb: (date: CalenderDate) => void) {
    const dateCopy = { ...date };
    const month = dateCopy.month;
    const year = dateCopy.year;

    if (month > 1) {
      dateCopy.month = month - 1;
    } else {
      dateCopy.month = 12;
      dateCopy.year = year - 1;
    }

    cb(dateCopy);
  }
}

export function getDarkColor() {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
}
