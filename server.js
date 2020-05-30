const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { db } = require('./db/db');
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "./public/notes.html"));
    });

app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, './public/index.html'));
    });

app.get('/api/db', (req, res) => {
    res.json(db);
  });

app.post('/api/db', (req, res) => {
    console.log(req.body);
    // req.body.id = db.length.toString();

    // const note = saveNote(req.body, db);

    res.json(req.body);
});



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
