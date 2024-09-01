const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const signupRoutes = require('./routes/signup_route');
require('dotenv').config();
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

app.use('/api/auth', signupRoutes);

// Image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage }).fields([
  { name: 'product', maxCount: 1 },
  { name: 'related_image1', maxCount: 1 },
  { name: 'related_image2', maxCount: 1 },
]);

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));

app.post("/upload", upload, (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.files['product'][0].filename}`,
    related_image1_url: req.files['related_image1'] ? `http://localhost:${PORT}/images/${req.files['related_image1'][0].filename}` : null,
    related_image2_url: req.files['related_image2'] ? `http://localhost:${PORT}/images/${req.files['related_image2'][0].filename}` : null,
  });
});

// Schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  relatedImages: {
    type: [String],
    default: [],
  },
  category:{
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    default: [],
  },
  sizes: {
    type: [String],
    default: [],
  },
  details: {
    type: String,
    default: '',
  },
  exchanges: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  }
});

app.post('/addproduct', async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  }
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    sku: req.body.sku,
    image: req.body.image,
    relatedImages: req.body.relatedImages,
    category: req.body.category,
    colors: req.body.colors,
    sizes: req.body.sizes,
    details: req.body.details,
    exchanges: req.body.exchanges
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API for deleting products
app.post('/removeproduct', async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed");
  res.json({
    success: true,
    name: req.body.name
  });
});

// Creating API for getting all products
app.get('/allproducts', async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});

// creating endpoint for minidresses data
app.get('/minidresses', async (req, res) => {
  try {
    let products = await Product.find({ category: 'mini_dresses' });
    console.log("Mini Dresses Fetched.");
    res.send(products);
  } catch (error) {
    console.error("Error fetching mini dresses:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
