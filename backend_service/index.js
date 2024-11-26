const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes

// Get all products from Fake Store API
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Get a single product by ID from Fake Store API
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error.message);
    res.status(404).json({ error: 'Product not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend service running at http://192.168.0.114:${PORT}`);
});
