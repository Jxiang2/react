const { combineReducers } = require("redux");
import { createReducer, generateId } from "./helper";

// ---------- actions.js -----------------
function addComment(postId, commentText) {
  // Generate a unique ID for this comment
  const commentId = generateId("comment");

  return {
    type: "ADD_COMMENT",
    payload: {
      postId,
      commentId,
      commentText,
    },
  };
}
// ---------------------------------------

// ---------- reducers/posts.js ----------
function addComment(state, action) {
  const { payload } = action;
  const { postId, commentId } = payload;

  // Look up the correct post,
  // this is why we use map for byId instead of array
  const post = state[postId];

  return {
    ...state,
    [postId]: {
      ...post,
      comments: post.comments.concat(commentId),
    },
  };
}

const postsByIdReducer = createReducer(
  {}, // posts.byId
  {
    ADD_COMMENT: addComment,
  },
);

const allPostsReducer = createReducer(
  [], // posts.allIds
  {
    // ...
  },
);

// posts
const postsReducer = combineReducers({
  byId: postsByIdReducer,
  allIds: allPostsReducer,
});
// ---------------------------------------

// ---------- reducers/comments.js -------
function addCommentEntry(state, action) {
  const { payload } = action;
  const { commentId, commentText } = payload;

  // Create our new Comment object
  const comment = { id: commentId, text: commentText };

  // Insert the new Comment object into the updated lookup table
  return {
    ...state,
    [commentId]: comment,
  };
}

const commentsByIdReducer = createReducer(
  {}, // comments.byId
  {
    ADD_COMMENT: addCommentEntry,
  },
);

function addCommentId(state, action) {
  const { payload } = action;
  const { commentId } = payload;
  // Just append the new Comment's ID to the list of all IDs
  return state.concat(commentId);
}

const allCommentsReducer = createReducer(
  [], // comments.allIds
  {
    ADD_COMMENT: addCommentId,
  },
);

// comments
const commentsReducer = combineReducers({
  byId: commentsByIdReducer,
  allIds: allCommentsReducer,
});
// ---------------------------------------

// state
module.exports = combineReducers({
  postsReducer,
  commentsReducer,
});
