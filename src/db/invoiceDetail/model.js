const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvoiceDetailSchema = new Schema(
  {
    invoiceID: {
      type: String,
      required: false,
    },
    productID: {
        type: String,
        required: false,
      },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
        type: Number,
        required: true,
      },
      subtotal: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
        required: true,
      },
      tax: {
        type: Number,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      }
  },
  {
    /**
     * generate createdAt and updatedAt fields
     */
    timestamps: true,
  }
);

module.exports = mongoose.model("invoiceDetail", InvoiceDetailSchema);