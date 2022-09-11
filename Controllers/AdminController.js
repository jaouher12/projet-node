

const Product = require("../Models/products");
const User = require("../Models/User");
const createProduct = async (req, res) => {
    const product = req.body;
    try {
      console.log("test")
      const newproduct = new Product({
        productName:product.productName,
        description:product.description,
        productPrice:product.productPrice,
        user: req.user,
         
      });
      await newproduct.save();
      res.status(200).json(newproduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      if (users.length == 0) {
        res.status(401).json({ msg: "your database is empty " });
      } else {
        res.status(200).json({ users });
      }
    } catch (error) {
      res.status(400).json({ msg: "somthing is wrong" });
    }
  };
  const getOneUser = async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findById(id);
      res.status(200).json({ user: user });
    } catch (error) {
      res.status(400).json({ msg: "operation failed" });
    }
  };
 const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if(user.role===0){
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).json({ msg: "user is sucessfylly delted ", users });
    }
    else{
      res.status(400).json({ msg: "delete is failed (he is admin)" });
    } } catch (error) {
    res.status(400).json({ msg: "delete is failed" });
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  
  try {
    const finduser = await User.findById(id);
    if(finduser.role===0){
      console.log("test")
    await User.findByIdAndUpdate(id, user);
    res.status(200).json({ msg: "user is sucessfylly updated " });
  }} catch (error) {
    res.status(400).json({ msg: "update is failed" });
  }
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.findByIdAndDelete(id);
    const products = await Product.find();
    res.status(200).json({ msg: "product is sucessfylly delted ", Product });
  } catch (error) {
    res.status(400).json({ msg: "delete is failed" });
  }
};
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
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;
  try {
    await Product.findByIdAndUpdate(id, product);
    res.status(200).json({ msg: "user is sucessfylly updated " });
  } catch (error) {
    res.status(400).json({ msg: "update is failed" });
  }
};


module.exports = { createProduct ,getAllUsers,getOneUser,deleteUser,updateUser,getAllProducts,deleteProduct,updateProduct};
