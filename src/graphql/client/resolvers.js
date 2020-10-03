const methods = require("../../db/client/methods");

module.exports = {
  Mutation: {
    addClient: (_, { client = {} }) => {
      return methods.save(client);
    },
  },
  Query: {
    clients: async () => methods.get(),
  },
  Client: {
    id: (info) => info._id,
  },
};
