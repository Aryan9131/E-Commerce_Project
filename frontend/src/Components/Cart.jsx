import { useState } from 'react';
import { Box, Button, Checkbox, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../redux/slices/ProductSlice';
import { addToBuyList } from '../redux/slices/ProductSlice';
import { useNavigate } from 'react-router-dom';
import { hanndleQuantityIncrease, hanndleQuantityDecrease } from '../redux/slices/ProductSlice';
function Cart() {
  const { cartList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate=useNavigate()
  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  const handleSubmit = () => {
    console.log('Selected item IDs:', JSON.stringify(selectedItems));
    // You can handle further actions here, like sending the selected IDs to a backend
    const selectedProducts = cartList.filter((item) => selectedItems.includes(item?.id));
    dispatch(addToBuyList({list : selectedProducts}))
    navigate('/payment')
  };
 
  return (
    <Box
      sx={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {cartList.map((item) => (
        <Box
          key={item?.id}
          sx={{
            backgroundColor: 'white',
            margin: '10px 0px',
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100vw', md: '80vw' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={selectedItems.includes(item?.id)}
              onChange={() => handleCheckboxChange(item?.id)}
            />
            <Box sx={{ width: { xs: '100%', md: '30%' } }}>
              <img src={item?.url} alt="img" width="100px" height="150px" />
            </Box>
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography sx={{ marginBottom: '10px' }}>Price : {item?.price}</Typography>
              <Typography sx={{ marginBottom: '10px' }}>Category : {item?.category}</Typography>
              <Typography sx={{ marginBottom: '10px' }}>Quantity : <span onClick={()=>{dispatch(hanndleQuantityDecrease({itemId:item?.id}))}} style={{color:'blue', fontWeight:'800', cursor:'pointer'}}>-</span> {item?.quantity} <span onClick={()=>{dispatch(hanndleQuantityIncrease({itemId:item?.id}))}} style={{color:'blue', fontWeight:'800', cursor:'pointer'}}>+</span> </Typography>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(removeItemFromCart({ id: item?.id }));
                  setSelectedItems((prevSelectedItems) =>
                    prevSelectedItems.filter((id) => id !== item?.id)
                  );
                }}
              >
                Remove
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{ marginTop: '20px' }}
        onClick={handleSubmit}
      >
        CheckOut
      </Button>
    </Box>
  );
}

export default Cart;
