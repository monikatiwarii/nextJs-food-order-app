import { Box, Button, Divider, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import baseURL from '../../api';
import { useSelector } from '../../store';
import { cartItemType } from '../../types/redux/cartItem.type';

interface CartDataProps {
  decrementQuantity: (data: cartItemType) => void;
  incrementQuantity: (data: cartItemType) => void;
}
const CartData: React.FC<CartDataProps> = ({ decrementQuantity, incrementQuantity }) => {
  const[foodItem,setFoodItem] = useState()

  useEffect(()=>{
    const callApi = async()=>{
      await axios.get(`${baseURL}/api/cart/`).then((response)=>{
        setFoodItem(response.data.payload)
      })
    }
    callApi();
  },[])

  let cartData = useSelector(state => state.cartItemSlice);

  console.log('slice wala cartData--------------------',cartData)
  console.log('slice wala cartData--------------------',foodItem)

  return (
    <Box>
      <Box
        sx={{
          marginTop: '50px',
          display: 'flex',
          columnGap: {
            xl: '50px',
            md: '80px',
            sm: '50px',
            xs: '50px'
          },
          rowGap: '30px',
          alignItems: { xs: 'center' },
          flexWrap: 'wrap'
        }}>
        {/* {foodItem.map(data => {
          return cartData.map(foods => {
            if (data.foodId === foods.foodId) {
              return (
                <Box
                  key={foods.foodId}
                  sx={{
                    backgroundColor: '#F9F9F9',
                    width: {
                      lg: '350px',
                      md: '345px',
                      sm: '339px',
                      xs: '300px'
                    },
                    marginTop: '40px',
                    padding: '28px'
                  }}>
                  <Box
                  // sx={{
                  //   md: '300px',
                  //   sm: '280px',
                  //   xs: '200px'
                  // }}>
                  >
                    <Image
                      src={data.image[0]}
                      alt=""
                      height={0}
                      width={0}
                      sizes="(max-width:0) 100vw,
                              (max-height:0) 100vh"
                      style={{
                        objectFit: 'cover',
                        height: 'auto',
                        width: '100%'
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: {
                          xl: '16px',
                          lg: '20px',
                          md: '18px',
                          sm: '16px',
                          xs: '16px'
                        },
                        lineHeight: '20px',
                        color: '#000000',
                        marginTop: '10px'
                      }}>
                      {data.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: {
                          lg: '20px',
                          md: '18px',
                          xs: '16px'
                        },
                        marginTop: '10px',
                        lineHeight: '30px',
                        color: '#FFA500'
                      }}>
                      ₹{data.price}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: {
                        lg: '14px',
                        sm: '12px',
                        xs: '10px'
                      },
                      lineHeight: '21px',
                      color: '#848484',
                      paddingTop: '10px'
                    }}>
                    {data.description}
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      paddingTop: {
                        sm: '40px',
                        xs: '20px'
                      }
                    }}>
                    <Button
                      onClick={() => {
                        decrementQuantity(foods);
                      }}
                      sx={{
                        width: {
                          sm: '48px',
                          xs: '40px'
                        },
                        height: {
                          sm: '43px',
                          xs: '38px'
                        },
                        backgroundColor: '#F3F3F3',
                        color: '#999999',
                        fontSize: '20px'
                      }}>
                      -
                    </Button>
                    <Typography
                      sx={{
                        width: '48px',
                        height: '43px',
                        fontSize: '20px',
                        textAlign: 'center'
                      }}>
                      {foods.quantity}
                    </Typography>
                    <Button
                      onClick={() => {
                        incrementQuantity(foods);
                      }}
                      sx={{
                        width: {
                          sm: '48px',
                          xs: '40px'
                        },
                        height: {
                          sm: '43px',
                          xs: '38px'
                        },
                        backgroundColor: '#F3F3F3',
                        color: '#999999',
                        fontSize: '20px'
                      }}>
                      +
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '35px',
                      paddingTop: '40px'
                    }}>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#848484',
                        textTransform: 'capitalize'
                      }}>
                      subtotal
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: {
                          md: '20px',
                          sm: '18px',
                          xs: '16px'
                        },
                        lineHeight: '21px',
                        color: '#FFA500'
                      }}>
                      ₹{data.price} * {foods.quantity}
                    </Typography>
                  </Box>
                  <Divider
                    sx={{
                      width: {
                        lg: '290px',
                        md: '285px',
                        sm: '280px',
                        xs: '250px'
                      },
                      marginTop: '10px'
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingRight: '35px',
                      paddingTop: '20px'
                    }}>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '14px',
                        lineHeight: '21px',
                        color: '#848484',
                        textTransform: 'capitalize'
                      }}>
                      total
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: {
                          md: '20px',
                          sm: '18px',
                          xs: '16px'
                        },
                        lineHeight: '21px',
                        color: '#FFA500'
                      }}>
                      ₹{data.price * foods.quantity}
                    </Typography>
                  </Box>
                </Box>
              );
            }
          });
        })} */}
      </Box>

      {/* </Box> */}
    </Box>
  );
};

export default CartData;
