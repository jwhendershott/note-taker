const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
app.get('/',(req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/db.json')));


app.post('/api/notes', function(req, res) {
    const noteOne = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    const noteTwo = req.body;
    const newId = (noteOne.length).toString();
    noteTwo.id = newId;
    noteOne.push(noteTwo);

    fs.writeFileSync('./db/db.json', JSON.stringify(noteOne));
    console.log('Note successfully added');
    res.json(noteOne);
})

// Attempted to set button to delete, but am currently unable to get it to function.
// app.delete("/api/notes/:id", function(req, res) {
//     let currentNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
//     let noteID = req.params.id;
//     let newID = 0; 

app.listen(PORT, () => console.log(`App listiening on http://localhost:${PORT}`));