const express = require("express");
const mongoose = require("mongoose");
const connectToDatabase = require("./config/dbcon");
const mediaRoute = require("./gdriveroute");
const textRoutes = require("./routes");
const imageRoute = require("./imageupload");
const cors = require("cors");

const app = express();
const port = 8003;

app.use(express.json());
app.use(cors({
  origin: "*",
}));
connectToDatabase();

app.use("/api", textRoutes);
app.use("/api", mediaRoute);
app.use("/api", imageRoute);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
