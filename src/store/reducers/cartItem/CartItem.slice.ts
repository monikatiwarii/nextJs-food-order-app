import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartItemsType, cartItemType } from '../../../types/redux/cartItem.type';

const initialState: cartItemsType = {
  cartItems: []
};

const CartItems = createSlice({
  name: 'CartItems',
  initialState,
  reducers: {
    setCartData: (state: cartItemsType, { payload }: PayloadAction<cartItemType>) => {
      let alreadyExist = state.cartItems.findIndex(data => data.foodId === payload.foodId);
      if (alreadyExist >= 0) {
        state.cartItems[alreadyExist] = payload;
      } else {
        state.cartItems.push(payload);
      }
    },
    removeCartItem(state: cartItemsType, {payload}:  PayloadAction<cartItemType>){
      state.cartItems= state.cartItems.filter( data => data.foodId !== payload.foodId)
    }
  }
});

export default CartItems.reducer;
export const { setCartData } = CartItems.actions;
export const { removeCartItem } = CartItems.actions;
