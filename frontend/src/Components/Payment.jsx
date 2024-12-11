import { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Payment() {
    const [email, setEmail] = useState('');
    const { cartList } = useSelector((state) => state.products)
    const { buyList } = useSelector((state) => state.products)
    useEffect(()=>{
     console.log('Buy list --> '+JSON.stringify(buyList))
    },[buyList])
   
    const handleCheckout = async () => {
        try {
            const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
            const body={
                products :buyList,
                email
            }
            const headers={
                'Content-Type' :'application/json'
            }
            const stripeCallResponse=await fetch('http://localhost:5000/create-checkout-session',{
                method:'POST',
                headers:headers,
                body:JSON.stringify(body)
            })
            const session=await stripeCallResponse.json();
            console.log("Session we get : "+JSON.stringify(session))
           
            const stripe = await stripePromise;
            const result =  stripe.redirectToCheckout({ sessionId: session.id });
            if (result.error) {
                console.error('Stripe checkout error:', result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <Box sx={{ width: '100vw', height: '100vh' , display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h3>Welcome to Payment Gateway</h3>
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: '20px' }}
            />
            <Button variant="contained" onClick={handleCheckout}>
                Proceed to Pay
            </Button>
        </Box>
    );
}

export default Payment;

// pk_test_51QUlqyABrkD54RkaMpJJPsEx0fmLiYu3Q6dFHTvtbfuBBwGtB7RP66sI4uu273s3AeVAYpNOddeSqmDaxvqXteoA00r9GBhCm9
// sk_test_51QUlqyABrkD54Rka4zVDyf4aZBvpbv5zwvXBhOyY8V0X3Gn3QaKM5bP3kSK92FIgZwvTDX7tYyajpDKTim8KRpRa00or9X6cH4