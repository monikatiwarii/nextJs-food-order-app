import { GetServerSideProps, NextPage } from 'next';
import AuthComponent from '../../src/components/common/AuthComponent';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Header from '../../src/components/header/Header';
import BrandsSection from '../../src/components/restaurants/BrandsSection';
import FoodItemSection from '../../src/components/restaurants/FoodItemSection';
import TrandingItems from '../../src/components/restaurants/TrandingItems';
import callAPI from '../api/callAPI';

interface RestaurantsProps {
  cartDataItems : any | undefined
}
const Restaurants: NextPage<RestaurantsProps> = ({cartDataItems}) => {
  return (
    <AuthComponent>
      <Header cartData={cartDataItems.cartData} />
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
