const express = require("express");
const router = express.Router();
const { getAllProducts, getOneProduct  }= require("../Controllers/postController");
const isAuth=require('../Midelware/auth')
router.get("/allproduct",isAuth, getAllProducts);
router.get("/getoneproduct/:id",isAuth, getOneProduct );

module.exports = router;