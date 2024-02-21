const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const product = require('./models/productModel');

app.use(cors());
app.use(express.json());

// Get all products
app.get('/', (req, res) => {
    product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err));
});

// Add a new product
app.post('/addPro', async (req, res) => {
    product.create(req.body)
        .then(product => res.json("Product added"))
        .catch(err => res.json(err));
});

// Delete a product by ID
app.delete('/deletePro/:deleteid', async (req, res) => {
    try {
        const id = req.params.deleteid;
        const deleteId = await product.deleteOne({ _id: id });
        console.log(deleteId);
        res.status(201).json({ success: true, error: false, message: "Product deleted" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, error: true, message: "not found", data: error });
    }
});

// Updated product details
app.put('/updatePro/:productId', async (req, res) => {
    try {
        const { productId } = req.params;
        const updatedProduct = req.body;
        await product.findByIdAndUpdate(productId, updatedProduct);
        res.json({ success: true, message: "Product updated successfully" });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: "Failed to update product" });
    }
});


mongoose.connect('mongodb+srv://arunraj44799:arunraj44799@cluster0.n9zf7go.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(4004, () => {
        console.log("server started at http://localhost:4004");
    });
}).catch((err) => {
    console.log(err);
})

