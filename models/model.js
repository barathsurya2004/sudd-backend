const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: false,
  },
  imageId: {
    type: String,
    required: true,
  },
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;
