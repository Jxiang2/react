const { combineReducers, createStore, applyMiddleware } = require("redux");
const { postsReducer } = require("./reducer/post");
const { commentsReducer } = require("./reducer/comment");

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const store = createStore(rootReducer);

module.exports = store;
