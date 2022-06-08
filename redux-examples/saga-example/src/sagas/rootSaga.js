import { all } from "redux-saga/effects"
import watcherUserSaga from "./handlers/fetechUsers"

export default function* rootSaga () {
  yield all([watcherUserSaga()])
}