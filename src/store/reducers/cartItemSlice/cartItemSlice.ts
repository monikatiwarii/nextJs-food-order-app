import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { CartDataItem } from '../../../types/constants/cartDataItem.type';
import { CartData, cartDataItemType } from '../../../types/constants/cartDataItems.types';
import { cartItemsType, cartItemType } from '../../../types/redux/cartItem.type';
import { addFoodItemToCart } from './caerItem.api';

const initialState: any = {
  cartItems: [],
  quantity : 0,
  total : 0,
  userId :0
};

const CartItems:any= createSlice({
  name: 'CartItems',
  initialState,
  reducers: {
    setCartData: (state) => {  
      return{
        cartItems: [],
        quantity : 0,
        total : 0,
        userId :0
      }

    },
  },
  extraReducers :(builder)=>{
  
    builder.addMatcher(isAnyOf(addFoodItemToCart.fulfilled),(state,action)=>{
      state.cartItems = action.payload
      state.quantity = state.cartItems.quantity
    
    })
  }
});


export default CartItems.reducer;
export const { setCartData } = CartItems.actions;

