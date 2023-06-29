import { useRef, DragEvent } from "react";
import { CalenderDate, CalenderEvent } from "../types";

export function useDnd() {
  const dragIndexRef = useRef<number | null>(null);
  const dragDateRef = useRef<CalenderDate | null>(null);

  const onDragStart = (index: number) => {
    dragIndexRef.current = index;
  };

  const onDragEnter = (date: CalenderDate, e: DragEvent<EventTarget>) => {
    e.preventDefault();
    dragDateRef.current = date;
  };

  const onDrop = <T extends CalenderEvent>(
    e: DragEvent<EventTarget>,
    cb: (updater: (items: T[]) => T[]) => void,
  ) => {
    e.preventDefault();

    const updaterFn = (prev: T[]) =>
      prev.map((item, idx) => {
        if (idx === dragIndexRef.current && dragDateRef.current) {
          item.date = dragDateRef.current;
        }
        return item;
      });

    cb(updaterFn);
  };

  return {
    dragIndexRef,
    dragDateRef,

    onDragStart,
    onDragEnter,
    onDrop,
  };
}
