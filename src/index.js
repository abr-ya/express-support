/* eslint-disable no-unused-vars */
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API!" });
});
app.use("/api/users", require("./routes/userRoutes"));

// Middlewares
app.use(errorHandler);

// Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
