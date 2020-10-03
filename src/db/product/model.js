const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    /**
     * generate createdAt and updatedAt fields
     */
    timestamps: true,
  }
);

module.exports = mongoose.model("product", ProductSchema);
