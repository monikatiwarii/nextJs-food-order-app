import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Header from '../../src/components/header/Header';
import BrandsSection from '../../src/components/restaurants/BrandsSection';
import FoodItemSection from '../../src/components/restaurants/FoodItemSection';
import TrandingItems from '../../src/components/restaurants/TrandingItems';

interface RestaurantsProps {}
const Restaurants: NextPage<RestaurantsProps> = () => {
  return (
    <>
      <Header />
      <MaxWidthWrapper>
        <BrandsSection />
        <FoodItemSection />
        <TrandingItems />
      </MaxWidthWrapper>
    </>
  );
};

export default Restaurants;
