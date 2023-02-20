const { combineReducers } = require("redux");
const { createReducer } = require("../utils");

function addPost(state, action) {
  const { postId, postBody, comments } = action.payload;
  return {
    ...state,
    [postId]: {
      id: postId,
      body: postBody,
      comments,
    },
  };
}
function addPostComment(state, action) {
  const { postId, commentId } = action.payload;
  const post = state[postId];
  return {
    ...state,
    [postId]: {
      ...post,
      comments: (post?.comments || []).concat(commentId),
    },
  };
}

function addPostId(state, action) {
  const { postId } = action.payload;
  return state.concat(postId);
}

const postsReducer = combineReducers({
  byId: createReducer(
    {}, // posts.byId
    {
      ADD_POST: addPost,
      ADD_COMMENT: addPostComment,
    },
  ),
  allIds: createReducer(
    [], // posts.allIds
    {
      ADD_POST: addPostId,
    },
  ),
});

module.exports = {
  postsReducer,
};
