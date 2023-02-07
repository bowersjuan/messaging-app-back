const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(cors);
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("App running...");
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

module.exports = app;
