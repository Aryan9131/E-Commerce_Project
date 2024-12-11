import { useState } from 'react'
import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../redux/slices/ProductSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function ProductDetail({ title, list }) {
    const {clickedProduct} =useSelector((state)=>state.products)
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const handleAddToCart=()=>{
        dispatch(addItemToCart({item :clickedProduct}));
        navigate('/')
    }
  return ( 
    <Box sx={{ width:'100vw', height:'100vh', display:'flex',flexDirection:'column', justifyContent:'center'}}>
         <Navbar/>
        <Box sx={{ width:{xs:'100vw', md:'80vw'},
                  height:'90%', display:'flex',
                  flexDirection:{xs:'column', md:'row'},
                  justifyContent:'center',alignItems:'center'         
                 }}>
            <Box sx={{width:{xs:'100%', md:'50%'}, height:'50vh'}}>
              <img width='100%' height='100%' src={clickedProduct.url ? clickedProduct.url : ""} alt="product-Img" />
            </Box>
            <Box sx={{color :'black',width:{xs:'100%', md:'40%'}, height:'50vh',display:'flex',flexDirection:'column', alignItems:'center' }}>
               <Typography variant='h4'>{clickedProduct.category}</Typography>
                <Divider sx={{width:'100%', border:'1px solid whitesmoke', marginBottom:'10px'}}/>
               <Typography>Price : {clickedProduct.price} rs</Typography>
               <Typography>Cloth : {clickedProduct.cloth}</Typography>
               <Typography>Color : {clickedProduct.color}</Typography>
               <Button variant="contained" sx={{color:'blue'}} onClick={handleAddToCart}>Add To Card</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ProductDetail