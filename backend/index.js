require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8090;
const uri = process.env.MONGO_URL;


const app = express();

async function startServer() {
  try {
    await mongoose.connect(uri);
    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
}

startServer(); 