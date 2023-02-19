import { SyncAction, Handlers, Slice, State } from "./types";

export const createReducer =
  <T extends Slice>(initialState: State[T], handlers: Handlers<T>) =>
  (state = initialState, action: SyncAction) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

export function updateObject<T extends {}>(
  oldObject: T,
  newValues: Partial<T>,
) {
  return {
    ...oldObject,
    ...newValues,
  };
}

export function updateItemInArray<T extends { id: string }>(
  array: T[],
  itemId: string,
  updateItemCallback: (item: T) => T,
) {
  const updatedItems = array.map((item) => {
    if (item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}

// test;
// const input = {
//   id: "123456",
//   text: "todo",
//   completed: { id: 1, flag: false },
// };

// const output = updateObject(input, {
//   completed: { ...input.completed, flag: !input.completed.flag },
// });

// console.log(input);
// console.log(output);
