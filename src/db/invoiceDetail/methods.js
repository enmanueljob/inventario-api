const InvoiceDetail = require("./model");
const methods = require("../methods");

const common = methods(InvoiceDetail);

module.exports = {
  ...common,
  // otroMetodo:() =>{}
};