const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/',(req, res) => res.sendFile(path.join(__dirname, './Develop/public/index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, './Develop/public/notes.html')));
app.get('/api/notes', (req,res) => res.sendFile(path.json()));


app.listen(PORT, () => console.log(`App listiening on http://localhost:${PORT}`));