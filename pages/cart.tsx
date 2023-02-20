import { Box, Button, Divider, InputBase, Typography } from '@mui/material';
import Header from '../src/components/header/Header';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import Discount from '../src/components/cart/Discount';
import React from 'react';

import { NextPage } from 'next';
import CartData from '../src/components/cart/CartData';
import EmptyCart from '../src/components/cart/EmptyCart';

interface CartProps {}
const Cart: NextPage<CartProps> = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Header />
        <Discount />
        <CartData />
        <EmptyCart />
      </MaxWidthWrapper>
    </>
  );
};

export default Cart;
