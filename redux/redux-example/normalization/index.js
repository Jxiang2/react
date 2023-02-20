const store = require("./store");
const { addCommentAction, addPostAction } = require("./action");

store.dispatch(addPostAction("1", "hello world!"));
store.dispatch(addCommentAction("1", "hello world comment 1"));
store.dispatch(addCommentAction("1", "hello world comment 2"));

store.dispatch(addPostAction("2", "hey earth!"));
store.dispatch(addCommentAction("2", "hey earth comment 1"));

console.log(store.getState().posts.byId);
console.log(store.getState().comments.byId);
