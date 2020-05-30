const express = require('express');
const app = express();
const { db } = require('./db/db');
const path = require("path");

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

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

