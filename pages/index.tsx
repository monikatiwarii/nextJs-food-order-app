import React, { useEffect } from 'react';
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
import AuthComponent from '../src/components/common/AuthComponent';
import AuthGuard from '../src/components/common/AuthGuard';
import { useRouter } from 'next/router';
import LoaderPage from '../src/components/common/LoaderPage';

interface HomeProps {}
const Home: NextPage<HomeProps> = () => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <AuthGuard>
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
        </AuthGuard>
      )}
    </>
  );
};

export default Home;
