import { createSlice } from '@reduxjs/toolkit'
// Slice
const slice = createSlice({
  name: 'products',
  initialState: {
    cartList: [],
    buyList:[],
    clickedProduct:null
  },
  reducers: {
    hanndleQuantityIncrease: (state, action) => {
      state.cartList = state.cartList.map((item) => {
        if (item.id === action.payload.itemId) {
          item.quantity++;
        }
        return item;
      });
    },
    hanndleQuantityDecrease: (state, action) => {
      state.cartList = state.cartList.filter((item) => {
        if (item.id === action.payload.itemId) {
          item.quantity--;
        }
        return item.quantity > 0;
      });
    },
    setClickedProduct: (state, action) => {
      console.log("clicked product : "+JSON.stringify(action.payload))
      state.clickedProduct = action.payload.clickedProduct;
    },
    clearClickedProduct: (state, action) =>  {
        state.clickedProduct = null;
    },
    addItemToCart:(state, action)=>{
        console.log("item get to add in cart : "+JSON.stringify(action.payload))
        state.cartList.push(action.payload.item)
    },
    removeItemFromCart:(state, action)=>{
        console.log("item get to removeItemFromCart : "+JSON.stringify(action.payload))
        state.cartList = state.cartList.filter((product)=>product.id!=action.payload.id)
    },
    addToBuyList:(state, action)=>{
      console.log("item get to buyList : "+JSON.stringify(action.payload))
      state.buyList=action.payload.list
  },
    removeBuyList:(state, action)=>{
      console.log("item get to removeBuyList : "+JSON.stringify(action.payload))
      state.buyList = []
  }
  },
});
export default slice.reducer
// Actions
export const {hanndleQuantityIncrease,hanndleQuantityDecrease ,setClickedProduct, clearClickedProduct, addItemToCart, removeItemFromCart, addToBuyList, removeBuyList} = slice.actions