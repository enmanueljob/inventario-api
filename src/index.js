const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./importResolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then((res) => {
  console.log(`🚀 Server ready at ${res.url}`);
});
