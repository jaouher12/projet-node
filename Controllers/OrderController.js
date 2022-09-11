const Product = require("../Models/products");
const User = require("../Models/User");
const Cart = require("../Models/carts");
const Order=require("../Models/order");



const addorder= async (req, res) => {
    const idUser = req.user._id;
    try {
        const cart = await Cart.findOne({ idUser });
    if (cart && cart.products.length > 0) {
        const neworder = new Order({
           
            user: req.user,
            cart: cart ,
            address: req.body.address,
            name: req.body.name,
            Modepayment: req.body.Modepayment
             
          });
          await neworder.save();
          res.status(200).json(neworder);
    } else {
          res.send(null);
    }
    } catch (error) {
        res.status(500).send();
    }
    };

    module.exports = { addorder };