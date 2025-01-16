const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema(
  {
    imageName: String,
    imageData: Buffer,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feature", FeatureSchema);
