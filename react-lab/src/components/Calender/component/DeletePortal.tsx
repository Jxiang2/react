import { PortalWrapper } from "../styles";
import { MyCalenderItem } from "../types";
import { DateTime } from "luxon";

interface Props {
  item: MyCalenderItem;
  handleDelete: () => void;
  handlePotalClose: () => void;
}

export function DeletePortal({ item, handleDelete, handlePotalClose }: Props) {
  return (
    <PortalWrapper>
      <h2>{item.title}</h2>
      <p>
        {DateTime.fromObject({
          year: item.date.year,
          month: item.date.month,
          day: item.date.day,
        }).toLocaleString()}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handlePotalClose}>Cancel</button>
    </PortalWrapper>
  );
}
