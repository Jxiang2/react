import store from "./reducer";

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

// const fetchUserCall =
//   (url: string) => async (dispatch: Dispatch, getState: () => State) => {
//     dispatch(fetchUsersRequest());
//     console.log("retrieved from getState(): ", getState()); // test getState()

//     const result = await axios.get(url);

//     if (result.status === 200) {
//       const users = result.data.map((user: User) => user.id);
//       dispatch(fetchUsersSuccess(users));
//       console.log("retrieved from getState(): ", getState()); // test getState()
//     } else {
//       dispatch(fetchUsersFailure(result.status));
//       console.log("retrieved from getState(): ", getState()); // test getState()
//     }
//   };

console.log(store.getState());
