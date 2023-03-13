import { Box, Button, InputBase, styled, Typography } from '@mui/material';
import React from 'react';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3)
  },
  '& .MuiInputBase-input': {
    borderRadius: 3,
    position: 'relative',
    backgroundColor: '#F3F3F3',
    fontSize: 13,
    fontFamily: 'Poppins',
    fontWeight: '400',
    width: {
      md: '200px',
      sm: '150px',
      xs: '100px'
    },
    padding: '10px 20px',
    color: '#848484',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'])
  }
}));

interface DiscountProps {
  cartData : any;
  isCoupenUsed: boolean;
  total: number;
  discount: string | number;
  grandTotal: number;
  couponValue: string;
  invalidCoupen: string;
  invalidCoupenButton: any;
  applyCoupon: () => void;
  orderHandler: () => void;
  handleChangeCoupon: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  newTotal: number;
}
let isCoupenUsed = false;
const Discount: React.FC<DiscountProps> = ({
  cartData,
  total,
  discount,
  grandTotal,
  couponValue,
  invalidCoupen,
  invalidCoupenButton,
  applyCoupon,
  orderHandler,
  handleChangeCoupon,
  isCoupenUsed,
  newTotal
}) => {

 
  return (
    <>
      <Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: {
                xl: '32px',
                lg: '28px',
                md: '32px',
                sm: '24px',
                xs: '20px'
              },
              lineHeight: '36px',
              textTransform: 'capitalize',
              color: '#000000',
              marginTop: '80px'
            }}>
            Your Cart
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: {
              md: '465px',
              sm: '400px',
              xs: '300px'
            },
            border: '1px solid #848484',
            padding: {
              sm: '50px',
              xs: '20px'
            },
            marginTop: '50px'
          }}>
          <Box
            sx={{
              display: 'flex',
              width: {
                sm: '300px',
                xs: '200px'
              },
              justifyContent: 'space-between',
              marginTop: '40px'
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {
                  lg: '24px',
                  sm: '20px',
                  xs: '18px'
                },
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
                fontSize: '20px',
                lineHeight: '21px',
                color: '#FFA500'
              }}>
              ₹{newTotal}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              width: {
                sm: '300px',
                xs: '200px'
              },
              justifyContent: 'space-between',
              marginTop: '40px'
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {
                  sm: '20px',
                  xs: '18px'
                },
                lineHeight: '21px',
                color: '#848484',
                textTransform: 'capitalize'
              }}>
              Discount
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '21px',
                color: '#FFA500'
              }}>
              {discount > 0 ? '-' : ''} ₹{discount}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: {
                sm: '300px',
                xs: '200px'
              },
              justifyContent: 'space-between',
              marginTop: '40px'
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {
                  sm: '20px',
                  xs: '18px'
                },
                lineHeight: '21px',
                color: '#848484',
                textTransform: 'capitalize'
              }}>
              Amount to Pay
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '21px',
                color: '#FFA500'
              }}>
              ₹{grandTotal}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box
              sx={{
                marginTop: '20px',
                width: {
                  md: '200px',
                  sm: '150px',
                  xs: '150px'
                }
              }}>
              <BootstrapInput
                placeholder="Apply Coupon Code"
                id="bootstrap-input"
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                  handleChangeCoupon(e)
                }
                value={couponValue}
              />
            </Box>

            {!isCoupenUsed && (
              <Button
                id="applyCoupon"
                onClick={applyCoupon}
                sx={{
                  width: {
                    md: '200px',
                    xs: '100px'
                  },
                  height: '40px',
                  fontSize: {
                    md: '18px',
                    sm: '16px',
                    xs: '14px'
                  },
                  marginLeft: {
                    md: '20px',
                    sm: '5px',
                    xs: '10px'
                  },
                  marginTop: '20px',
                  backgroundColor: '#FFC300',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: '#FFC300',
                    color: '#ffffff'
                  }
                }}>
                Apply
              </Button>
            )}
            {invalidCoupenButton}
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '20px',
                lineHeight: '21px',
                color: '#FC0303',
                marginLeft: '20px',
                marginTop: '20px'
              }}>
              {invalidCoupen}
            </Typography>
          </Box>
          <Button
            onClick={orderHandler}
            sx={{
              width: {
                md: '345px',
                sm: '230px',
                xs: '255px'
              },
              height: '43px',
              textAlign: 'center',
              justifyContent: 'flex-start',
              backgroundColor: '#FFC300',
              marginTop: '40px',
              fontFamily: 'Poppins',
              fontSize: {
                md: '20px',
                sm: '16px',
                xs: '14px'
              },
              color: '#ffffff',
              textTransform: 'capitalize',
              paddingLeft: {
                lg: '115px',
                md: '100px',
                sm: '80px',
                xs: '85px'
              },
              '&:hover': {
                backgroundColor: '#FFC300',
                color: '#ffffff'
              }
            }}>
            order now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Discount;
