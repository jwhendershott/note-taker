const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({estrended: true}));
app.use(express.json());

app.get('/',(req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));
app.get('/notes',(req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/api/notes', function(req,res) {
    return res.sendFile(path.json(__dirname, 'Develop/db/db.json'));
})



app.listen(PORT, () => console.log(`App listiening on http://localhost:${PORT}`));