// let products = [
//   {
//     id: 1,
//     description: "smartphone",
//     price: "100",
//   },
//   {
//     id: 2,
//     description: "headphones",
//     price: "25",
//   },
// ];

module.exports = {
  Query: {
    products: async (info, args, { Product }) => {
      const { docs: results, ...rest } = await Product.paginate(
        {},
        args.pagination
      );
      return { results, ...rest };
    },
    product: (info, { id }, { Product }) => Product.getById(id),
  },
  Mutation: {
    addProduct: (info, args, { Product }) => {
      return Product.save(args.product);
    },
    updateProduct: (info, args, { Product }) => {
      console.log(Product);
      return Product.update(args.product);
    },
  },
};
