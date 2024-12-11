import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './Components/Homepage'
import Cart from './Components/Cart'
import ProductDetail from './Components/ProductDetail'
import Payment from './Components/Payment'
import PaymentSuccess from './Components/PaymentSuccess'
import PaymentFailed from './Components/PaymentFailure'
function App() {
  return (
      <Routes>
         <Route path='/' element={ <HomePage/>}/>
         <Route path='/cart' element={ <Cart/>}/>
         <Route path='/payment' element={ <Payment/>}/>
         <Route path='/ProductDetail' element={ <ProductDetail/>}/>
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failed" element={<PaymentFailed />} />
      </Routes>
  )
}

export default App
