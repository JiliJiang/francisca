const fs = require("fs");
//const uniqid = require("uniqid");
//const notesdb = require("../db/db.json");
//const { stringify } = require("querystring");
const router = require('express').Router();
const path = require('path')

const getNote = function () {
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'))
    const parsedData = JSON.parse(data)
    return parsedData
}

// Displays all notes
router.get("/notes", function (req, res) {
    res.json(getNote());
});

//Save new note, add to db and update the db.json file and the notes list in browser

const addNote = function (newNote) {
    const data = fs.readFileSync(path.join(__dirname, '../db/db.json'))
    const parsedData = JSON.parse(data)
    const title = newNote.title
    const text = newNote.text
    const id = Math.random().toString()
    const newNoteSave = { title: title, text: text, id: id }
    parsedData.push(newNoteSave)
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(parsedData))
}

router.post("/notes", function (req, res) {
    console.log("@@@@@", req.body)
    res.json(addNote(req.body));
});

//Disply one note when clicked on update
//router.put


//Deletes a note from db.json file
//router.delete
module.exports = router;