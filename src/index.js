const express = require('express');
const { add, subtract, multiply, divide } = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/add/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.json({ result: add(a, b) });
});

app.get('/subtract/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.json({ result: subtract(a, b) });
});

app.get('/multiply/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  res.json({ result: multiply(a, b) });
});

app.get('/divide/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }
  res.json({ result: divide(a, b) });
});

app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Simple Calculator API',
    endpoints: [
      '/add/:a/:b',
      '/subtract/:a/:b', 
      '/multiply/:a/:b',
      '/divide/:a/:b'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
