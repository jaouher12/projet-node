const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const cartSchema = new mongoose.Schema({
  idUser : {
    type: ObjectID,
     required: true,
     ref: 'User'
   },
  products: [{
    productId: {
     type: ObjectID,
     ref: 'Product',
     required: true
  },
  nameProduct: String,
  price: {
    type: Number,
    required: true,
  },
  quantity: {
     type: Number,
     required: true,
     min: 1,
     default: 1},
   }],
   totalePrice:{
    type: Number,
    
   }
   
  
  }, {
    timestamps: true
    });

module.exports = mongoose.model("cart", cartSchema);