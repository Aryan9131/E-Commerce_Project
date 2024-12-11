import { Box, Typography } from '@mui/material';

function PaymentFailed() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4">Payment failed. Please try again.</Typography>
    </Box>
  );
}

export default PaymentFailed;
