import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { restaurantType } from '../../types/constants/restaurant.type';
import { category, foodItem } from '../../data/data';
import { categoryType } from '../../types/constants/category.type';
import { foodItemType } from '../../types/constants/foodItem.type';

interface FoodTypeProps {
  selectedRestaurant: restaurantType | undefined;
  addToCartHandler: (data: foodItemType) => void;
  categoryHandler: (data: categoryType) => void;
  categoryType: string;
}
const FoodType: React.FC<FoodTypeProps> = ({
  selectedRestaurant,
  addToCartHandler,
  categoryHandler,
  categoryType
}) => {
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
            sm: 'row',
            xs: 'column'
          }
        }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: {
              sm: 'column',
              xs: 'row'
            },
            paddingLeft: {
              xl: '368px',
              lg: '250px',
              md: '125px',

              xs: '30px'
            },
            rowGap: '10px',
            paddingTop: '50px'
          }}>
          {selectedRestaurant?.category.map(data=> {
            console.log('category data-------------',data.name)
            return (
              <>
                <Button
                  onClick={() => {
                    categoryHandler(data);
                  }}
                  sx={{
                    width: {
                      lg: '245px',
                      sm: '200px',
                      xs: '190px'
                    },
                    backgroundColor: data.name === categoryType ? '#FFC300' : '#fff',
                    color: data.name === categoryType ? '#ffffff' : '#000000',
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
                  {data.name}
                </Button>
              </>
            );
          })

          }
        </Box>

        <Box
          sx={{
            width: {
              md: '60px',
              sm: '50px',
              xs: '25px'
            }
          }}>
          <Divider
            sx={{
              width: {
                sm: '677px',
                xs: '300px'
              },
              marginTop: {
                sm: '370px',
                xs: '50px'
              },
              marginLeft: {
                sm: '-330px',
                xs: '0px'
              },
              marginRight: '70px',
              border: '1px solid #FFC200',
              marginBottom: '100px',
              transform: {
                sm: 'rotate(90deg)',
                xs: 'rotate(180deg)'
              }
            }}></Divider>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* <Box>
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
                        lg: '24px',
                        sm: '22px',
                        xs: '20px'
                      },
                      lineHeight: '36px',
                      textTransform: 'capitalize',
                      color: '#000000',
                      marginTop: {
                        sm: '35px',
                        xs: '0px'
                      }
                    }}>
                    {data.name}
                  </Typography>
                );
            })}
          </Box> */}
          {/* {selectedRestaurant?.foods &&
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
                                sm: '20px',
                                xs: '10px'
                              },
                              marginTop: {
                                sm: '35px',
                                xs: '20px'
                              }
                            }}>
                            <Box
                              sx={{
                                width: {
                                  xl: '180px',
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
                                    lg: '18px',
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
                                    md: '14px',
                                    sm: '12px',
                                    xs: '10px'
                                  },
                                  lineHeight: {
                                    lg: '36px',
                                    xs: '20px'
                                  },
                                  textTransform: 'capitalize',
                                  color: '#848484'
                                }}>
                                {data.description}
                              </Typography>
                              <Typography
                                sx={{
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
                                    md: '125px',
                                    xs: '100px'
                                  },
                                  height: {
                                    md: '35px',
                                    xs: '30px'
                                  },
                                  fontSize: {
                                    md: '14px',
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
            })} */}
        </Box>
      </Box>
    </Box>
  );
};

export default FoodType;
