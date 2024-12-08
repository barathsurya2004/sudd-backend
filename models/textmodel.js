const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  text1: {
    type: String,
    required: false,
  },
  text2: {
    type: String,
    required: false,
  },
  text3: {
    type: String,
    required: false,
  },
  text4: {
    type: String,
    required: false,
  },
  text5: {
    type: String,
    required: false,
  },
  text6: {
    type: String,
    required: false,
  },
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
