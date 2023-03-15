import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AuthComponent from '../../src/components/common/AuthComponent';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Header from '../../src/components/header/Header';
import BrandsSection from '../../src/components/restaurants/BrandsSection';
import FoodItemSection from '../../src/components/restaurants/FoodItemSection';
import TrandingItems from '../../src/components/restaurants/TrandingItems';
import { cartDataItemType } from '../../src/types/constants/cartDataItems.types';
import callAPI from '../api/callAPI';

interface RestaurantsProps {
  cartDataItems : cartDataItemType | undefined
}
const Restaurants: NextPage<RestaurantsProps> = ({cartDataItems}) => {

  const router = useRouter()
  const [count,setCount] = useState<number>(0)

  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    router.push('/login')
  }

  let counter = 0;
  if(Array.isArray(cartDataItems?.cartData)){ 
    cartDataItems?.cartData.map((data)=>{
      counter += data.quantity
    })
  }

  useEffect(()=>{
    setCount(counter)
  },[counter])

  return (
    <AuthComponent>
      <Header 
      count = {count}
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
