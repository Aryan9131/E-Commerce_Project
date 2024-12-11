const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  sessionId:{ type: String },
  paymentIntentId: { type: String },
  status: { type: String, enum: ['pending','success', 'failed'], default: 'pending' },
  transactionId: { type: String },
});

 const Order = mongoose.model('Order', orderSchema);

 module.exports=Order
