let data = [
  {
  id:1,
  name: "Pedro",
  telefono: "88888888",
  email:"pedro@gmail.com",
  },
  {
  id:2,
  name: "Pablo",
  telefono: 77777777,
  email:"pablo@gmail.com",
  },
  ]

module.exports = {
  Query: {
    hello: () => "Hello world!",
    clients: () => data
  },
};


