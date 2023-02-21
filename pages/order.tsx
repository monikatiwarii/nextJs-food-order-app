import { NextPage } from 'next';
import React, { useEffect } from 'react';
import AuthComponent from '../src/components/common/AuthComponent';
import AuthGuard from '../src/components/common/AuthGuard';
import LoaderPage from '../src/components/common/LoaderPage';
import OrderSuccessfull from '../src/components/orderSuccessfull/OrderSuccessfull';

interface OrderProps {}
const Order: NextPage<OrderProps> = () => {
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (localStorage.getItem('isOrdered')) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      <AuthComponent>
        <AuthGuard>{loading ? <LoaderPage /> : <OrderSuccessfull />}</AuthGuard>
      </AuthComponent>
    </>
  );
};

export default Order;
