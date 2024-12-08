const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./config/dbcon");
const textRoutes = require("./routes");
const cors = require("cors");

const app = express();
const port = 8003;

app.use(express.json());
app.use(cors());
connectToDatabase();

app.use("/api", textRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
