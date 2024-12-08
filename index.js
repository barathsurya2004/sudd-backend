const express = require('express');
const mongoose = require('mongoose');
const connectToDatabase = require('./config/dbcon');
const textRoutes = require('./routes');

const app = express();
const port = 8003;


app.use(express.json());


connectToDatabase();


app.use('/api', textRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
