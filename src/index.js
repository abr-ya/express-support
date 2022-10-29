/* eslint-disable no-unused-vars */
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;
const FRONT_LIST = [process.env.FRONT1, process.env.FRONT2, process.env.FRONT3]

// Connect to database
connectDB();

const app = express();
app.use(cors({ origin: FRONT_LIST, credentials: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Support Desk API!" });
});
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

// Middlewares
app.use(errorHandler);

// Start
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
