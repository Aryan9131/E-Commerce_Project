import { useState } from 'react'
import {Box, Divider, List, ListItem, Typography} from '@mui/material'
import {NavLink} from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

function Navbar(){
  const navigate=useNavigate()
  const handleNavigate=(url)=>{
       navigate(url);
  }
  const {cartList} =useSelector((state)=>state.products)
  return (
    <Box sx={{height:'50px', width:'100vw', display:'flex', marginRight:'20px', alignItems:'center'}}>
        <Box sx={{ margin:'0px 10px'}}>
            <Typography>E-Commerce</Typography>
        </Box>
        <Box sx={{marginLeft:"15px", display:'flex', width:{sx:'80%', md:'20%'}}}>
            <a href="/" style={{textDecoration:'none', color:'black', cursor:'pointer'}}  onClick={(e)=>{ e.preventDefault(); handleNavigate('/')}}>Home</a>
            <Box sx={{position:'relative',marginLeft:"20px",width:'20px', display:'flex', alignItems:'center'}}>
               <a href="/cart" onClick={(e)=>{e.preventDefault(); handleNavigate('/cart')}}><ShoppingCartIcon/></a>
               <Typography sx={{position:'absolute', top:'-12px', right:'-6px', color:'blue', fontWeight:'800'}}>{cartList.length}</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar