const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signupRoutes = require('./routes/signup_route');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

app.use('/api/auth', signupRoutes);

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  sku: String,
  image: String,
  relatedImages: [String],
  colors: [String],
  sizes: [String],
  details: String,
  exchanges: String,
  isNew: Boolean
});

const MiniDress = mongoose.model('MiniDress', productSchema);

app.get('/api/minidresses', async (req, res) => {
  try {
    const products = await MiniDress.find();
    res.json(products);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});