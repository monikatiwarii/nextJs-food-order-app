import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { cartItemsType, cartItemType } from '../../../types/redux/cartItem.type';
import { addFoodItemToCart } from './caerItem.api';

const initialState: any = {
  cartItems: [],
  total : {
    grandTotal : 0,
    subtotal :0,
  },
  userId :0
};

const CartItems:any = createSlice({
  name: 'CartItems',
  initialState,
  reducers: {
    setCartData: (state) => {  
      return{
        cartItems: [],
        total : 0,
        userId :0
      }

    
      // let alreadyExist = state.cartItems.findIndex(data => data.foodId === payload.foodId);
      // if (alreadyExist >= 0) {
      //   state.cartItems[alreadyExist] = payload;
      // } else {
      //   state.cartItems.push(payload);
      // }
    },
    removeCartItem(state: cartItemsType, { payload }: PayloadAction<cartItemType>) {
      state.cartItems = state.cartItems.filter(data => data.id !== payload.id);
    },
    clearCartData(state: cartItemsType) {
      return { ...state, cartItems: [] };
    }
  },
  extraReducers :(builder)=>{
    // console.log('builder :: :: :: ', builder)
    // console.log('addFoodItemToCart :: :: :: :: :: :: ', addFoodItemToCart.fulfilled)
    builder.addMatcher(isAnyOf(addFoodItemToCart.fulfilled),(state,action)=>{
      state.cartItems = action.payload
      console.log("state-----------------",state)
      console.log("action payload-----------------",action.payload)
     // state.foodDetails = action.payload 
    })
  }
});

console.log('initial states-------------',initialState)

export default CartItems.reducer;
export const { setCartData } = CartItems.actions;
export const { removeCartItem } = CartItems.actions;
export const { clearCartData } = CartItems.actions;
