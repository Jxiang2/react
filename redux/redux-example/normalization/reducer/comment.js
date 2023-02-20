const { combineReducers } = require("redux");
const { createReducer } = require("../utils");

function addComment(state, action) {
  const { commentId, commentText } = action.payload;
  return {
    ...state,
    [commentId]: { id: commentId, text: commentText },
  };
}

function addCommentId(state, action) {
  const { commentId } = action.payload;
  return state.concat(commentId);
}

// comments
const commentsReducer = combineReducers({
  byId: createReducer(
    {}, // comments.byId
    {
      ADD_COMMENT: addComment,
    },
  ),
  allIds: createReducer(
    [], // comments.allIds
    {
      ADD_COMMENT: addCommentId,
    },
  ),
});

module.exports = {
  commentsReducer,
};
