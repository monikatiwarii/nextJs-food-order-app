import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import AuthComponent from '../src/components/common/AuthComponent';
import AuthGuard from '../src/components/common/AuthGuard';
import LoaderPage from '../src/components/common/LoaderPage';
import OrderSuccessfull from '../src/components/orderSuccessfull/OrderSuccessfull';
import { useDispatch } from '../src/store';
import { clearCartData } from '../src/store/reducers/cartItemSlice/cartItemSlice';

interface OrderProps {}
const Order: NextPage<OrderProps> = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('isOrdered')) {
      setLoading(false);
    }

    dispatch(clearCartData());
  }, []);

  const orderHandler = () => {
    localStorage.removeItem('isOrdered');
  };

  return (
    <>
      <AuthComponent>
        <AuthGuard>
          {loading ? <LoaderPage /> : <OrderSuccessfull orderHandler={orderHandler} />}
        </AuthGuard>
      </AuthComponent>
    </>
  );
};

export default Order;
