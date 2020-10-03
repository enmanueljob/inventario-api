const Product = require("./model");
const methods = require("../methods");

const common = methods(Product);

module.exports = {
  ...common,
  // otroMetodo:() =>{}
};
