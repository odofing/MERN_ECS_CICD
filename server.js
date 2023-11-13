const express = require('express');
const app = express();
// const env = require('dotenv').config()
// const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 8080;
// Database connection
// mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`), console.log('db connected');

// db schemas
// const Product = mongoose.model('Product', { name: String, price: Number });
app.get('/', (req, res) => {
    return res.send('Welcome to Node js, express js in Docker v2.5');
});

app.post('/api/products', async (req, res) => {
    const product = new Product({ name: req.body.name, price: req.body.price });
    const savedProduct = await product.save();
    return res.status(201).json(savedProduct);
});

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    return res.json(products);
});

app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.deleteOne({ id: req.params.id });
    return res.json(product);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
