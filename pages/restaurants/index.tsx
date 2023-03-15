import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import AuthComponent from '../../src/components/common/AuthComponent';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Header from '../../src/components/header/Header';
import BrandsSection from '../../src/components/restaurants/BrandsSection';
import FoodItemSection from '../../src/components/restaurants/FoodItemSection';
import TrandingItems from '../../src/components/restaurants/TrandingItems';
import { CartDataItem } from '../../src/types/constants/cartDataItem.type';
import { cartDataItemType } from '../../src/types/constants/cartDataItems.types';
import { cartItemType } from '../../src/types/redux/cartItem.type';
import callAPI from '../api/callAPI';

interface RestaurantsProps {
  cartDataItems : cartDataItemType | undefined
}
const Restaurants: NextPage<RestaurantsProps> = ({cartDataItems}) => {

  const router = useRouter()

  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    router.push('/login')
  }
  return (
    <AuthComponent>
      <Header cartData={cartDataItems?.cartData}
      logoutHandler ={logoutHandler} />
      <MaxWidthWrapper>
        <BrandsSection />
        <FoodItemSection />
        <TrandingItems />
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

export default Restaurants;
