const express = require('express');
const morgan = require('morgan');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
// app.use(bodyParser.json());
app.use(cors());

app.get('/here', function (req, res) {
  res.send({ val: 'Y' });
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server is listening to ${port}`);
