import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../api";
import { foodItemType } from "../../../types/constants/foodItem.type";
import { cartItemType } from "../../../types/redux/cartItem.type";


export const addFoodItemToCart = createAsyncThunk('api/cart',async(foodDetails : any)=>{
    const response = await axios(`${baseURL}/api/cart`,foodDetails)
    console.log('thunk response---------------',response)
}) 