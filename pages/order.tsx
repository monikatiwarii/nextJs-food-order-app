import { NextPage } from 'next';
import AuthComponent from '../src/components/common/AuthComponent';
import AuthGuard from '../src/components/common/AuthGuard';
import OrderSuccessfull from '../src/components/orderSuccessfull/OrderSuccessfull';

interface OrderProps {}
const Order: NextPage<OrderProps> = () => {
  return (
    <AuthComponent>
      <AuthGuard>
        <OrderSuccessfull />
      </AuthGuard>
    </AuthComponent>
  );
};

export default Order;
