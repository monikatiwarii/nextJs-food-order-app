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
import axios from 'axios';
import baseURL from '../src/api';
import callAPI from './api/callAPI';

interface CartProps {
  cartDataItems : any | undefined
}
let isCoupenUsed: boolean = false;
const Cart: NextPage<CartProps> = ({cartDataItems}) => {
 
console.log("cart dtaa items--------------------",cartDataItems)

  let cartData = useSelector(state => state.cartItemSlice.cartItems);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState<number>(0);
  const [discount, setDiscount] = useState<string | number>(0);
  const [grandTotal, setGrandTotal] = useState<number>(0);
  const [couponValue, setCouponValue] = useState<string>('');
  const [invalidCoupen, setInvalidCoupen] = useState<string>('');
  const [invalidCoupenButton, setInvalidCoupenButton] = useState<any>();

  const decrementQuantity = (data: cartItemType) => {
    cartData.map(cartdata => {
      if (cartdata.quantity < 2) {
        dispatch(
          removeCartItem({
            foodId: data.id,
            quantity: 0
          })
        );
      } else {
        if (cartdata.id == data.id) {
          dispatch(
            setCartData({
              foodId: data.id,
              quantity: data.quantity - 1
            })
          );
        }
      }
    });
  };

  const incrementQuantity = (data: cartItemType) => {
    cartData.map(cartdata => {
      if (cartdata.quantity < 5) {
        if (cartdata.id== data.id) {
          dispatch(
            setCartData({
              foodId: data.id,
              quantity: data.quantity + 1
            })
          );
        }
      }
    });
  };
  let countCartAmount = () => {
    let total = 0;
    foodItem.map(foods => {
      cartData.map(data => {
        if (data.id === foods.fooditem_id) {
          total += foods.fooditem_id * data.quantity;
        }
      });
    });
    setTotal(total);
    return total;
  };

  useEffect(() => {
    let total = 0;
    let totalDiscount = 0;
    if (cartData.length > 0) {
      foodItem.map(foods => {
        cartData.map(data => {
          if (data.id === foods.fooditem_id) {
            total += foods.fooditem_price * data.quantity;
          }
        });
      });
      setTotal(total);
      if (!!couponValue) {
        coupons.map(data => {
          if (data.name === couponValue) {
            isCoupenUsed = true;
            if (data.type === 'PERCENTAGE') {
              totalDiscount = total * (Number(data.value) / 100);
              total = total - totalDiscount;
              if (total < 0) total = 0;
            } else {
              totalDiscount = data.value;
              total = total - Number(totalDiscount);
              if (total < 0) total = 0;
            }
          }
        });
      }
      setDiscount(totalDiscount);
      setGrandTotal(total);
    }
  }, [cartData]);

  //to check coupon is valid or not and coupon type
  const applyCoupon = () => {
    setInvalidCoupen('');
    if (!isCoupenUsed) {
      let couponData = coupons.find(coupon => coupon.name === couponValue);

      if (!couponData) {
        setInvalidCoupen('Invalid coupon!');
      } else {
        setInvalidCoupen('');
        isCoupenUsed = true;
        let gTotal = 0;
        let totalDiscount: string | number;
        if (couponData.type === 'PERCENTAGE') {
          totalDiscount = grandTotal * (Number(couponData.value) / 100);
          gTotal = grandTotal - totalDiscount;
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        } else {
          totalDiscount = couponData.value;
          gTotal = grandTotal - Number(totalDiscount);
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        }
        setDiscount(totalDiscount);

        // remove coupon button
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
      }
    }
  };
  // remove coupon
  const removeCoupon = () => {
    isCoupenUsed = false;
    setGrandTotal(countCartAmount());
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
    setGrandTotal(countCartAmount());
    setCouponValue(e.target.value);
  };

  const router = useRouter();
  const orderHandler = () => {
    if (grandTotal !== 0) {
      localStorage.setItem('isOrdered', true.toString());
      router.push('/order');
      setLoading(true);
      setGrandTotal(0);
    }
  };

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        <Header />
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
            />
            <CartData 
            cartDataItems = {cartDataItems}
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

  console.log('cartDataItems :: :: :: ', cartDataItems)

  return {
    props: {
      cartDataItems: cartDataItems?.data?.payload || {},
    }
  };
};


export default Cart;
