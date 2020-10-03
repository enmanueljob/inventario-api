const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
  },
  {
    /**
     * generate createdAt and updatedAt fields
     */
    timestamps: true,
  }
);

module.exports = mongoose.model("client", ClientSchema);
