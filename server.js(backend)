// backend/server.js or index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/test', (req, res) => {
  res.json({ message: 'API connected successfully!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
  res.send('Welcome to the Local Store Backend!');
});
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Apple', price: 30 },
    { id: 2, name: 'Banana', price: 20 },
    { id: 3, name: 'Orange', price: 25 },
    { id: 4, name: 'Mango', price: 50 },
    { id: 5, name: 'Grapes', price: 40 }
  ];
  
  res.json(products);
});
