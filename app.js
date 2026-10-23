const express = require("express");

const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Headphones", price: 2000 }
];

app.get("/", (req, res) => {
  res.send("Welcome to ShopEasy!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("ShopEasy running on port 3000");
  });
}

module.exports = app;
