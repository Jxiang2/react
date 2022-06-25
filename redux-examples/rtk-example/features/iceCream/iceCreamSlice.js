const { cakeActions } = require('../cake/cakeSlice')
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
  name: 'iceCream', // name of the slice in the state, the same with the on is store.js

  initialState,

  reducers: { // generate both action funcs and subReducers sharing the same name
    ordered: (state) => {
      state.numOfIceCreams--
    },

    restocked: (state, action) => {
      state.numOfIceCreams += action.payload
    },
  },

  extraReducers: (builder) => { // respond to invokes to other slices' action funcs, including those downloaded
    builder.addCase(cakeActions.ordered, (state) => { // (other action name, callback func) => update this slice
      state.numOfIceCreams--
    })
  },
})

// fixed export pattern
module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions