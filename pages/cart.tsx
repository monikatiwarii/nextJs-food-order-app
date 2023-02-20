import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import Header from '../src/components/header/Header';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import Discount from '../src/components/cart/Discount';
import React from 'react';

import { NextPage } from 'next';
import CartData from '../src/components/cart/CartData';
import EmptyCart from '../src/components/cart/EmptyCart';
import { useSelector } from '../src/store';
import AuthComponent from '../src/components/common/AuthComponent';

interface CartProps {}
const Cart: NextPage<CartProps> = () => {
  let cartData = useSelector((state: any) => state.cartItemSlice.cartItems);

  return (
    <AuthComponent>
      <MaxWidthWrapper>
        <Header />

        {cartData.length > 0 ? (
          <>
            <Discount /> <CartData />
          </>
        ) : (
          <EmptyCart />
        )}
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Cart;
