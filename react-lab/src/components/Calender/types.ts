export type WeekDays = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
export const DAYS: WeekDays[] = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
];

export type CalenderDate = {
  day: number; // 1 - 28/29/30/31
  month: number; // 1 - 12
  year: number;
};

export type CalenderEvent = {
  id: number;
  date: CalenderDate;
};

// App sepecific types
export const ZONE = "America/Montreal";

export type MyCalenderItem = CalenderEvent & {
  title: string;
  color: string;
};
