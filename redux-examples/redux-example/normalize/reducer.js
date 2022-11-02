const { combineReducers } = require("redux");

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

  // Look up the correct post
  const post = state[postId];

  return {
    ...state,
    // Update our Post object with a new "comments" array
    [postId]: {
      ...post,
      comments: post.comments.concat(commentId),
    },
  };
}

function postsById(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return addComment(state, action);
    default:
      return state;
  }
}

function allPosts(state = [], action) {
  // omitted - no work to be done for this example
}

const postsReducer = combineReducers({
  byId: postsById,
  allIds: allPosts,
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

function commentsById(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return addCommentEntry(state, action);
    default:
      return state;
  }
}

function addCommentId(state, action) {
  const { payload } = action;
  const { commentId } = payload;
  // Just append the new Comment's ID to the list of all IDs
  return state.concat(commentId);
}

function allComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return addCommentId(state, action);
    default:
      return state;
  }
}

const commentsReducer = combineReducers({
  byId: commentsById,
  allIds: allComments,
});
// ---------------------------------------

export default combineReducers({
  postsReducer,
  commentsReducer,
});
