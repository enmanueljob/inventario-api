const { ApolloServer } = require("apollo-server");
const client = require("./db/client/methods");
const product = require("./db/product/methods");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./importResolvers");

mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Client: client,
    Product: product,
  },
});

server.listen().then((res) => {
  console.log(`🚀 Server ready at ${res.url}`);
});
