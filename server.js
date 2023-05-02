const express = require('express');
const monogoose = require('mongoose');

const app = express();
const PORT = process.evv || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
