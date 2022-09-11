const express = require("express");
const router = express.Router();
const { addorder }= require("../Controllers/OrderController");
const isAuth=require('../Midelware/auth')
router.post("/addorder",isAuth, addorder);


module.exports = router;