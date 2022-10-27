const axios = require("axios");
const thunk = require("redux-thunk").default;
const { createStore, bindActionCreators, applyMiddleware } = require("redux");

const URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// action names
const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

// action creator functions
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

/**
 * async action creator function
 * returns a {function (dispatch): async logics ...} intead of action object
 * and it dispatchs sync actions inside it,
 * so it is a "thunk" of actions
 */

const fetchUsers = () => (dispatch, getState) => {
  dispatch(fetchUsersRequest());
  console.log("retrieved from getState(): ", getState()); // test getState()

  axios
    .get(URL)
    .then((response) => {
      // response.data is the users
      const users = response.data.map((user) => user.id);
      dispatch(fetchUsersSuccess(users));
      console.log("retrieved from getState(): ", getState()); // test getState()
    })
    .catch((error) => {
      // error.message is the error message
      dispatch(fetchUsersFailure(error.message));
      console.log("retrieved from getState(): ", getState()); // test getState()
    });
};

// reducer
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

// setup store
const store = createStore(reducer, applyMiddleware(thunk));

const actions = bindActionCreators(
  {
    fetchUsers,
  },
  store.dispatch,
);

actions.fetchUsers();
