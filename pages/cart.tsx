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
import { cartItemType } from '../src/types/redux/cartItem.type';

import { coupons, foodItem } from '../src/data/data';
import { useRouter } from 'next/router';
import { removeCartItem, setCartData } from '../src/store/reducers/cartItemSlice/cartItemSlice';
import callAPI from './api/callAPI';
import { addFoodItemToCart } from '../src/store/reducers/cartItemSlice/caerItem.api';

interface CartProps {
  cartDataItems : any | undefined
 
}
let isCoupenUsed: boolean = false;
const Cart: NextPage<CartProps> = ({cartDataItems}) => {
  

  let cartDataItem = useSelector(state => state.cartItemSlice.cartItems);
  
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [count,setCount] = useState<number>(0)

  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<string | number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [couponValue, setCouponValue] = useState<string>('');
  const [invalidCoupen, setInvalidCoupen] = useState<string>('');
  const [invalidCoupenButton, setInvalidCoupenButton] = useState<any>();
  
  const[cartData,setCartData] = useState<any>(cartDataItems)

  const [newTotal, setNewTotal] = useState<number>(0)


  const setNewCartData= async ()=>{
      let url = `cart`
      let method = `GET`  
     const response: any =  await callAPI(method, url) 
     console.log('response :: :: :: :: ',response)
     setCartData(response?.data?.payload.cartData)
     setNewTotal(response?.data?.payload?.total)
     setGrandTotal(response?.data?.payload?.total)
    }
  
  useEffect(()=>{
    if(Object.keys(cartDataItems).length > 0 ){
      setCartData(cartDataItems.cartData)
      setNewTotal(cartDataItems.total)
      setGrandTotal(cartDataItems.total)
    }
    else{
      setNewCartData()
    }
  },[])


  
  const decrementQuantity = (data: any) => {

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

  const incrementQuantity = (data : any) => {
   
    dispatch(
      addFoodItemToCart({
        id: data.fooditem.id,
        action: 1
      })
    )
    setNewCartData()
    setCouponValue('')
    setDiscount(0)
    removeCoupon()
  };
  let countCartAmount = () => {

    setTotal(cartData.total)
    let total = 0;
    cartData.map((foods : any) => {
      cartData.map((data :any) => {
        if (data.id === foods.fooditem_id) {
          total += foods.fooditem_id * data.quantity;
        }
      });
    });
    setTotal(total);
    return total;
  };

  // useEffect(() => {
  //   let total = 0;
  //   let totalDiscount = 0;
  //   if (cartData.length > 0) {
  //     foodItem.map(foods => {
  //       cartData.map(data => {
  //         if (data.id === foods.fooditem_id) {
  //           total += foods.fooditem_price * data.quantity;
  //         }
  //       });
  //     });
  //     setTotal(total);
  //     if (!!couponValue) {
  //       coupons.map(data => {
  //         if (data.name === couponValue) {
  //           isCoupenUsed = true;
  //           if (data.type === 'PERCENTAGE') {
  //             totalDiscount = total * (Number(data.value) / 100);
  //             total = total - totalDiscount;
  //             if (total < 0) total = 0;
  //           } else {
  //             totalDiscount = data.value;
  //             total = total - Number(totalDiscount);
  //             if (total < 0) total = 0;
  //           }
  //         }
  //       });
  //     }
  //     setDiscount(totalDiscount);
  //     setGrandTotal(total);
  //   }
  // }, [cartData]);

  //to check coupon is valid or not and coupon type
  const applyCoupon = async() => {
    setInvalidCoupen('');
    
    let method = "GET"
    let url = `coupons/${couponValue}`
    const couponData: any = await callAPI(method,url) 
    console.log('coupon data :: ::: :: :: :: ::',couponData)
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
    else{
      setInvalidCoupen('');
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
      const orderResponse =  await callAPI("POST","checkout",data)
      console.log('order response---------------',orderResponse)
      localStorage.setItem('isOrdered', true.toString());
      router.push('/order');
      setLoading(true);
      //setGrandTotal(0);
    }
  };

    return (
      <AuthComponent>
        <MaxWidthWrapper>
          <Header cartData={cartData}/>
          {cartData.length > 0 ? (
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
                cartData = {cartDataItems}
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
      cartDataItems: cartDataItems?.data?.payload || {},
    }
  };
};


export default Cart;
