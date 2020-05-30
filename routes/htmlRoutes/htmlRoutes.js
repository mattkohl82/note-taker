// Global Variables
var path = require("path")
const router = require('express').Router()

//HTML routes to load pages
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router