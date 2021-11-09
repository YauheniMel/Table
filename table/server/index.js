const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
app.use(express.urlencoded())
app.use(express.json())
const port = process.env.PORT || 5000;

const dataJSON = path.resolve(__dirname, './public/data/data.json');


// need fix error request

//Body table
// GET
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

    const resData = JSON.parse(data).bodyTable.filter((item) => item.id == lineId);
    res.send(resData);
  });
});

//POST
app.post('/api', (req, res) => {
  let prevData;
  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    prevData = JSON.parse(data);

    req.body.id = +new Date();

    const newData = JSON.stringify({
      ...prevData,
      bodyTable: [...prevData.bodyTable, req.body]
    });


    fs.writeFile(dataJSON, newData, (err) => {
      if (err) throw new Error(err);

      res.send("File written successfully");
    })
  });
})

//DELETE
app.delete('/api/:lineId', (req, res) => {
  const { lineId } = req.params;
  let prevData;
  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    prevData = JSON.parse(data);


    const newData = JSON.stringify({
      ...prevData,
      bodyTable: [...prevData.bodyTable.filter(item => item.id != lineId)]
    });

    fs.writeFile(dataJSON, newData, (err) => {
      if (err) throw new Error(err);

      res.send("Deleted successfully");
    })
  });
})

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
