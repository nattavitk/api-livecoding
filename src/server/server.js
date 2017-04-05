const express = require('express');
const bodyParser = require('body-parser');
const {executeDocker} = require('../docker/docker');

const port = process.env.PORT || 3009;
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3003");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(bodyParser.json());

// app.use(express.static(__dirname + '/../../public'));

app.get('/', (req, res) => {
   res.send('Hello Express!');
});

app.post('/api/livecode', (req, res) => {
   // console.log('Get a request');
   executeDocker(req.body.lang, req.body.command).then((doc) => {
     console.log('API doc:', doc);
      res.send(doc);
   }, (e) => {
      res.status(400).send(e);
   });
});

app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});