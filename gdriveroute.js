const express = require("express");
const upload = require("./config/multer");
const uploadFileToDrive = require("./config/drive");
const Media = require("./models/model");
const fs = require("fs");

const router = express.Router();

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { text } = req.body;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const fileId = await uploadFileToDrive(imageFile.path, imageFile.filename);

    const newMedia = new Media({
      text: text || null,
      imageId: fileId,
    });

    await newMedia.save();

    fs.unlinkSync(imageFile.path);

    res.status(201).json({
      message: "Image and text uploaded successfully",
      data: newMedia,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Error uploading file", error });
  }
});

router.get("/get-all-media", async (req, res) => {
  try {
    const mediaRecords = await Media.find();

    if (mediaRecords.length === 0) {
      return res.status(404).json({ message: "No media records found!" });
    }

    res.status(200).json({
      media: mediaRecords.map((record) => ({
        imageId: record.imageId,
        text: record.text || null,
      })),
    });
  } catch (error) {
    console.error("Error retrieving all media:", error);
    res.status(500).json({ message: "Error retrieving media records", error });
  }
});

module.exports = router;
