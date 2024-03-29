import { GetServerSideProps, NextPage } from 'next';
import Header from '../../src/components/header/Header';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Menus from '../../src/components/restaurantDetails/Menus';
import RestaurantHeader from '../../src/components/restaurantDetails/RestaurantHeader';
import FoodType from '../../src/components/restaurantDetails/FoodType';
import RestaurantDetails from '../../src/components/restaurantDetails/RestaurantDetails';
import { restaurantType } from '../../src/types/constants/restaurant.type';
import AuthComponent from '../../src/components/common/AuthComponent';
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { foodItemType } from '../../src/types/constants/foodItem.type';
import { useDispatch } from '../../src/store';
import baseURL from '../../src/api';
import axios from 'axios';
import { addFoodItemToCart } from '../../src/store/reducers/cartItemSlice/cartItem.api';
import callAPI from '../api/callAPI';
import { useRouter } from 'next/router';
import { cartDataItemType } from '../../src/types/constants/cartDataItems.types';
import { selectedCategoryType } from '../../src/types/constants/selectedCategory.type';

interface RestaurantDetailProps {
  selectedRestaurant: restaurantType | undefined;
  selectedFoods: foodItemType[] | undefined;
  restaurantId: number;
  cartDataItems  : cartDataItemType | undefined;
}
const RestaurantDetail: NextPage<RestaurantDetailProps> = ({ selectedRestaurant, selectedFoods, restaurantId,cartDataItems }) => {

  const [alert, setAlert] = useState<boolean>(false);
  const[cartData,setCartData] = useState<any>(cartDataItems?.cartData)

  const router = useRouter()

  const logoutHandler = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("isLoggedIn")
    router.push('/login')
  }

  const handleClose = () => {
    setAlert(false);
  };

  const [categoryType, setCategoryType] = useState<string>('Recommended');
  const [catWiseFoods, setcatWiseFoods] = useState<Array<foodItemType>>([])
  const [count,setCount] = useState<number>(0)

  useEffect(()=>{
    if(!!selectedFoods)
      setcatWiseFoods(selectedFoods)
  },[])

  const dispatch = useDispatch();
 

  const addToCartHandler = async(data: foodItemType) => {

    setAlert(true);

  dispatch(
    addFoodItemToCart({
      id: data.fooditem_id,
      quantity: 1
    })
  );

   
    let url = `cart`
    let method = `GET` 
    const cartDatas: any = await callAPI(method, url)
    setCartData(cartDatas.data.payload.cartData)
  };
 

  let counter = 0;
  if(Array.isArray(cartData)){ 
    cartData.map((data)=>{
      counter += data.quantity
    })
  }

  useEffect(()=>{
    setCount(counter)
  },[counter])

  const categoryHandler = async (data: selectedCategoryType) => {
   
    let rP = {
      rId: restaurantId,
      cId: data.id
    }
    const selectedFoods = await axios.get(`${baseURL}/api/foods/category/${rP.cId}/${rP.rId}`,)
    setcatWiseFoods(selectedFoods.data.payload)

    if (data?.name)
    setCategoryType(data.name);

  };

  return (
    <AuthComponent>
      {alert && (
        <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Added to cart successfully!
          </Alert>
        </Snackbar>
      )}
      <Header 
      count = {count}
      logoutHandler= {logoutHandler} />
      <RestaurantHeader />
      <MaxWidthWrapper>
        <RestaurantDetails selectedRestaurant={selectedRestaurant} />
        <Menus selectedRestaurant={selectedRestaurant} />
        <FoodType
          selectedFoods={selectedFoods}
          addToCartHandler={addToCartHandler}
          selectedRestaurant={selectedRestaurant}
          categoryHandler={categoryHandler}
          categoryType={categoryType}
          catWiseFoods ={catWiseFoods}
        />
      </MaxWidthWrapper>
    </AuthComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurantSlug = context.query.restaurantsSlug;
 
  const restaurant = await axios.get(`${baseURL}/api/restaurants/find/${restaurantSlug}`)

  let rP = { // rP : Restaurent Params
    rId: restaurant.data.payload.id
    , cId: restaurant.data.payload.category[0].id
  }
  const fooditems = await axios.get(`${baseURL}/api/foods/category/${rP.cId}/${rP.rId}`,)
 
  let url = `cart`
  let method = `GET`  
  const cartDataItems: any = await callAPI(method, url)
  return {
    props: {
      selectedRestaurant: restaurant.data.payload,
      selectedFoods: fooditems.data.payload,
      restaurantId: restaurant.data.payload.id,
      cartDataItems: cartDataItems?.data?.payload || {}
    }
  };
};

export default RestaurantDetail;
