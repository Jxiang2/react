import petCounterReducer from "./petCounter"
import usersReducer from "./users"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
  petCounter: petCounterReducer,
  users: usersReducer
})

export default rootReducer
