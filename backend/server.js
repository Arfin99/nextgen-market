import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send("Backend Service is Running..")
});

app.get("/api/products", (req, res) => {
    res.send(products);
});

app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p._id === req.params.id);
    res.send(product);
})

app.listen(port, () => console.log(`Server running on port ${port}`));