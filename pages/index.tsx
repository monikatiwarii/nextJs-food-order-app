
import React, { useEffect, useState } from 'react';
import CoverImage from '../src/components/home/CoverImage';
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import DiningOut from '../src/components/home/DiningOut';
import Cuisines from '../src/components/home/Cuisines';
import PopularRecipes from '../src/components/home/PopularRecipes';
import FoodDeliveryImage from '../src/components/home/FoodDeliveryImage';
import FoodOffers from '../src/components/home/FoodOffers';
import FoodCollection from '../src/components/home/FoodCollection';
import DownloadApp from '../src/components/home/DownloadApp';
import { GetServerSideProps, NextPage } from 'next';
import AuthGuard from '../src/components/common/AuthGuard';
import LoaderPage from '../src/components/common/LoaderPage';
import { foodItemType } from '../src/types/constants/foodItem.type';
import { categoryType } from '../src/types/constants/category.type';
import axios from 'axios';
import baseURL from '../src/api';
import { selectedCategoryType } from '../src/types/constants/selectedCategory.type';
import callAPI from './api/callAPI';
import { selectedCategory } from '../src/data/data';
import { useRouter } from 'next/router';
import { cartDataItemType } from '../src/types/constants/cartDataItems.types';
import { diningOutType } from '../src/types/constants/diningOut.type';


interface HomeProps {
  selectedCategory : selectedCategoryType[] | undefined
  categoryItem : categoryType[] | undefined
  foodsItem : foodItemType[] | undefined
  cartDataItems : cartDataItemType | undefined
}
const Home: NextPage<HomeProps> = ({selectedCategory,categoryItem,foodsItem,cartDataItems}) => {
  
  const router = useRouter()
  const [diningOut,setDiningOut] = useState<Array<diningOutType>>([])  
  const [loading, setLoading] = React.useState(true);
  
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setLoading(false);
    }
  }, []);

  
  useEffect(()=>{
    const callApi = async()=>{
      await axios.get(`${baseURL}/api/res/details`).then((response)=>{
        setDiningOut(response.data.payload)
      })
    }
    callApi();
  },[])

  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    setLoading(true)
    router.push('/login')
  }


  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <AuthGuard>
          <CoverImage cartData ={cartDataItems?.cartData}
          logoutHandler={logoutHandler}/>
          <MaxWidthWrapper>
            <DiningOut diningOut = {diningOut}  />
            <Cuisines />
          </MaxWidthWrapper>
          <PopularRecipes
          selectedCategory ={selectedCategory}
          categoryItem = {categoryItem}
          foodsItem = {foodsItem}
          />
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

export const getServerSideProps : GetServerSideProps = async context => {
  
  const selectedCategoryItem  =  await axios.get(`${baseURL}/api/res/cat`)
  const categoryItem  =  await axios.get(`${baseURL}/api/category`)
  const foodsItem  =  await axios.get(`${baseURL}/api/foods/`)
  
    let url = `cart`
    let method = `GET`  
    const cartDataItems: any = await callAPI(method, url)
    
    
  return {
    props: {
      selectedCategory: selectedCategoryItem.data.payload,
      categoryItem: categoryItem.data.payload,
      foodsItem: foodsItem.data.payload ,
      cartDataItems: cartDataItems?.data?.payload || {},
    }
  };
};



export default Home;
