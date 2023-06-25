import { CalenderDate, ZONE } from "./types";
import { DateTime } from "luxon";

/**
 * Get number of days in a month
 * @param {DateTime} date
 * @returns {number} number of days in month
 */
const getDaysInMonth = (date: CalenderDate) => {
  const daysInMonth = DateTime.fromObject(
    {
      year: date.year,
      month: date.month,
      day: date.day,
    },
    { zone: ZONE },
  ).daysInMonth;

  return daysInMonth;
};

/**
 * Get range of day counts from 1 to end
 * @param {number} end
 * @returns {number[]} from 1 to end
 */
const range = (end: number) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 },
  );
  return result as number[];
};

const datesAreOnSameDay = (first: CalenderDate, second: CalenderDate) =>
  first.year === second.year &&
  first.month === second.month &&
  first.day === second.day;

const getMonthAndYear = (date: CalenderDate) => {
  return `${date.month} ${date.year}`;
};

const nextMonth = (date: CalenderDate, cb: (...args: any) => any) => {
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

const prevMonth = (date: CalenderDate, cb: (...args: any) => any) => {
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
};

const getSortedDays = (date: CalenderDate) => {
  const daysInMonth = getDaysInMonth(date);

  if (daysInMonth) {
    const daysInMonthRange = range(daysInMonth);
    const weekday = DateTime.fromObject(
      { day: date.day, month: date.month, year: date.year },
      { zone: ZONE },
    ).weekday;

    const lastMonthDays = weekday - 1;

    if (lastMonthDays > 0) {
      return [...Array.from({ length: lastMonthDays }), ...daysInMonthRange];
    }

    return [...daysInMonthRange];
  }

  return undefined;
};

const getDarkColor = () => {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

export default {
  getDaysInMonth,
  range,
  datesAreOnSameDay,
  getMonthAndYear,
  nextMonth,
  prevMonth,
  getSortedDays,
  getDarkColor,
};
