const { mergeResolvers } = require("@graphql-tools/merge");

const clientResolvers = require("./graphql/client/resolvers");
const invoiceResolvers = require("./graphql/invoice/resolvers");
const invoiceDetailResolvers = require("./graphql/invoiceDetail/resolvers");
const productlResolvers = require("./graphql/product/resolvers");

const resolversArray = [
  clientResolvers,
  invoiceResolvers,
  invoiceDetailResolvers,
  productlResolvers,
];

module.exports = mergeResolvers(resolversArray);
