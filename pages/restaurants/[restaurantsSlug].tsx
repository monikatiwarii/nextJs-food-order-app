import { GetServerSideProps, NextPage } from 'next';
import Header from '../../src/components/header/Header';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Menus from '../../src/components/restaurantDetails/Menus';
import RestaurantHeader from '../../src/components/restaurantDetails/RestaurantHeader';
import FoodType from '../../src/components/restaurantDetails/FoodType';
import RestaurantDetails from '../../src/components/restaurantDetails/RestaurantDetails';
import { restaurants } from '../../src/data/data';
import { restaurantType } from '../../src/types/constants/restaurant.type';
import AuthComponent from '../../src/components/common/AuthComponent';
import { Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import { foodItemType } from '../../src/types/constants/foodItem.type';
import { categoryType } from '../../src/types/constants/category.type';
import { useDispatch } from '../../src/store';
import { setCartData } from '../../src/store/reducers/cartItemSlice/cartItemSlice';
import baseURL from '../../src/api';
import axios from 'axios';

interface RestaurantDetailProps {
  selectedRestaurant: restaurantType | undefined;
}
const RestaurantDetail: NextPage<RestaurantDetailProps> = ({ selectedRestaurant }) => {
  const [alert, setAlert] = useState<boolean>(false);
  const handleClose = () => {
    setAlert(false);
  };

  const [categoryType, setCategoryType] = useState<string>('cat-1');

  const dispatch = useDispatch();

  const addToCartHandler = (data: foodItemType) => {
    setAlert(true);

    dispatch(
      setCartData({
        foodId: data.foodId,
        quantity: 1
      })
    );
  };

  const categoryHandler = (data: categoryType) => {
    setCategoryType(data.categoryId);
  };

  return (
    <AuthComponent>
      {alert && (
        <Snackbar open={alert} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Added to cart successfully!
          </Alert>
        </Snackbar>
      )}
      <Header />
      <RestaurantHeader />
      <MaxWidthWrapper>
        <RestaurantDetails selectedRestaurant={selectedRestaurant} />
        <Menus selectedRestaurant={selectedRestaurant} />
        <FoodType
          addToCartHandler={addToCartHandler}
          selectedRestaurant={selectedRestaurant}
          categoryHandler={categoryHandler}
          categoryType={categoryType}
        />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurantSlug = context.query.restaurantsSlug;

  console.log(restaurantSlug)
  const restaurant = await axios.get(`${baseURL}/api/restaurants/find/${restaurantSlug}`)
  
  console.log('get propos data------------------',restaurant.data.payload)
  return { props: { selectedRestaurant: restaurant.data.payload } };
};

export default RestaurantDetail;
