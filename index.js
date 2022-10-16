const express = require("express");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Support Desk API",
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
