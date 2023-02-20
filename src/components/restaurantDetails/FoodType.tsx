import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { restaurantType } from '../../types/constants/restaurant.type';
import { category, foodItem } from '../../data/data';
import { categoryType } from '../../types/constants/category.type';
import { foodItemType } from '../../types/constants/foodItem.type';
import { useDispatch } from '../../store';
import { setCartData } from '../../store/reducers/cartItem/CartItem.slice';
import { useRouter } from 'next/router';

interface FoodTypeProps {
  selectedRestaurant: restaurantType | undefined;
}
const FoodType: React.FC<FoodTypeProps> = ({ selectedRestaurant }) => {
  const [categoryType, setCategoryType] = useState<string>('cat-1');

  const router = useRouter();
  const dispatch = useDispatch();
  const categoryHandler = (data: categoryType) => {
    setCategoryType(data.categoryId);
  };

  const addToCartHandler = (data: foodItemType) => {
    dispatch(
      setCartData({
        foodId: data.foodId,
        quantity: 1
      })
    );
    router.push('/cart');
  };

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '24px',
          lineHeight: '36px',
          textTransform: 'capitalize',
          color: '#000000',
          paddingLeft: {
            xl: '368px',
            lg: '250px',
            md: '125px',
            sm: '30px',
            xs: '30px'
          },
          paddingTop: '100px'
        }}>
        Order Online
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'column'
          }
        }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: {
              xl: 'column',
              lg: 'column',
              md: 'column',
              sm: 'column',
              xs: 'row'
            },
            paddingLeft: {
              xl: '368px',
              lg: '250px',
              md: '125px',
              sm: '30px',
              xs: '30px'
            },
            rowGap: '10px',
            paddingTop: '50px'
          }}>
          {category.map(cat => {
            if (selectedRestaurant?.category.includes(cat.categoryId)) {
              return (
                <>
                  <Button
                    onClick={() => {
                      categoryHandler(cat);
                    }}
                    sx={{
                      width: {
                        xl: '245px',
                        lg: '245px',
                        md: '200px',
                        sm: '200px',
                        xs: '190px'
                      },
                      backgroundColor: cat.categoryId === categoryType ? '#FFC300' : '#fff',
                      color: cat.categoryId === categoryType ? '#ffffff' : '#000000',
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '300',
                      fontSize: '18px',
                      lineHeight: '30px',
                      textTransform: 'capitalize',

                      height: '50px',
                      textAlign: 'left',
                      justifyContent: 'flex-start',
                      '&:hover': {
                        backgroundColor: '#FFC300',
                        color: '#ffffff'
                      }
                    }}>
                    {cat.name}
                  </Button>
                </>
              );
            }
          })}
        </Box>

        <Box
          sx={{
            width: {
              xl: '60px',
              lg: '60px',
              md: '60px',
              sm: '50px',
              xs: '25px'
            }
          }}>
          <Divider
            sx={{
              width: {
                xl: '677px',
                lg: '677px',
                md: '677px',
                sm: '677px',
                xs: '300px'
              },
              marginTop: {
                xl: '370px',
                lg: '370px',
                md: '370px',
                sm: '370px',
                xs: '50px'
              },
              marginLeft: {
                xl: '-330px',
                lg: '-330px',
                md: '-330px',
                sm: '-330px',
                xs: '0px'
              },
              marginRight: '70px',
              border: '1px solid #FFC200',
              marginBottom: '100px',
              transform: {
                xl: 'rotate(90deg)',
                lg: 'rotate(90deg)',
                md: 'rotate(90deg)',
                sm: 'rotate(90deg)',
                xs: 'rotate(180deg)'
              }
            }}></Divider>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            {category.map(data => {
              if (data.categoryId === categoryType)
                return (
                  <Typography
                    key={data.categoryId}
                    sx={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: {
                        xl: '24px',
                        lg: '24px',
                        md: '22px',
                        sm: '22px',
                        xs: '20px'
                      },
                      lineHeight: '36px',
                      textTransform: 'capitalize',
                      color: '#000000',
                      marginTop: {
                        xl: '35px',
                        lg: '35px',
                        md: '35px',
                        sm: '35px',
                        xs: '0px'
                      }
                    }}>
                    {data.name}
                  </Typography>
                );
            })}
          </Box>
          {selectedRestaurant?.foods &&
            selectedRestaurant?.foods.map(foodId => {
              return (
                <>
                  {foodItem.map(data => {
                    if (data.foodId === foodId && data.category.includes(categoryType)) {
                      {
                        return (
                          <Box
                            key={data.foodId}
                            sx={{
                              display: 'flex',
                              flexDirection: 'row',
                              columnGap: {
                                xl: '20px',
                                lg: '20px',
                                md: '20px',
                                sm: '20px',
                                xs: '10px'
                              },
                              marginTop: {
                                xl: '35px',
                                lg: '35px',
                                md: '35px',
                                sm: '35px',
                                xs: '20px'
                              }
                            }}>
                            <Box
                              sx={{
                                width: {
                                  xl: '180px',
                                  lg: '160px',
                                  md: '160px',
                                  sm: '170px',
                                  xs: '200px'
                                }
                              }}>
                              <Image
                                height={0}
                                width={0}
                                sizes="(max-width:0) 100vw,
                                    (max-height:0) 100vh"
                                style={{
                                  objectFit: 'cover',
                                  height: 'auto',
                                  width: '100%',
                                  borderRadius: '10px'
                                }}
                                src={data.image[0]}
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: 'Poppins',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  fontSize: {
                                    xl: '18px',
                                    lg: '18px',
                                    md: '16px',
                                    sm: '16px',
                                    xs: '14px'
                                  },
                                  lineHeight: '25px',
                                  textTransform: 'capitalize',
                                  color: '#000000'
                                }}>
                                {data.name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: 'Poppins',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  fontSize: {
                                    xl: '14px',
                                    lg: '14px',
                                    md: '14px',
                                    sm: '12px',
                                    xs: '10px'
                                  },
                                  lineHeight: {
                                    xl: '36px',
                                    lg: '36px',
                                    md: '20px',
                                    sm: '20px',
                                    xs: '20px'
                                  },
                                  textTransform: 'capitalize',
                                  color: '#848484'
                                }}>
                                {data.description}
                              </Typography>
                              <Typography
                                sx={{
                                  xl: '14px',
                                  lg: '14px',
                                  md: '14px',
                                  sm: '12px',
                                  xs: '10px'
                                }}>
                                ₹{data.price}
                              </Typography>
                              <Button
                                onClick={() => {
                                  addToCartHandler(data);
                                }}
                                sx={{
                                  width: {
                                    xl: '125px',
                                    lg: '125px',
                                    md: '125px',
                                    sm: '100px',
                                    xs: '100px'
                                  },
                                  height: {
                                    xl: '35px',
                                    lg: '35px',
                                    md: '35px',
                                    sm: '30px',
                                    xs: '30px'
                                  },
                                  fontSize: {
                                    xl: '14px',
                                    lg: '14px',
                                    md: '14px',
                                    sm: '10px',
                                    xs: '10px'
                                  },
                                  textAlign: 'left',
                                  justifyContent: 'flex-start',
                                  backgroundColor: '#FFC300',
                                  marginTop: '10px',
                                  color: '#ffffff',
                                  '&:hover': {
                                    backgroundColor: '#FFC300',
                                    color: '#ffffff'
                                  }
                                }}>
                                add to cart
                              </Button>
                            </Box>
                          </Box>
                        );
                      }
                    }
                  })}
                </>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default FoodType;
