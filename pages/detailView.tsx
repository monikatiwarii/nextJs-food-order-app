import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../src/components/header/Header';
import Button from '@mui/material/Button';
// import { useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { cartItemAction } from "../../store/reducers/cartItemSlice";
import MaxWidthWrapper from '../src/components/common/MaxWidthWrapper';
import DetailViewHeader from '../src/components/restaurantDetails/RestaurantHeader';
import Image from 'next/image';
import Menus from '../src/components/restaurantDetails/Menus';
import CategoryDetails from '../src/components/restaurantDetails/RestaurantDetails';
import { NextPage } from 'next';
import FoodType from '../src/components/restaurantDetails/FoodType';
// import Menus from "./Menus";
// import AuthComponent from "../common/AuthComponent";

interface DetailViewProps {}
const DetailView: NextPage<DetailViewProps> = () => {
  // const dispatch = useDispatch();

  // const location = useLocation();
  // const { categoryData } = location.state;

  // const [categoryWiseData, setCategoryWiseData] = useState([]);
  // const [typeName, setTypeName] = useState("");

  // useEffect(() => {
  //   setCategoryWiseData(categoryData.types[0].list);
  // }, []);

  // const typeNameHandler = (data) => {
  //   setTypeName(data);
  //   setCategoryWiseData(data.list);
  // };

  // const addToCartHandler = (data) => {
  //   const updatedData = categoryWiseData.map((typedata) => {
  //     if (typedata.id === data.id) {
  //       typedata = {
  //         ...typedata,
  //         addToCart: true,
  //         itemCount: data.itemCount + 1,
  //       };
  //       dispatch(cartItemAction.setCartData(typedata));
  //     }
  //     return typedata;
  //   });
  //   setCategoryWiseData(updatedData);
  // };

  // const incrementItemCount = (data) => {
  //   if (data.itemCount < 5) {
  //     const updatedData = categoryWiseData.map((typedata) => {
  //       if (typedata.id === data.id) {
  //         typedata = {
  //           ...typedata,
  //           itemCount: data.itemCount + 1,
  //         };
  //         dispatch(cartItemAction.setCartData(typedata));
  //       }

  //       return typedata;
  //     });

  //     setCategoryWiseData(updatedData);
  //   }
  // };

  // const decrementItemCount = (data) => {
  //   const updatedData = categoryWiseData.map((typedata) => {
  //     if (typedata.id === data.id) {
  //       typedata = {
  //         ...typedata,
  //         itemCount: data.itemCount - 1,
  //         subtotal: typedata.itemCount * data.price,
  //       };
  //       dispatch(cartItemAction.setCartData(typedata));
  //     }

  //     return typedata;
  //   });
  //   setCategoryWiseData(updatedData);
  // };

  return (
    <>
      {/* <AuthComponent> */}
      <Header />
      <DetailViewHeader />
      <MaxWidthWrapper>
        <CategoryDetails />
        <Menus />
        <FoodType />
      </MaxWidthWrapper>
      {/* </AuthComponent> */}
    </>
  );
};

export default DetailView;
