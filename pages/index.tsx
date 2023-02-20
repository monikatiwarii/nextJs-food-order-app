import React from 'react';
import CoverImage from '../src/components/home/CoverImage';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import DiningOut from '../src/components/home/DiningOut';
import Cuisines from '../src/components/home/Cuisines';
import PopularRecipes from '../src/components/home/PopularRecipes';
import FoodDeliveryImage from '../src/components/home/FoodDeliveryImage';
import FoodOffers from '../src/components/home/FoodOffers';
import FoodCollection from '../src/components/home/FoodCollection';
import DownloadApp from '../src/components/home/DownloadApp';
import { NextPage } from 'next';

interface HomeProps {}
const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <CoverImage />
      <MaxWidthWrapper>
        <DiningOut />
        <Cuisines />
      </MaxWidthWrapper>
      <PopularRecipes />
      <FoodDeliveryImage />
      <MaxWidthWrapper>
        <FoodOffers />
        <FoodCollection />
        <DownloadApp />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
