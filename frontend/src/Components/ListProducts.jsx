import { useState } from 'react'
import { Box, Divider, List, ListItem, Typography } from '@mui/material'
import { NavLink } from 'react'
import ProductCard from './ProductCard'
import '../assets/styles/homepage.css'
function ListProducts({ title, list }) {
  return (
    <Box>
       <Box><h1>{title}</h1></Box>
      <Box id='productList' sx={{
        display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', alignItems: 'center',
        margin: '10px 1px'
      }}>
        {
          list.map((item, index) => {
            return (
              title==item.type
              ?
              <ProductCard key={index} item={item} />
              :
              null
            )
          })
        }
      </Box>
    </Box>
  )
}

export default ListProducts