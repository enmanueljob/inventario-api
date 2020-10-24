const { ApolloServer } = require("apollo-server");
const client = require("./db/client/methods");
const product = require("./db/product/methods");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./typeDefs");
const resolvers = require("./importResolvers");

mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`,{useNewUrlParser:true});
// mongoose.connect('mongodb+srv://admin:admin123@cluster0.u0w2x.mongodb.net/dev',{useNewUrlParser:true},{ useUnifiedTopology: true });


const PORT = process.env.PORT || 4000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Client: client,
    Product: product,
  },
});

server.listen({ port: PORT }).then((res) => {
  console.log(`🚀 Server ready at ${res.url}`);
});
