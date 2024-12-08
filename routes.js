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

module.exports = router;
