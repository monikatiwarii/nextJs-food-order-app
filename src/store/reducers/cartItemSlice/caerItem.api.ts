import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../api";
import { foodDetails } from "../../../types/constants/foodDetail.type";


let token =  typeof window !== 'undefined' && localStorage.getItem("token")? localStorage.getItem("token") : ``

export const addFoodItemToCart = createAsyncThunk('api/cart',async(foodDetails : foodDetails)=>{

    let url = `${baseURL}/api/cart`
    let method = `PATCH`
    let data= {}
    let headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    const response = await axios({method, url, headers, data: foodDetails})
   
    return response.data.payload[0] 
}) 