const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const { Item } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.on("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

db.on("error", (error) => {
  console.error("Error connecting to the database:", error);
});
