const htmlRoutes = require("./routes/htmlRoutes");
const express = require('express');
const app = express();
const { notes } = require('./db/db');
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
    res.json(notes);
  });

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    notes.push(req.body)
    res.json(req.body);
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id
    for (var i = 0; i < notes.length; i++) {
        if ( id === notes[i].id ) {
            notes.splice(i, 1)
        }
    }
    res.json({})
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});