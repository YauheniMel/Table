const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

const dataJSON = path.resolve(__dirname, './public/data/data.json');

//Body table

app.get('/api', (req, res) => {

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    res.send(data);
  });
});

app.get('/details/:lineId', (req, res) => {
  const { lineId } = req.params;

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).filter((item) => item.id == lineId);
    res.send(resData);
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
