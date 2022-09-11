const express = require("express");
const router = express.Router();
const { createCart, getCart ,deletecart} = require("../Controllers/cartController");
const isAuth=require('../Midelware/auth')
router.post("/addCart/:id",isAuth, createCart);
router.get("/showcart",isAuth, getCart);
router.delete("/deleteCart/:id",isAuth, deletecart);

module.exports = router;