const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//como deve ser os dados do schema.
const schema = new Schema({
   number: {
        type: String,
        required: true
   },
   createDate: {
       type: Date,
       required: true,
       default: Date.now
   },
   status: {
       type: String,
       required: true,
       enum: ['created', 'done'],
       default: 'created'
   },
   customer: {
       type: mongoose.Schema.Types.ObjectId, //aqui é a referencia ao costumer
       ref: 'Costumer'
   },
   items: [{
        quantity: {
            type: String,
            required: true,
            default: 1
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId, //aqui é a referencia ao costumer
            ref: 'Product'
        }
   }]
   
});


module.exports = mongoose.model('Order', schema);