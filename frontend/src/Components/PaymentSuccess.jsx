import { Box, Button, Typography } from '@mui/material';
import Navbar from './Navbar' 
import { useNavigate } from 'react-router-dom';

function PaymentSuccess() {
  const navigate=useNavigate()
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'lightgreen', display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
      <Navbar/>
      <Box sx={{height:'100%',width:'100vw', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
         <Typography variant="h4">Thank you! Your payment was successful.</Typography>
        <Button onClick={()=>navigate('/')}>Go Back</Button>
      </Box>
    </Box>
  );
}

export default PaymentSuccess;
