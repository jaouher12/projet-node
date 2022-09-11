const Product = require("../Models/products");
const User = require("../Models/User");
const Cart = require("../Models/carts");


 const getCart= async (req, res) => {
  const idUser = req.user._id;
  try {
      const cart = await Cart.findOne({ idUser });
  if (cart && cart.products.length > 0) {
       res.status(200).send(cart);
  } else {
        res.send(null);
  }
  } catch (error) {
      res.status(500).send();
  }
  };

const createCart = async (req, res) => {
  const idUser = req.user._id;
  const productId=req.params.id
const  pr= req.body;
quantity=pr.quantity
try {
    const cart = await Cart.findOne({ idUser });
    const findproduct = await Product.findOne({ _id: productId });
if (!findproduct) {
    res.status(404).send({ message: "product not found" });
    return;
}
    const price = findproduct.productPrice;
    const name = findproduct.productName;
//If cart already exists for user,
if (cart) {
    const productIndex = cart.products.findIndex((findproduct) => findproduct.productId ==  productId);
//check if product exists or not
if (productIndex > -1) {
    let product = cart.products[productIndex];
    product.quantity ++;
   
    console.log("test")
    
cart.products[productIndex] = product;
cart.totalePrice = cart.products.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
},0)
console.log("test")
   await cart.save();
   res.status(200).send(cart);
} else {
   cart.products.push({ productId, name, quantity , price });
   cart.totalePrice = cart.products.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
},0)
   
   await cart.save();
   res.status(200).send(cart);
}
} else {
//no cart exists, create one
const newCart = await Cart.create({
   idUser,
   products: [{ productId, name, quantity, price }],
   totalePrice : cart.products.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
},0)
   
});
return res.status(201).send(newCart);
}
} catch (error) {
   console.log(error);
   res.status(500).send("something went wrong");
}
};
const deletecart = async (req, res) => {
  const idUser = req.user._id;
  const productId = req.params.id;
  try {
     let cart = await Cart.findOne({ idUser });
     const productIndex = cart.products.findIndex((product) => product.productId == productId);
  if (productIndex > -1) {
       let product = cart.products[productIndex];
       cart.products.splice(productIndex, 1);
      cart = await cart.save();
      res.status(200).send(cart);
  } else {
      res.status(404).send("product not found");
  }
  } catch (error) {
     console.log(error);
     res.status(400).send();
  }
  };
module.exports = { createCart, getCart, deletecart};