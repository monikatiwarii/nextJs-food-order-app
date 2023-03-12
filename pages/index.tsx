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
import { NextPage } from 'next';
import AuthGuard from '../src/components/common/AuthGuard';
import { useRouter } from 'next/router';
import LoaderPage from '../src/components/common/LoaderPage';
import { foodItemType } from '../src/types/constants/foodItem.type';
import { categoryType } from '../src/types/constants/category.type';
import { category, foodItem, selectedCategory } from '../src/data/data';
import { useDispatch } from '../src/store';
import { setCartData } from '../src/store/reducers/cartItemSlice/cartItemSlice';
import { cartItemType } from '../src/types/redux/cartItem.type';
import axios from 'axios';
import baseURL from '../src/api';

interface HomeProps {}
const Home: NextPage<HomeProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [categoryItems, setCategoryItems] = useState<Array<categoryType>>();
  const [diningOut,setDiningOut] = useState()

  const [foodList, setFoodList] = useState<Array<foodItemType>>();
  const [categoryId, setCategoryId] = useState<string | undefined>();
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let categoryArray: categoryType[] = [];
    category.map(data => {
      if (selectedCategory.includes(data.name)) {
        categoryArray.push(data);
      }
    });
    setCategoryItems(categoryArray);
    setCategoryId(categoryArray[0].categoryId);
  }, []);

  let foodArray: foodItemType[] = [];
  useEffect(() => {
    if (categoryId) {
      foodItem.map(food => {
        if (food.category.includes(categoryId)) {
          foodArray.push(food);
        }
      });
      setFoodList(foodArray);
    }
  }, [categoryId]);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setLoading(false);
    }
  }, []);

  const foodItemHandler = (data: categoryType) => {
    setCategoryId(data.categoryId);
  };

  const foodDataHandler = (data: cartItemType) => {
    dispatch(
      setCartData({
        foodId: data.foodId,
        quantity: 1
      })
    );
    router.push('/cart');
  };

  useEffect(()=>{
    const callApi = async()=>{
      await axios.get(`${baseURL}/api/res/details`).then((response)=>{
        setDiningOut(response.data.payload)
      })
    }
    callApi();
  },[])



  return (
    <>
      {loading ? (
        <LoaderPage />
      ) : (
        <AuthGuard>
          <CoverImage />
          <MaxWidthWrapper>
            <DiningOut diningOut = {diningOut}  />
            <Cuisines />
          </MaxWidthWrapper>
          <PopularRecipes
            categoryItems={categoryItems}
            foodList={foodList}
            categoryId={categoryId}
            foodItemHandler={foodItemHandler}
            foodDataHandler={foodDataHandler}
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

export default Home;
