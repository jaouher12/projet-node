const express = require("express");
const router = express.Router();
const { createProduct ,getAllUsers,getOneUser,deleteUser,updateUser,getAllProducts,deleteProduct,updateProduct} = require("../Controllers/AdminController");
const isAuth=require('../Midelware/auth')
const isAdmin=require('../Midelware/isAdmin')
router.post('/addproduct',isAuth,isAdmin,createProduct)
router.get('/findAllUsers',isAuth,isAdmin,getAllUsers)
router.get('/findOneUsers/:id',isAuth,isAdmin,getOneUser)
router.delete('/deleteUser/:id',isAuth,isAdmin,deleteUser)
router.put('/updateUser/:id',isAuth,isAdmin,updateUser)
router.get('/findallProducts',isAuth,isAdmin,getAllProducts)
router.delete('/deleteProduct/:id',isAuth,isAdmin,deleteProduct)
router.put('/updateProduct/:id',isAuth,isAdmin,updateProduct)
module.exports = router;
