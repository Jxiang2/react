const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake", // name of the slice in the state, the same with the on is store.js

  initialState,

  reducers: {
    // generate both action funcs and subReducers sharing the same name
    ordered: (state) => {
      state.numOfCakes--;
    },

    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

// fixed export pattern
module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
