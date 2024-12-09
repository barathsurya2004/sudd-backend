const express = require("express");
const multer = require("multer");
const fs = require("fs");
const uploadFileToDrive = require("./config/drive");
const Image = require("./models/imagemodel");

const router = express.Router();

const upload = multer({ dest: "tmp/" });

router.post("/upload-image", upload.single("image"), async (req, res) => {
  try {
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image is required" });
    }

    const fileId = await uploadFileToDrive(
      imageFile.path,
      imageFile.originalname
    );

    const newImage = new Image({ imageId: fileId });
    await newImage.save();

    fs.unlinkSync(imageFile.path);

    res.status(201).json({
      message: "Image uploaded successfully",
      data: newImage,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ message: "Error uploading image", error });
  }
});

router.put("/update-image/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const imageFile = req.file;

    if (!imageFile) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const existingImage = await Image.findById(id);
    if (!existingImage) {
      return res.status(404).json({ message: "Image not found!" });
    }

    const newImageId = await uploadFileToDrive(
      imageFile.path,
      imageFile.originalname
    );

    existingImage.imageId = newImageId;
    await existingImage.save();

    fs.unlinkSync(imageFile.path);

    res.status(200).json({
      message: "Image updated successfully",
      data: existingImage,
    });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ message: "Error updating image", error });
  }
});

router.get("/get-all-images", async (req, res) => {
  try {
    const images = await Image.find({}, "imageId");

    if (images.length === 0) {
      return res.status(404).json({ message: "No images found!" });
    }

    res.status(200).json({
      images: images.map((image) => ({
        imageId: image.imageId,
      })),
    });
  } catch (error) {
    console.error("Error retrieving all images:", error);
    res.status(500).json({ message: "Error retrieving all images", error });
  }
});

module.exports = router;
