const { generateommentId } = require("./utils");

function addCommentAction(postId, commentText) {
  // Generate a unique ID for this comment
  const commentId = generateommentId(postId);
  return {
    type: "ADD_COMMENT",
    payload: {
      postId,
      commentId,
      commentText,
    },
  };
}

function addPostAction(postId, postBody) {
  return {
    type: "ADD_POST",
    payload: {
      postId,
      postBody,
      comments: [],
    },
  };
}

module.exports = {
  addCommentAction,
  addPostAction,
};
