const createSlice = require("@reduxjs/toolkit").createSlice
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios = require("axios")

const initialState = {
  loading: false,
  users: [],
  error: ""
}

// generates pending, fufilled and rejected actions to the async callback function at the 
// 2nd argument position of createAsyncThunk
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSlice({
  name: "user", // name of the slice in the state, the same with the on is store.js

  initialState,

  reducers: {},

  extraReducers: (builder) => { // respond to invokes to other slices' action funcs, including those downloaded
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ""
    })

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers