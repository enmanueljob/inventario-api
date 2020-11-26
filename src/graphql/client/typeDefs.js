const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    clients: [Client]
  }

  type Client {
    id: ID!
    name: String!
    lastName: String!
    address: String
    phone: String
    email: String
  }

  input ClientInput {
    id: ID
    name: String!
    lastName: String!
    address: String
    phone: String
    email: String
  }

  type Mutation {
    addClient(client: ClientInput!): Client
  }
`;
