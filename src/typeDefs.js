const { mergeTypeDefs } = require("@graphql-tools/merge");

const commonTypeDefs = require("./graphql/common/typeDefs");
const clientTypeDefs = require("./graphql/client/typeDefs");
const invoiceTypeDefs = require("./graphql/invoice/typeDefs");
const invoiceDetailTypeDefs = require("./graphql/invoiceDetail/typeDefs");
const productlTypeDefs = require("./graphql/product/typeDefs");

const typesArray = [
  commonTypeDefs,
  clientTypeDefs,
  invoiceTypeDefs,
  invoiceDetailTypeDefs,
  productlTypeDefs,
];

module.exports = mergeTypeDefs(typesArray, { all: true });
