const Product = require("../Models/products");
const User = require("../Models/User");

const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      if (products.length == 0) {
        res.status(401).json({ msg: "your database is empty " });
      } else {
        res.status(200).json({ products });
      }
    } catch (error) {
      res.status(400).json({ msg: "somthing is wrong" });
    }
  };
  const getOneProduct = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      res.status(200).json({ product: product});
    } catch (error) {
      res.status(400).json({ msg: "operation failed" });
    }
  };
  module.exports = { getAllProducts, getOneProduct  };