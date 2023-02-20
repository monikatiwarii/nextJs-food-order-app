import BrandsSection from '../src/components/restaurants/BrandsSection';
import FoodItemSection from '../src/components/restaurants/FoodItemSection';
import TrandingItems from '../src/components/restaurants/TrandingItems';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import Header from '../src/components/header/Header';
import { NextPage } from 'next';

interface CategoriesProps {}
const Categories: NextPage<CategoriesProps> = () => {
  return (
    <>
      {/* <AuthComponent> */}
      <Header />
      <MaxWidthWrapper>
        {/* <BrandsSection /> */}
        <FoodItemSection />
        <TrandingItems />
      </MaxWidthWrapper>
      {/* </AuthComponent> */}
    </>
  );
};

export default Categories;
