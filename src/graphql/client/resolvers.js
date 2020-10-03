module.exports = {
  Mutation: {
    addClient: (_, { client = {} }, { Client }) => {
      return Client.save(client);
    },
  },
  Query: {
    clients: async () => methods.get(),
  },
  Client: {
    id: (info) => info._id,
  },
};
