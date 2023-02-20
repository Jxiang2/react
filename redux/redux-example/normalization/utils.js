const createReducer =
  (initialState, handlers) =>
  (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

const generateommentId = (postId) => {
  return `${postId}.${(Math.random() * 10).toFixed(0)}`;
};

module.exports = {
  createReducer,
  generateommentId,
};
