const Invoice = require("./model");
const methods = require("../methods");

const common = methods(Invoice);

module.exports = {
  ...common,
  // otroMetodo:() =>{}
};
