const express = require('express');
const bodyParser = require('body-parser');
const {executeDocker} = require('../docker/docker');

const port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/../../public'));

app.get('/', (req, res) => {
   res.send('Hello Express!');
});

app.post('/api/livecode', (req, res) => {
   // res.send(`Answer from api: ${req.body.text}`);
   executeDocker(req.body.lang, req.body.command).then((doc) => {
      res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});