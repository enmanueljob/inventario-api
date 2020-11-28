const { PubSub } = require("apollo-server");
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

const pubsub = new PubSub();

const PRODUCT_ADDED = "PRODUCT_ADDED";

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
    addProduct: async (info, args, { Product }) => {
      const productSaved = await Product.save(args.product);
      pubsub.publish(PRODUCT_ADDED, { productAdded: productSaved });
      return productSaved;
    },
    updateProduct: (info, args, { Product }) => {
      console.log(Product);
      return Product.update(args.product);
    },
  },
  Subscription: {
    productAdded: {
      subscribe: () => pubsub.asyncIterator([PRODUCT_ADDED]),
    },
  },
};
