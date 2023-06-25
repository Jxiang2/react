import { useRef, DragEvent } from "react";
import { CalenderDate, CalenderEvent } from "../types";

export function useDnd() {
  const dragIndexRef = useRef<{
    index: number;
    target: HTMLElement;
  } | null>(null);

  const dragDateRef = useRef<{
    date: CalenderDate;
    target: string;
  } | null>(null);

  const onDragStart = (index: number, e: DragEvent<HTMLElement>) => {
    dragIndexRef.current = { index, target: e.target as HTMLElement };
  };

  const onDragEnter = (date: CalenderDate, e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    dragDateRef.current = { date, target: (e.target as Element).id };
  };

  const onDrop = <T extends CalenderEvent>(
    e: DragEvent<HTMLElement>,
    cb: (updater: (items: T[]) => T[]) => void,
  ) => {
    e.preventDefault();

    const updaterFn = (prev: T[]) =>
      prev.map((item, idx) => {
        if (idx === dragIndexRef.current?.index && dragDateRef.current) {
          item.date = dragDateRef.current.date;
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
