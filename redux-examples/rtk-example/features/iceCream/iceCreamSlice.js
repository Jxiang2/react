const { cakeActions } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfIceCreams: 20
}

const iceCreamSlice = createSlice({
  name: "iceCream", // name of the slice in the state, the same with the on is store.js

  initialState: initialState,

  reducers: { // automatically generate action creator functions and reducers
    ordered: (state) => {
      state.numOfIceCreams--
    },

    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    }
  },

  // respond to actions in other slices
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => { // (other action name, response function to that action name)
      state.numOfIceCreams--
    })
  }
})

// fixed export pattern
module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions