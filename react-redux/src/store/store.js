import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment (state) { // action 1
      state.counter = state.counter + 1;
    },
    decrement (state) { // action 2
      state.counter = state.counter - 1;
    },
    addBy (state, action) { // action3
      state.counter = state.counter + action.payload;
    },
  }
});

const actions = counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });


export { actions, store };

