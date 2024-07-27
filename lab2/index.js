const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.send('Hello Bootcamp!');
});

app.get('/chau', (req, res) => {
  res.send('Chau Bootcamp!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});