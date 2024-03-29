import { Box, Button, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import { CartDataItem } from '../../types/constants/cartDataItem.type';
interface CartDataProps {
  cartData : any | undefined
  decrementQuantity: (data: CartDataItem) => void;
  incrementQuantity: (data: CartDataItem) => void;
}
const CartData: React.FC<CartDataProps> = ({ decrementQuantity, incrementQuantity,cartData}) => {
 


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
        {cartData?.map((data:any) => {
              return (
                <Box
                  key={data.fooditem.name}
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
                      src={data.fooditem.image}
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
                      {data.fooditem.name}
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
                      ₹{data.fooditem.price}
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
                    {data.fooditem.description}
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
                        decrementQuantity(data);
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
                      {data.quantity}
                    </Typography>
                    <Button
                      onClick={() => {
                        incrementQuantity(data);
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
                      ₹{data.fooditem.price} * {data.quantity}
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
                      ₹{data.fooditem.price * data.quantity}
                    </Typography>
                  </Box>
                </Box>
              );
          
        })}
      </Box>

      {/* </Box> */}
    </Box>
  );
};

export default CartData;
