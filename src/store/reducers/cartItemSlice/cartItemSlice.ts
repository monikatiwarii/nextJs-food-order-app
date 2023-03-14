import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { cartItemsType, cartItemType } from '../../../types/redux/cartItem.type';
import { addFoodItemToCart } from './caerItem.api';

const initialState: any = {
  cartItems: [],
  quantity : 0,
  total : 0,
  userId :0
};

const CartItems:any = createSlice({
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
    removeCartItem(state: cartItemsType, { payload }: PayloadAction<cartItemType>) {
      state.cartItems = state.cartItems.filter(data => data.id !== payload.id);
    },
    clearCartData(state: cartItemsType) {
      return { ...state, cartItems: [] };
    }
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
export const { removeCartItem } = CartItems.actions;
export const { clearCartData } = CartItems.actions;
