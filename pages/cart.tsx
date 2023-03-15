import { Button } from '@mui/material';
import Header from '../src/components/header/Header';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import Discount from '../src/components/cart/Discount';
import React, { useEffect, useState } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import CartData from '../src/components/cart/CartData';
import EmptyCart from '../src/components/cart/EmptyCart';
import { useDispatch, useSelector } from '../src/store';
import AuthComponent from '../src/components/common/AuthComponent';
import { useRouter } from 'next/router';
import callAPI from './api/callAPI';
import { addFoodItemToCart } from '../src/store/reducers/cartItemSlice/cartItem.api';
import { foodItemType } from '../src/types/constants/foodItem.type';
import { cartDataItemType } from '../src/types/constants/cartDataItems.types';
import { CartDataItem } from '../src/types/constants/cartDataItem.type';
import { Axios } from 'axios';

interface CartProps {
  cartDataItems : cartDataItemType | undefined
 
}
let isCoupenUsed: boolean = false;
const Cart: NextPage<CartProps> = ({cartDataItems}) => {
 
  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    router.push('/login')

  }

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [count,setCount] = useState<number>(0)

  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<string | number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [couponValue, setCouponValue] = useState<string>('');
  const [invalidCoupen, setInvalidCoupen] = useState<string>('');
  const [invalidCoupenButton, setInvalidCoupenButton] = useState<any>();
  
  const[cartData,setCartData] = useState<CartDataItem>()

  const [newTotal, setNewTotal] = useState<number>(0)


  const setNewCartData= async ()=>{
      let url = `cart`
      let method = `GET`  
     const response: any =  await callAPI(method, url) 

     setCartData(response?.data?.payload.cartData)
     setNewTotal(response?.data?.payload?.total)
     setGrandTotal(response?.data?.payload?.total)
    }
  
  useEffect(()=>{
    if(!!cartDataItems){
      if(Object.keys(cartDataItems).length > 0 ){
        setCartData(cartDataItems.cartData)
        setNewTotal(cartDataItems.total)
        setGrandTotal(cartDataItems.total)
      }
      else{
        setNewCartData()
      }  
    }
    
  },[])

  
  const decrementQuantity = (data:CartDataItem) => {
    dispatch(
      addFoodItemToCart({
        id: data.fooditem.id,
        action: 0
      })
    )
      setNewCartData()
      setCouponValue('')
      setDiscount(0)
      removeCoupon()

  };

  const incrementQuantity = (data : CartDataItem) => {
    if(data.quantity < 5){ 
    dispatch(
      addFoodItemToCart({
        id: data.fooditem.id,
        action: 1
      })
    )
  }
    setNewCartData()
    setCouponValue('')
    setDiscount(0)
    removeCoupon()
  };
  

  //to check coupon is valid or not and coupon type
  const applyCoupon = async() => {
    setInvalidCoupen('');
    
    let method = "GET"
    let url = `coupons/${couponValue}`
    let couponData: any = await callAPI(method,url) 

    // couponData = (!!couponData) ? couponData.data.payload : couponData

    if(couponData?.data.success){
      let couponRes = couponData?.data.payload;
      if(couponRes.type === "FLAT"){
        setDiscount(couponRes.value)
        setGrandTotal(newTotal-couponRes.value) 
      }
      else if(couponRes.type === "PERCENTAGE"){
        let discountValue = newTotal * ((couponRes.value)/100)
        setDiscount(discountValue)
        setGrandTotal(newTotal - discountValue) 
      }
      let removeCouponButton = (
        <Button
          onClick={removeCoupon}
          sx={{
            width: '50px',
            height: '40px',
            fontSize: '18px',
            marginLeft: '20px',
            marginTop: '20px',
            backgroundColor: '#FFC300',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#FC0303',
              color: '#ffffff'
            }
          }}>
          X
        </Button>
      );
      setInvalidCoupenButton(removeCouponButton);
      isCoupenUsed = true
    }
    else if(couponValue == ''){
      setInvalidCoupen('');

    }
    else{
      setInvalidCoupen('Invalid Coupon');
    }
  };
      // remove coupon
  const removeCoupon = () => {
    isCoupenUsed = false;
    setGrandTotal(newTotal);
    setDiscount(0);
    setCouponValue('');
    setInvalidCoupen('');
    setInvalidCoupenButton('');
  };

  //to get applied coupon text
  const handleChangeCoupon = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    isCoupenUsed = false;
    setInvalidCoupenButton('');
    setDiscount(0);
    setCouponValue(e.target.value);
  };

  const router = useRouter();
  const orderHandler = async() => {
    if (grandTotal !== 0) {
      let data = {
        coupon : couponValue,
        total : grandTotal
      }
      const orderResponse : any =  await callAPI("POST","checkout",data)
      localStorage.setItem('isOrdered', true.toString());
      router.push('/order');
      setLoading(true);
    }
  };

    return (
      <AuthComponent>
        <MaxWidthWrapper>
          <Header cartData={cartData}
          logoutHandler={logoutHandler}/>
          { !!cartData && Object.keys(cartData).length > 0 ? (
            <>
              <Discount
                total={total}
                discount={discount}
                grandTotal={grandTotal}
                couponValue={couponValue}
                invalidCoupen={invalidCoupen}
                invalidCoupenButton={invalidCoupenButton}
                applyCoupon={applyCoupon}
                handleChangeCoupon={handleChangeCoupon}
                orderHandler={orderHandler}
                isCoupenUsed={isCoupenUsed}
                newTotal={newTotal}
              />
              <CartData 
              cartData = {cartData}
              decrementQuantity={decrementQuantity} 
              incrementQuantity={incrementQuantity} />
            </>
          ) : (
            <EmptyCart />
          )}
        </MaxWidthWrapper>
      </AuthComponent>
    );
};


export const getServerSideProps : GetServerSideProps = async context => {
  let url = `cart`
  let method = `GET`  
  const cartDataItems: any = await callAPI(method, url)
  return {
    props: {
      cartDataItems: cartDataItems?.data?.payload || {}
    }
  };
};


export default Cart;
