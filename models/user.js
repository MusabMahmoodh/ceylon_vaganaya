const mongoose = require("mongoose");
const Vehicle = require("./vehicle");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 6,
    },
    photo: {
      type: String,
      default: "https://source.unsplash.com/random/200x200",
    },
    // lastActiveAt: Date,
    vehicles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
      },
    ],
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("user", userSchema);
