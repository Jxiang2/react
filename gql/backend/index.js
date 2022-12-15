const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schemas/typeDefs");
const { resolvers } = require("./schemas/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      client_id: "xjy",
      client_secret: "we3291uj1ed21",
      req,
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}graphql`);
});
