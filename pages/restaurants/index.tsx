import { NextPage } from 'next';
import AuthComponent from '../../src/components/common/AuthComponent';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Header from '../../src/components/header/Header';
import BrandsSection from '../../src/components/restaurants/BrandsSection';
import FoodItemSection from '../../src/components/restaurants/FoodItemSection';
import TrandingItems from '../../src/components/restaurants/TrandingItems';

interface RestaurantsProps {}
const Restaurants: NextPage<RestaurantsProps> = () => {
  return (
    <AuthComponent>
      <Header />
      <MaxWidthWrapper>
        <BrandsSection />
        <FoodItemSection />
        <TrandingItems />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export default Restaurants;
