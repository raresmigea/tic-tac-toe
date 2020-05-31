import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/players', function (req, res) {
  res.send('X O');
  res.end();
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`server is listening to ${port}`);
