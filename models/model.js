const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
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
