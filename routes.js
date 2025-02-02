const express = require("express");
const Text = require("./models/textmodel");

const router = express.Router();

router.put("/update-text1/:id", async (req, res) => {
  try {
    const { text1 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text1 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text1 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1", error });
  }
});

router.put("/update-text2/:id", async (req, res) => {
  try {
    const { text2 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text2 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text2 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text2 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text2", error });
  }
});

router.put("/update-text3/:id", async (req, res) => {
  try {
    const { text3 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text3 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text3 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text3 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text3", error });
  }
});

router.put("/update-text4/:id", async (req, res) => {
  try {
    const { text4 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text4 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text4 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text4 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text4", error });
  }
});

router.put("/update-text5/:id", async (req, res) => {
  try {
    const { text5 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text5 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text5 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text5 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text5", error });
  }
});

router.put("/update-text6/:id", async (req, res) => {
  try {
    const { text6 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text6 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text6 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text1 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1", error });
  }
});
router.put("/update-text7/:id", async (req, res) => {
  try {
    const { text7 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text7 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text7 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text7 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text7", error });
  }
});

router.put("/update-text8/:id", async (req, res) => {
  try {
    const { text8 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text8 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text8 not found!" });
    }

    res
      .status(200)
      .json({ message: "Text8 updated successfully!", updatedText });
  } catch (error) {
    res.status(500).json({ message: "Error updating text8", error });
  }
});

// <<-----------------POST REQUEST -------------------->>
router.post("/save-texts", async (req, res) => {
  try {
    const {
      text1,
      primary1,
      secondary1,
      text2,
      primary2,
      secondary2,
      text3,
      primary3,
      secondary3,
      text4,
      primary4,
      secondary4,
      text5,
      primary5,
      secondary5,
      text6,
      primary6,
      secondary6,
      text7,
      primary7,
      secondary7,
      text8,
      primary8,
      secondary8,
    } = req.body;

    const newText = new Text({
      text1,
      primary1,
      secondary1,
      text2,
      primary2,
      secondary2,
      text3,
      primary3,
      secondary3,
      text4,
      primary4,
      secondary4,
      text5,
      primary5,
      secondary5,
      text6,
      primary6,
      secondary6,
      text7,
      primary7,
      secondary7,
      text8,
      primary8,
      secondary8,
    });

    const savedText = await newText.save();

    res.status(201).json({
      message: "Texts and colors saved successfully!",
      savedText,
    });
  } catch (error) {
    console.error("Error saving texts and colors:", error);
    res.status(500).json({
      message: "Error saving texts and colors",
      error,
    });
  }
});

// <<-------------------- GET routes ahead ---------------->>
router.get("/get-text1/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text1: document.text1 });
  } catch (error) {
    console.error("Error fetching text1:", error);
    res.status(500).json({ message: "Error fetching text1", error });
  }
});

router.get("/get-text2/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text2: document.text2 });
  } catch (error) {
    console.error("Error fetching text2:", error);
    res.status(500).json({ message: "Error fetching text2", error });
  }
});

router.get("/get-text3/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text3: document.text3 });
  } catch (error) {
    console.error("Error fetching text3:", error);
    res.status(500).json({ message: "Error fetching text3", error });
  }
});

router.get("/get-text4/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text4: document.text4 });
  } catch (error) {
    console.error("Error fetching text4:", error);
    res.status(500).json({ message: "Error fetching text4", error });
  }
});
router.get("/get-text5/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text5: document.text5 });
  } catch (error) {
    console.error("Error fetching text5:", error);
    res.status(500).json({ message: "Error fetching text5", error });
  }
});
router.get("/get-text6/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text6: document.text6 });
  } catch (error) {
    console.error("Error fetching text6:", error);
    res.status(500).json({ message: "Error fetching text6", error });
  }
});

router.get("/get-text7/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text7: document.text7 });
  } catch (error) {
    console.error("Error fetching text7:", error);
    res.status(500).json({ message: "Error fetching text7", error });
  }
});

router.get("/get-text8/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }
    res.status(200).json({ text8: document.text8 });
  } catch (error) {
    console.error("Error fetching text8:", error);
    res.status(500).json({ message: "Error fetching text8", error });
  }
});

router.get("/get-all-texts/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }

    res.status(200).json({
      texts: {
        text1: document.text1,
        text2: document.text2,
        text3: document.text3,
        text4: document.text4,
        text5: document.text5,
        text6: document.text6,
        text7: document.text7,
        text8: document.text8,
        text9: document.text9,
        text10: document.text10,
        text11: document.text11,
        text12: document.text12,
        text13: document.text13,
      },
    });
  } catch (error) {
    console.error("Error fetching all texts:", error);
    res.status(500).json({ message: "Error fetching all texts", error });
  }
});
router.get("/get-all-colors/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }

   
    const colors = {
      primary1: document.primary1,
      secondary1: document.secondary1,
      primary2: document.primary2,
      secondary2: document.secondary2,
      primary3: document.primary3,
      secondary3: document.secondary,
      primary4: document.primary4,
      secondary4: document.secondary4,
      primary5: document.primary5,
      secondary5: document.secondary5,
      primary6: document.primary6,
      secondary6: document.secondary6,
      primary7: document.primary7,
      secondary7: document.secondary7,
      primary8: document.primary8,
      secondary8: document.secondary8,
    };

    res.status(200).json({ colors });
  } catch (error) {
    console.error("Error fetching primary colors:", error);
    res.status(500).json({ message: "Error fetching primary colors", error });
  }
});
router.get("/get-all-secondary-colors/:id", async (req, res) => {
  try {
    const document = await Text.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: "Document not found!" });
    }

    // Extract all secondary colors
    const secondaryColors = {
      secondary1: document.secondary1,
      secondary2: document.secondary2,
      secondary3: document.secondary3,
      secondary4: document.secondary4,
      secondary5: document.secondary5,
      secondary6: document.secondary6,
      secondary7: document.secondary7,
      secondary8: document.secondary8,
      secondary9: document.secondary9,
      secondary10: document.secondary10,
    };

    res.status(200).json({ secondaryColors });
  } catch (error) {
    console.error("Error fetching secondary colors:", error);
    res.status(500).json({ message: "Error fetching secondary colors", error });
  }
});
router.put("/update-text1/:id", async (req, res) => {
  try {
    const { text1, primary1, secondary1 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text1, primary1, secondary1 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});

router.put("/update-text2/:id", async (req, res) => {
  try {
    const { text2, primary2, secondary2 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text2, primary2, secondary2 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text2 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});
router.put("/update-text3/:id", async (req, res) => {
  try {
    const { text3, primary3, secondary3 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text3, primary3, secondary3 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});

router.put("/update-text4/:id", async (req, res) => {
  try {
    const { text4, primary4, secondary4 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text4, primary4, secondary4 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});

router.put("/update-text5/:id", async (req, res) => {
  try {
    const { text5, primary5, secondary5 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text5, primary5, secondary5 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text2 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});
router.put("/update-text6/:id", async (req, res) => {
  try {
    const { text6, primary6, secondary6 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text6, primary6, secondary6 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});

router.put("/update-text7/:id", async (req, res) => {
  try {
    const { text7, primary7, secondary7 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text7, primary7, secondary7 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text1 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});

router.put("/update-text8/:id", async (req, res) => {
  try {
    const { text8, primary8, secondary8 } = req.body;
    const updatedText = await Text.findByIdAndUpdate(
      req.params.id,
      { text8, primary8, secondary8 },
      { new: true, runValidators: true }
    );

    if (!updatedText) {
      return res.status(404).json({ message: "Text2 not found!" });
    }

    res.status(200).json({
      message: "Text1 and colors updated successfully!",
      updatedText,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating text1 and colors", error });
  }
});
module.exports = router;
