require('dotenv').config();
const { v4: uuidv4 } = require('uuid'); // Import UUID to generate unique IDs

const connectDB =require('./config/mongoose')
const Order=require('./Model/Order')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51QUlqyABrkD54Rka4zVDyf4aZBvpbv5zwvXBhOyY8V0X3Gn3QaKM5bP3kSK92FIgZwvTDX7tYyajpDKTim8KRpRa00or9X6cH4');
const endpointSecret = 'whsec_60096d0de20afddf4c81c90ffcaff345fa3eaea86964a7aa1a0325fc228bfd13'; // Replace with your webhook secret
const app = express();
connectDB();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

let userEmail="";
// Webhook route must use express.raw()
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Use the raw body for signature verification
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
  }

  // Handle the event
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log(`Payment Intent ID: ${paymentIntent.id}`);
    console.log(`Amount: ${paymentIntent.amount}`);
    console.log(`Status: ${paymentIntent.status}`);
    const order = await Order.findOne({ email : userEmail });
     order.paymentIntentId=paymentIntent.id;
     await order.save();
  } 
  if (event.type === 'charge.succeeded') {
    const charge = event.data.object;
    console.log(`Charge ID (Transaction ID): ${charge.id}`);
    console.log(`Amount: ${charge.amount}`);
    console.log(`Payment Method: ${charge.payment_method_details.type}`);
    console.log(`Status: ${charge.status}`);
    const order = await Order.findOne({ email : userEmail });
     order.transactionId=charge.id;
     order.status='success'
     await order.save();
  }
});

  

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/create-checkout-session', async (req, res) => {
  console.log(" data we get --> ", JSON.stringify(req.body));
  const product = req.body.products;
  const updatedProducts=req.body.products.map((item)=>{
    const newItem={
       name:item.category,
       quantity:item.quantity,
       price:item.price
    }
    return newItem
  })
  const lineItems = product.map((item) => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: item.category,
      },
      unit_amount: item.price*100, // convert to the smallest unit of the currency (e.g., paise for INR)
    },
    quantity: item.quantity,
  }));

  try {
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5173/payment-success',
      cancel_url: 'http://localhost:5173/payment-failed',
     
    });

    // Check if payment_intent is present
    const newOrder= new Order({
        email:req.body.email,
        items:updatedProducts,
        sessionId:session.id,
    });
    await newOrder.save();
    res.json({ id: session.id});
    userEmail=req.body.email
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'An error occurred while creating the checkout session' });
  }
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
