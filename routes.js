const express = require('express');
const Text = require('./models/textmodel');

const router = express.Router();


router.put('/update-text1/:id', async (req, res) => {
    try {
        const { text1 } = req.body;
        const updatedText = await Text.findByIdAndUpdate(
            req.params.id,
            { text1 },
            { new: true, runValidators: true }
        );

        if (!updatedText) {
            return res.status(404).json({ message: 'Text1 not found!' });
        }

        res.status(200).json({ message: 'Text1 updated successfully!', updatedText });
    } catch (error) {
        res.status(500).json({ message: 'Error updating text1', error });
    }
});


router.put('/update-text2/:id', async (req, res) => {
    try {
        const { text2 } = req.body;
        const updatedText = await Text.findByIdAndUpdate(
            req.params.id,
            { text2 },
            { new: true, runValidators: true }
        );

        if (!updatedText) {
            return res.status(404).json({ message: 'Text2 not found!' });
        }

        res.status(200).json({ message: 'Text2 updated successfully!', updatedText });
    } catch (error) {
        res.status(500).json({ message: 'Error updating text2', error });
    }
});


router.put('/update-text3/:id', async (req, res) => {
    try {
        const { text3 } = req.body;
        const updatedText = await Text.findByIdAndUpdate(
            req.params.id,
            { text3 },
            { new: true, runValidators: true }
        );

        if (!updatedText) {
            return res.status(404).json({ message: 'Text3 not found!' });
        }

        res.status(200).json({ message: 'Text3 updated successfully!', updatedText });
    } catch (error) {
        res.status(500).json({ message: 'Error updating text3', error });
    }
});


router.put('/update-text4/:id', async (req, res) => {
    try {
        const { text4 } = req.body;
        const updatedText = await Text.findByIdAndUpdate(
            req.params.id,
            { text4 },
            { new: true, runValidators: true }
        );

        if (!updatedText) {
            return res.status(404).json({ message: 'Text4 not found!' });
        }

        res.status(200).json({ message: 'Text4 updated successfully!', updatedText });
    } catch (error) {
        res.status(500).json({ message: 'Error updating text4', error });
    }
});


// <<-----------------POST REQUEST -------------------->>
router.post('/save-texts', async (req, res) => {
    try {
        const { text1, text2, text3, text4 } = req.body;

     
        const newText = new Text({
            text1,
            text2,
            text3,
            text4,
        });

     
        const savedText = await newText.save();

        res.status(201).json({
            message: 'Texts saved successfully!',
            savedText,
        });
    } catch (error) {
        console.error('Error saving texts:', error);
        res.status(500).json({
            message: 'Error saving texts',
            error,
        });
    }
});


// <<-------------------- GET routes ahead ---------------->>
router.get('/get-text1/:id', async (req, res) => {
    try {
        const document = await Text.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found!' });
        }
        res.status(200).json({ text1: document.text1 });
    } catch (error) {
        console.error('Error fetching text1:', error);
        res.status(500).json({ message: 'Error fetching text1', error });
    }
});


router.get('/get-text2/:id', async (req, res) => {
    try {
        const document = await Text.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found!' });
        }
        res.status(200).json({ text2: document.text2 });
    } catch (error) {
        console.error('Error fetching text2:', error);
        res.status(500).json({ message: 'Error fetching text2', error });
    }
});


router.get('/get-text3/:id', async (req, res) => {
    try {
        const document = await Text.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found!' });
        }
        res.status(200).json({ text3: document.text3 });
    } catch (error) {
        console.error('Error fetching text3:', error);
        res.status(500).json({ message: 'Error fetching text3', error });
    }
});


router.get('/get-text4/:id', async (req, res) => {
    try {
        const document = await Text.findById(req.params.id);
        if (!document) {
            return res.status(404).json({ message: 'Document not found!' });
        }
        res.status(200).json({ text4: document.text4 });
    } catch (error) {
        console.error('Error fetching text4:', error);
        res.status(500).json({ message: 'Error fetching text4', error });
    }
});
module.exports = router;
