import { useRef, DragEvent } from "react";
import { CalenderDate, CalenderEvent } from "../types";

export function useDnd() {
  const dragEventRef = useRef<number | null>(null);
  const dragDateRef = useRef<CalenderDate | null>(null);

  const onDragStart = (index: number) => {
    dragEventRef.current = index;
  };

  const onDragEnter = (date: CalenderDate, e: DragEvent<EventTarget>) => {
    e.preventDefault();
    dragDateRef.current = date;
  };

  const onDrop = <T extends CalenderEvent>(
    e: DragEvent<EventTarget>,
    cb: (updater: (events: T[]) => T[]) => void,
  ) => {
    e.preventDefault();

    const updaterFn = (prev: T[]) =>
      prev.map((event, idx) => {
        if (idx === dragEventRef.current && dragDateRef.current) {
          event.date = dragDateRef.current;
        }
        return event;
      });

    cb(updaterFn);
  };

  return {
    onDragStart,
    onDragEnter,
    onDrop,
  };
}
