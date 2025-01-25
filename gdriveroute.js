const express = require("express");
const upload = require("./config/multer");
const uploadFileToDrive = require("./config/drive");
// const Media = require("./models/model");
const Media = require("./models/projectmode");
const fs = require("fs");

const router = express.Router();

// router.post("/upload", upload.single("image"), async (req, res) => {
//   try {
//     const { title, text } = req.body;
//     const imageFile = req.file;

//     if (!title) {
//       return res.status(400).json({ message: "Title is required" });
//     }

//     if (!imageFile) {
//       return res.status(400).json({ message: "Image is required" });
//     }

//     const fileId = await uploadFileToDrive(imageFile.path, imageFile.filename);

//     const newMedia = new Media({
//       title,
//       text: text || null,
//       imageId: fileId,
//     });

//     await newMedia.save();

//     fs.unlinkSync(imageFile.path);

//     res.status(201).json({
//       message: "Image, title, and text uploaded successfully",
//       data: newMedia,
//     });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).json({ message: "Error uploading file", error });
//   }
// });

router.post("/upload", upload.array("images"), async (req, res) => {
  try {
    const { id, title, projects } = req.body;

    if (!id || !title || !projects) {
      return res
        .status(400)
        .json({ message: "id, title, and projects are required" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "Images are required" });
    }

    const projectArray = await Promise.all(
      req.files.map(async (file, index) => {
        const fileId = await uploadFileToDrive(file.path, file.filename);
        fs.unlinkSync(file.path);

        return {
          image: fileId,
          text: projects[index].text || null, // Use the corresponding text from the request
        };
      })
    );

    // Create a new media document
    const newMedia = new Media({
      id,
      title,
      project: projectArray,
    });

    // Save the document to the database
    await newMedia.save();

    res.status(201).json({
      message: "Media uploaded successfully!",
      data: newMedia,
    });
  } catch (error) {
    console.error("Error uploading media:", error);
    res.status(500).json({ message: "Error uploading media", error });
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
        title: record.title,
        projects: record.project,
      })),
    });
  } catch (error) {
    console.error("Error retrieving all media:", error);
    res.status(500).json({ message: "Error retrieving media records", error });
  }
});

router.get("/get-titles", async (req, res) => {
  try {
    const titles = await Media.find({}, "title");

    if (titles.length === 0) {
      return res.status(404).json({ message: "No titles found!" });
    }

    res.status(200).json({
      titles: titles.map((record) => record.title),
    });
  } catch (error) {
    console.error("Error retrieving titles:", error);
    res.status(500).json({ message: "Error retrieving titles", error });
  }
});

router.get("/get-by-title/:title", async (req, res) => {
  try {
    const { title } = req.params;

    const media = await Media.findOne({ title });

    if (!media) {
      return res
        .status(404)
        .json({ message: "No media found for the specified title!" });
    }

    res.status(200).json({
      imageId: media.imageId,
      text: media.text || null,
    });
  } catch (error) {
    console.error("Error retrieving media by title:", error);
    res.status(500).json({ message: "Error retrieving media", error });
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const media = await Media.findById(id);

    if (!media) {
      return res.status(404).json({ message: "Media not found!" });
    }

    res.status(200).json({
      imageId: media.imageId,
      text: media.text || null,
    });
  } catch (error) {
    console.error("Error retrieving image ID and text:", error);
    res
      .status(500)
      .json({ message: "Error retrieving image ID and text", error });
  }
});
router.delete("/delete-all", async (req, res) => {
  try {
    const deleteResult = await Media.deleteMany();

    if (deleteResult.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "No media records found to delete!" });
    }

    res.status(200).json({
      message: "All media records deleted successfully!",
      deletedCount: deleteResult.deletedCount,
    });
  } catch (error) {
    console.error("Error deleting all media records:", error);
    res
      .status(500)
      .json({ message: "Error deleting all media records", error });
  }
});

module.exports = router;
