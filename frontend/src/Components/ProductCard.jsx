import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {setClickedProduct} from '../redux/slices/ProductSlice'
export default function ProductCard({item}) {
    const dispatch =useDispatch();
    const navigate=useNavigate()
    const handleNavigate=()=>{
        dispatch(setClickedProduct({clickedProduct:item}))
        navigate('/ProductDetail')
    }
  return (
    <Card sx={{ minWidth: 350, margin:'0px 2px'}} onClick={handleNavigate}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250px"
          minheight='250px'
          image={item.url ? item.url :''}
          alt="green iguana"
          sx={{ objectFit: 'contain', objectPosition: 'center' }}
        />
      </CardActionArea>
    </Card>
  );
}
