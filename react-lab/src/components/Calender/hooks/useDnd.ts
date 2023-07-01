import { useRef, DragEvent } from "react";
import { CalenderDate, CalenderEvent } from "../types";

export function useDnd() {
  const eventIdRef = useRef<number | null>(null);
  const todDateRef = useRef<CalenderDate | null>(null);

  const onDragStart = (index: number) => {
    eventIdRef.current = index;
  };

  const onDragEnter = (date: CalenderDate, e: DragEvent<EventTarget>) => {
    e.preventDefault();
    todDateRef.current = date;
  };

  const onDrop = <T extends CalenderEvent>(
    e: DragEvent<EventTarget>,
    setter: (updater: (events: T[]) => T[]) => void,
  ) => {
    e.preventDefault();

    const updaterFn = (prev: T[]) =>
      prev.map((event) => {
        if (event.id === eventIdRef.current && todDateRef.current) {
          event.date = todDateRef.current;
        }
        return event;
      });

    setter(updaterFn);
  };

  return {
    onDragStart,
    onDragEnter,
    onDrop,
  };
}
