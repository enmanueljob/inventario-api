const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    price: Number,
    quantity: Number,
    totalStock: Number,
  },
  {
    /**
     * generate createdAt and updatedAt fields
     */
    timestamps: true,
  }
);

ProductSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("product", ProductSchema);
