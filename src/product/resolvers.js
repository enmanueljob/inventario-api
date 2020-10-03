const { UserInputError } = require("apollo-server");

let products = [
  {
    id: 1,
    description: "smartphone",
    price: "100",
  },
  {
    id: 2,
    description: "headphones",
    price: "25",
  },
];

module.exports = {
  Query: {
    products: () => products,
    product: (info, args, context) =>
      products.find((prod) => prod.id === args.id),
  },
  Mutation: {
    addProduct: (info, args, context) => {
      products.push(args.product);
      return product[product.lenght - 1];
    },
  },
};
