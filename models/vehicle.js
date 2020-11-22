const mongoose = require("mongoose");
const User = require("./user");
const vehicleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
      default: "not available",
    },
    img: {
      type: String,
      default: "https://source.unsplash.com/random/200x200",
    },
    price: {
      type: String,
      default: "not available",
    },
    city: {
      type: String,
      default: "not available",
    },
    area: {
      type: String,
      default: "not available",
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    brand: {
      type: String,
      default: "not available",
    },
    model: {
      type: String,
      default: "not available",
    },
    transmission: {
      type: String,
      default: "not available",
    },
    year: {
      type: Date,
    },
    fuel: {
      type: String,
      default: "not available",
    },
    engineCC: {
      type: String,
      default: "not available",
    },
    mileage: {
      type: String,
      default: "not available",
    },
    document: {
      type: String,
      default: "not available",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("vehicle", vehicleSchema);
