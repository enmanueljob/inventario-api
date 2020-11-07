const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
  {
    date: {
      type: Date,
      required: false,
    },
    total: {
      type: Number,
      required: true,
    },
    state: {
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

module.exports = mongoose.model("invoice", InvoiceSchema);