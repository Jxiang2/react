const { combineReducers, createStore, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");
const { createReducer, generateId } = require("./helper");

// ---------- actions.js -----------------
function addCommentAction(postId, commentText) {
  // Generate a unique ID for this comment
  const commentId = generateId(postId);

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
      comments: (post?.comments || []).concat(commentId),
    },
  };
}

const postsByIdReducer = createReducer(
  {}, // posts.byId
  {
    ADD_COMMENT: addComment,
  },
);

const allPostIdsReducer = createReducer(
  [], // posts.allIds
  {
    // ...
  },
);

// posts
const postsReducer = combineReducers({
  byId: postsByIdReducer,
  allIds: allPostIdsReducer,
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

const allCommentIdsReducer = createReducer(
  [], // comments.allIds
  {
    ADD_COMMENT: addCommentId,
  },
);

// comments
const commentsReducer = combineReducers({
  byId: commentsByIdReducer,
  allIds: allCommentIdsReducer,
});
// ---------------------------------------

// store
const reducer = combineReducers({
  postsReducer,
  commentsReducer,
});

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));

store.dispatch(addCommentAction("1", "hello"));

const a = store.getState().commentsReducer.byId;
console.log(a);
