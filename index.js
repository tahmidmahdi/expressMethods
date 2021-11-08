const express = require('express');

const app = express();

const router = express.Router({
  caseSensitive: true,
});
const port = 3000;

// requiring
app.use(router);
app.use(express.json());
app.use(express.raw());
app.use(express.text());
// new rules for urlencoded()
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(`${__dirname}/public/`, {
    index: 'home.html',
  })
);

// for express.json()

router.get('/', (req, res) => {
  res.send('This is home page');
});
router.get('/about', (req, res) => {
  res.send('This is about page');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('This is home JSON');
});

// for express.raw()
app.post('/raw', (req, res) => {
  res.send('This is express.raw() test');
  console.log(req.body);
});

// for express.text()
app.post('/text', (req, res) => {
  res.send('This is express.text()');
  console.log(typeof req.body);
});

// for express.urlencoded()
app.post('/form', (req, res) => {
  res.send('Here is a form data');
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
