const express = require('express');
const app = express();
const { db } = require('./db/db');
const path = require("path");
const PORT = process.env.PORT || 3001;

app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

app.get('/api/db', (req, res) => {
    res.json(db);
  });

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
