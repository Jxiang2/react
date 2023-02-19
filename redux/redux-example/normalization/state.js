module.exports = {
  posts: {
    byId: {
      post1: {
        id: "post1",
        body: "......",
        comments: ["comment1", "comment2"],
      },
      post2: {
        id: "post2",
        body: "......",
        comments: ["comment3", "comment4", "comment5"],
      },
    },
    allIds: ["post1", "post2"],
  },
  comments: {
    byId: {
      comment1: {
        id: "comment1",
        text: ".....",
      },
      comment2: {
        id: "comment2",
        text: ".....",
      },
      comment3: {
        id: "comment3",
        text: ".....",
      },
      comment4: {
        id: "comment4",
        text: ".....",
      },
      comment5: {
        id: "comment5",
        text: ".....",
      },
    },
    allIds: ["comment1", "comment2", "comment3", "comment4", "comment5"],
  },
};
