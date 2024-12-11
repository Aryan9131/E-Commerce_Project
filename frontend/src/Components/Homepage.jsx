import React from 'react';
import { Box, Divider, List } from '@mui/material';
import Navbar from './Navbar';
import ListProducts from './ListProducts';
import { products } from '../api/useApi';
function HomePage() {
   

    return (
        <Box sx={{ width: '100vw'}}>
            <Navbar  products={products}/>
            <ListProducts  title={'topwear'} list={products}/>
            <Divider />
            <ListProducts title={'bottomwear'} list={products} />
        </Box>
    );
}

export default HomePage;
