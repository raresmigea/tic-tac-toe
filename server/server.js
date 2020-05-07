const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/here', function (req, res) {
  res.send('hello from the back-end.');
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server is listening to ${port}`);
