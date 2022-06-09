import { takeEvery } from "redux-saga/effects";
import sagaHandlers from "./handlers/handlers";

function* rootSaga () { // everytime see a "XXX_XXX_REQUESTED", perform an action from saga handlers
  yield takeEvery("TODOS_FETCH_REQUESTED", sagaHandlers.getTodosAction);
  yield takeEvery("UPDATE_TODO_REQUESTED", sagaHandlers.updateTodoAction);
  yield takeEvery("DELETE_TODO_REQUESTED", sagaHandlers.deleteTodoAction);
  yield takeEvery("CREATE_TODO_REQUESTED", sagaHandlers.createTodoAction);
}

export default rootSaga;