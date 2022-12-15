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
        comment: ".....",
      },
      comment2: {
        id: "comment2",
        comment: ".....",
      },
      comment3: {
        id: "comment3",
        comment: ".....",
      },
      comment4: {
        id: "comment4",
        comment: ".....",
      },
      comment5: {
        id: "comment5",
        comment: ".....",
      },
    },
    allIds: ["comment1", "comment2", "comment3", "comment4", "comment5"],
  },
};
