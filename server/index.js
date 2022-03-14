const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const multer = require('multer');

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

const port = process.env.PORT || 5000;

const dataFolder = path.resolve(__dirname, './public/data');
const photoFolder = path.resolve(__dirname, './public/photo');
const dataJSON = path.resolve(dataFolder, 'data.json');

if (!fs.existsSync(photoFolder)) {
  fs.mkdirSync(photoFolder, { recursive: true });
}

let imageName;

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, photoFolder);
  },
  filename: (req, file, cb) => {
    if (file.originalname) {
      imageName = +new Date() + file.originalname.match(/.[\w]+$/g, '');

      cb(null, imageName);
    }
  },
});

const upload = multer({ storage: storageConfig });

//Body table
// GET
app.get('/api/:pageNumber', (req, res) => {
  const { pageNumber } = req.params;

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);
    // pagination
    const obj = JSON.parse(data);
    const pageContent = obj.bodyTable.slice(
      (pageNumber - 1) * 5,
      pageNumber * 5
    );

    const totalPage = Math.ceil(obj.bodyTable.length / 5);
    const resData = {
      ...data,
      bodyTable: [...pageContent],
    };
    resData.totalPage = totalPage;

    res.send(resData);
  });
});

app.get('/details/:lineId', (req, res) => {
  const { lineId } = req.params;

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    const resData = JSON.parse(data).bodyTable.filter(
      (item) => item.id == lineId
    );
    res.send(resData);
  });
});

// POST
app.post('/api', upload.single('photo'), (req, res) => {
  const request = req.body;

  // parse formdata
  request.isChecked === 'false'
    ? (request.isChecked = false)
    : (request.isChecked = true);

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    let prevData = JSON.parse(data);

    request.id = +new Date();
    request.photoName = imageName;

    let newData;
    if (JSON.stringify(prevData) === '{}') {
      //first post
      newData = JSON.stringify({
        bodyTable: [request],
        isAllChecked: false,
      });
    } else {
      newData = JSON.stringify({
        ...prevData,
        bodyTable: [...prevData.bodyTable, request],
      });
    }

    fs.writeFile(dataJSON, newData, (err) => {
      if (err) throw new Error(err);

      res.send('Data uploaded successfully');
    });
  });
});

//DELETE
app.delete('/api/:lineId', (req, res) => {
  const { lineId } = req.params;

  if (lineId.match(/,/)) {
    const arrId = lineId.match(/[0-9]+/gim);
    console.log('xxxxxxxxxx'); // if multi
  } else {
    fs.readFile(dataJSON, (err, data) => {
      if (err) throw new Error(err);

      let prevData = JSON.parse(data);

      const newData = JSON.stringify({
        ...prevData,
        bodyTable: [
          ...prevData.bodyTable.filter((item) => {
            if (item.id == lineId) {
              fs.unlink(`${photoFolder}/${item.photoName}`, (err) => {
                if (err) throw new Error(err);
              });
            } else {
              return item;
            }
          }),
        ],
      });

      fs.writeFile(dataJSON, newData, (err) => {
        if (err) throw new Error(err);

        res.send('Data deleted successfully');
      });
    });
  }
});

//PUT
app.put('/api/:lineId', (req, res) => {
  const { lineId } = req.params;

  fs.readFile(dataJSON, (err, data) => {
    if (err) throw new Error(err);

    let prevData = JSON.parse(data);

    const newData = JSON.stringify({
      ...prevData,
      bodyTable: [
        ...prevData.bodyTable.map((item) => {
          if (item.id == lineId) {
            item.evaluation = req.body.value;
            return item;
          } else {
            return item;
          }
        }),
      ],
    });

    fs.writeFile(dataJSON, newData, (err) => {
      if (err) throw new Error(err);

      res.send('Evaluation done');
    });
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Resource not found');
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
