const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake", // name of the slice in the state, the same with the on is store.js

  initialState: initialState,

  reducers: { // automatically generate action creator functions and reducers
    ordered: (state) => {
      state.numOfCakes--
    },

    restocked: (state, action) => {
      state.numOfCakes += action.payload
    }
  }

})

// fixed export pattern
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions