const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  text1: { type: String, required: false },
  primary1: { type: String, required: false }, // Primary color for text1
  secondary1: { type: String, required: false }, // Secondary color for text1
  text2: { type: String, required: false },
  primary2: { type: String, required: false }, // Primary color for text2
  secondary2: { type: String, required: false }, // Secondary color for text2
  text3: { type: String, required: false },
  primary3: { type: String, required: false }, // Primary color for text3
  secondary3: { type: String, required: false }, // Secondary color for text3
  text4: { type: String, required: false },
  primary4: { type: String, required: false }, // Primary color for text4
  secondary4: { type: String, required: false }, // Secondary color for text4
  text5: { type: String, required: false },
  primary5: { type: String, required: false }, // Primary color for text5
  secondary5: { type: String, required: false }, // Secondary color for text5
  text6: { type: String, required: false },
  primary6: { type: String, required: false }, // Primary color for text6
  secondary6: { type: String, required: false }, // Secondary color for text6
  text7: { type: String, required: false },
  primary7: { type: String, required: false }, // Primary color for text7
  secondary7: { type: String, required: false }, // Secondary color for text7
  text8: { type: String, required: false },
  primary8: { type: String, required: false }, // Primary color for text8
  secondary8: { type: String, required: false }, // Secondary color for text8
});

const Text = mongoose.model("Text", textSchema);

module.exports = Text;
