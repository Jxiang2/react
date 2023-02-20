import { Action, Store } from "redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { Handlers, Slice, State } from "./types";

// Redux
export const createReducer =
  <T extends Slice>(initialState: State[T], handlers: Handlers<T>) =>
  (state = initialState, action: Action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

export const useDispatchThunk =
  (store: Store) => (thunk: ThunkAction<void, State, unknown, Action>) =>
    (store.dispatch as ThunkDispatch<State, unknown, Action>)(thunk);
// ------------------------------------------------

// Immutable update
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
// ------------------------------------------------
