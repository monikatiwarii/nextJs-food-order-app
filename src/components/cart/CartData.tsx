import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { useSelector } from '../../store';
import { foodItem } from '../../data/data';
import { setCartData } from '../../store/reducers/cartItem/CartItem.slice';
import { useDispatch } from '../../store';

interface CartDataProps {}
const CartData: React.FC<CartDataProps> = () => {
  let cartData = useSelector(state => state.cartItemSlice.cartItems);
  const dispatch = useDispatch();

  const decrementQuantity = (data: any) => {
    cartData.map(cartdata => {
      if (cartdata.quantity > 1) {
        if (cartdata.foodId == data.foodId) {
          dispatch(
            setCartData({
              foodId: cartdata.foodId,
              quantity: cartdata.quantity - 1
            })
          );
        }
      }
    });
  };

  const incrementQuantity = (data: any) => {
    cartData.map(cartdata => {
      if (cartdata.quantity < 5) {
        if (cartdata.foodId == data.foodId) {
          dispatch(
            setCartData({
              foodId: cartdata.foodId,
              quantity: cartdata.quantity + 1
            })
          );
        }
      }
    });
  };

  return (
    <Box>
      <Box
        sx={{
          marginTop: '50px',
          display: 'flex',
          columnGap: {
            xl: '50px',
            lg: '80px',
            md: '80px',
            sm: '50px',
            xs: '50px'
          },
          rowGap: '30px',
          alignItems: { xs: 'center' },
          flexWrap: 'wrap'
        }}>
        {foodItem.map(data => {
          return cartData.map(foods => {
            if (data.foodId === foods.foodId) {
              return (
                <Box
                  key={foods.foodId}
                  sx={{
                    backgroundColor: '#F9F9F9',
                    width: {
                      xl: '350px',
                      lg: '350px',
                      md: '345px',
                      sm: '339px',
                      xs: '300px'
                    },
                    marginTop: '40px',
                    padding: '28px'
                  }}>
                  <Box
                    sx={{
                      xl: '300px',
                      lg: '300px',
                      md: '300px',
                      sm: '280px',
                      xs: '200px'
                    }}>
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
                          xl: '20px',
                          lg: '20px',
                          md: '18px',
                          sm: '16px',
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
                        xl: '14px',
                        lg: '14px',
                        md: '12px',
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
                        xl: '40px',
                        lg: '40px',
                        md: '40px',
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
                          xl: '48px',
                          lg: '48px',
                          md: '48px',
                          sm: '48px',
                          xs: '40px'
                        },
                        height: {
                          xl: '43px',
                          lg: '43px',
                          md: '43px',
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
                          xl: '48px',
                          lg: '48px',
                          md: '48px',
                          sm: '48px',
                          xs: '40px'
                        },
                        height: {
                          xl: '43px',
                          lg: '43px',
                          md: '43px',
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
                          xl: '20px',
                          lg: '20px',
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
                        xl: '290px',
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
                          xl: '20px',
                          lg: '20px',
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
        })}
      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default CartData;
