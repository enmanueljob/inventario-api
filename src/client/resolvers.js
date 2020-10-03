let data = [
  {
    id: 1,
    name: "Pedro",
    phone: "88888888",
    email: "pedro@gmail.com",
  },
  {
    id: 2,
    name: "Pablo",
    phone: 77777777,
    email: "pablo@gmail.com",
  },
];

module.exports = {
  Query: {
    clients: () => data,
    // client: (info, args, context) =>
    //   clients.find((clte) => clte.id === args.id),
  },
};
