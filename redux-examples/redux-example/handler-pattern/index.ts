import axios from "axios";
import { Action, Dispatch } from "redux";
import store from "./reducer";
import { State, User } from "./types";

// ------------------- sync -------------------

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "PRIVATE",
});

store.dispatch({
  type: "ADD_TODO",
  id: "1",
  text: "first mission",
});

store.dispatch({
  type: "TOGGLE_TODO",
  id: "1",
});
// --------------------------------------------

// ------------------- async ------------------
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";
const URL = "https://jsonplaceholder.typicode.com/users";

const apiCall =
  (url: string) => async (dispatch: Dispatch, getState: () => State) => {
    dispatch({ type: FETCH_USERS_REQUESTED });

    const result = await axios.get(url);

    if (result.status === 200) {
      dispatch({ type: FETCH_USERS_SUCCEEDED, payload: result.data });
      console.log(store.getState());
    } else {
      dispatch({
        type: FETCH_USERS_FAILED,
        error: result.status.toString(),
      });
      console.log(store.getState());
    }
  };

const fetchUsers = apiCall(URL);

store.dispatch(fetchUsers as any);
// ------------------- async ------------------