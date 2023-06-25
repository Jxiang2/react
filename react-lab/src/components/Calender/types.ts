export type WeekDays = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export type CalenderDate = {
  day: number; // 1 - 28/29/30/31
  month: number; // 1 - 12
  year: number;
};

export type MonthStartCalenderDate = {
  day: 1;
  month: number;
  year: number;
};

export type CalenderEvent = {
  id: number;
  date: CalenderDate;
};

// App sepecific types
export const ZONE = "America/Montreal";

export type MyCalenderEvent = CalenderEvent & {
  title: string;
  color: string;
};

export type CreateCalenderEventFormState = { title: string };
