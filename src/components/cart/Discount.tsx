import { Box, Button, InputBase, styled, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from '../../store';
import { coupons, foodItem } from '../../data/data';

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
      xl: '200px',
      lg: '200px',
      md: '200px',
      sm: '150px',
      xs: '100px'
    },
    padding: '10px 20px',
    color: '#848484',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow'])
  }
}));

interface DiscountProps {}
let isCoupenUsed = false;
const Discount: React.FC<DiscountProps> = () => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState<string | number>(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [couponValue, setCouponValue] = useState('');
  const [invalidCoupen, setInvalidCoupen] = useState('');
  const [invalidCoupenButton, setInvalidCoupenButton] = useState<any>();

  let cartData = useSelector(state => state.cartItemSlice.cartItems);

  let countCartAmount = () => {
    let total = 0;
    foodItem.map(foods => {
      cartData.map(data => {
        if (data.foodId === foods.foodId) {
          total += foods.price * data.quantity;
        }
      });
    });

    setTotal(total);
    return total;
  };

  useEffect(() => {
    let total = 0;
    let totalDiscount: string | number;
    if (cartData.length > 0) {
      foodItem.map(foods => {
        cartData.map(data => {
          if (data.foodId === foods.foodId) {
            total += foods.price * data.quantity;
          }
        });
      });
      setTotal(total);
      if (!!couponValue) {
        coupons.map(data => {
          if (data.name === couponValue) {
            isCoupenUsed = true;
            if (data.type === 'PERCENTAGE') {
              totalDiscount = total * (data.value / 100);
              total = total - totalDiscount;
              if (total < 0) total = 0;
            } else {
              totalDiscount = data.value;
              total = total - totalDiscount;
              if (total < 0) total = 0;
            }
          }
        });
      }
      setDiscount(totalDiscount);
      setGrandTotal(total);
    }
  }, [cartData]);

  //to check coupon is valid or not and coupon type
  const applyCoupon = () => {
    setInvalidCoupen('');
    if (!isCoupenUsed) {
      let couponData = coupons.find(coupon => coupon.name === couponValue);
      if (!couponData) {
        setInvalidCoupen('Invalid coupon!');
      } else {
        setInvalidCoupen('');
        isCoupenUsed = true;
        let gTotal = 0;
        let totalDiscount: string | number;
        if (couponData.type === 'PERCENTAGE') {
          totalDiscount = grandTotal * (couponData.value / 100);
          gTotal = grandTotal - totalDiscount;
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        } else {
          totalDiscount = couponData.value;
          gTotal = grandTotal - totalDiscount;
          if (gTotal < 0) setGrandTotal(0);
          else setGrandTotal(gTotal);
        }
        setDiscount(totalDiscount);

        // remove coupon button
        let removeCouponButton = (
          <Button
            onClick={removeCoupon}
            sx={{
              width: '50px',
              height: '40px',
              fontSize: '18px',
              marginLeft: '20px',
              marginTop: '20px',
              backgroundColor: '#FFC300',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#FC0303',
                color: '#ffffff'
              }
            }}>
            X
          </Button>
        );
        setInvalidCoupenButton(removeCouponButton);
      }
    }
  };
  // remove coupon
  const removeCoupon = () => {
    isCoupenUsed = false;
    setGrandTotal(countCartAmount());
    setDiscount(0);
    setCouponValue('');
    setInvalidCoupen('');
    setInvalidCoupenButton('');
  };

  //to get applied coupon text
  const handleChangeCoupon = (e: any) => {
    isCoupenUsed = false;
    setInvalidCoupenButton('');
    setDiscount(0);
    setGrandTotal(countCartAmount());
    setCouponValue(e.target.value);
  };

  const router = useRouter();
  const orderHandler = () => {
    if (grandTotal !== 0) {
      localStorage.setItem('isOrdered', 'true');
      router.push('/order');
      // dispatch(cartItemAction.clearCartData());
      setGrandTotal(0);
    }
  };

  return (
    <>
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
            xl: '465px',
            lg: '465px',
            md: '465px',
            sm: '300px',
            xs: '300px'
          },
          border: '1px solid #848484',
          padding: {
            xl: '50px',
            lg: '50px',
            md: '50px',
            sm: '50px',
            xs: '20px'
          },
          marginTop: '50px'
        }}>
        <Box
          sx={{
            display: 'flex',
            width: {
              xl: '300px',
              lg: '300px',
              md: '300px',
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
                xl: '24px',
                lg: '24px',
                md: '22px',
                sm: '22px',
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
            ₹{total}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: {
              xl: '300px',
              lg: '300px',
              md: '400px',
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
                xl: '24px',
                lg: '24px',
                md: '22px',
                sm: '22px',
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
            ₹{discount}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: {
              xl: '300px',
              lg: '300px',
              md: '300px',
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
                xl: '24px',
                lg: '24px',
                md: '22px',
                sm: '22px',
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
                xl: '200px',
                lg: '200px',
                md: '200px',
                sm: '150px',
                xs: '150px'
              }
            }}>
            <BootstrapInput
              placeholder="Apply Coupon Code"
              id="bootstrap-input"
              onChange={e => handleChangeCoupon(e)}
              value={couponValue}
            />
          </Box>

          <Button
            id="applyCoupon"
            onClick={applyCoupon}
            sx={{
              width: {
                xl: '200px',
                lg: '200px',
                md: '200px',
                sm: '100px',
                xs: '100px'
              },
              height: '40px',
              fontSize: {
                xl: '18px',
                lg: '18px',
                md: '18px',
                sm: '16px',
                xs: '14px'
              },
              marginLeft: {
                xl: '20px',
                lg: '20px',
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
              xl: '345px',
              lg: '345px',
              md: '345px',
              sm: '230px',
              xs: '255px'
            },
            height: '43px',
            textAlign: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#FFC300',
            marginTop: '40px',
            // marginLeft: {
            //   xl: '60px',
            //   lg: '60px',
            //   md: '60px',
            //   sm: '40px',
            //   xs: '5px'
            // },
            fontFamily: 'Poppins',
            fontSize: {
              xl: '20px',
              lg: '20px',
              md: '20px',
              sm: '16px',
              xs: '14px'
            },
            color: '#ffffff',
            textTransform: 'capitalize',
            paddingLeft: {
              xl: '115px',
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
    </>
  );
};

export default Discount;
