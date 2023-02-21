import { Box, Button, Typography } from '@mui/material';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import { category, foodItem, foodtype } from '../../data/data';
import { useEffect, useState } from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { setCartData } from '../../store/reducers/cartItem/CartItem.slice';
import { useDispatch } from '../../store';
import { cartItemType } from '../../types/redux/cartItem.type';
import { selectedCategory } from '../../data/data';
import { categoryType } from '../../types/constants/category.type';
import { foodItemType } from '../../types/constants/foodItem.type';

interface PopularRecipesProps {}
const PopularRecipes: React.FC<PopularRecipesProps> = () => {
  let foodArray: foodItemType[] = [];
  const router = useRouter();
  const dispatch = useDispatch();

  const [categoryItems, setCategoryItems] = useState<Array<categoryType>>();

  const [foodList, setFoodList] = useState<Array<foodItemType>>();
  const [categoryId, setCategoryId] = useState<string | undefined>();

  useEffect(() => {
    let categoryArray: categoryType[] = [];
    category.map(data => {
      if (selectedCategory.includes(data.name)) {
        categoryArray.push(data);
      }
    });
    setCategoryItems(categoryArray);
    setCategoryId(categoryArray[0].categoryId);
  }, []);

  useEffect(() => {
    if (categoryId) {
      foodItem.map(food => {
        if (food.category.includes(categoryId)) {
          foodArray.push(food);
        }
      });
      setFoodList(foodArray);
    }
  }, [categoryId]);

  const foodItemHandler = (data: categoryType) => {
    setCategoryId(data.categoryId);
  };

  const foodDataHandler = (data: cartItemType) => {
    dispatch(
      setCartData({
        foodId: data.foodId,
        quantity: 1
      })
    );
    router.push('/cart');
  };

  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '110px'
        }}>
        {!matches ? <Image src="/images/Vector2.png" width={105} height={178} alt="" /> : ''}
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: {
              xl: '48px',
              lg: '48px',
              md: '48px',
              sm: '38px',
              xs: '24px'
            },
            lineHeight: {
              xl: '150px',
              lg: '150px',
              md: '58px',
              sm: '100px',
              xs: '100px'
            },
            marginLeft: {
              xl: '0px',
              lg: '0px',
              md: '0px',
              sm: '0px',
              xs: '55px'
            },
            color: '#000000'
          }}>
          Popular Recipes
        </Typography>
        {!matches ? <Image src="/images/Vector 3.png" width={105} height={178} alt="" /> : ''}
      </Box>
      <MaxWidthWrapper>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {categoryItems?.map(data => {
            return (
              <>
                <Button
                  onClick={() => {
                    foodItemHandler(data);
                  }}
                  sx={{
                    marginLeft: {
                      xl: '20px',
                      lg: '20px',
                      md: '20px',
                      sm: '20px',
                      xs: '20px'
                    },
                    marginTop: '10px',
                    width: {
                      xl: '161px',
                      lg: '161px',
                      md: '161px',
                      sm: '120px',
                      xs: '120px'
                    },
                    height: {
                      xl: '67px',
                      lg: '67px',
                      md: '67px',
                      sm: '67px',
                      xs: '50px'
                    },
                    backgroundColor: categoryId === data.categoryId ? '#F6B716' : '#ECEEF6',
                    borderRadius: '45px',
                    border: '0px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: {
                      xl: '16px',
                      lg: '16px',
                      md: '16px',
                      sm: '16px',
                      xs: '12px'
                    },
                    lineHeight: '22px',
                    textAlign: 'center',
                    color: categoryId === data.categoryId ? '#FFFFFF' : '#000000',
                    '&:focus': {
                      backgroundColor: '#F6B716',
                      color: 'white'
                    }
                  }}>
                  {data.name}
                </Button>
              </>
            );
          })}
        </Box>
      </MaxWidthWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: '660px',
          maxWidth: '155%',
          overflowX: 'scroll',
          textAlign: 'center',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
        {foodList?.map((food, index) => {
          return (
            <>
              <Box
                sx={{
                  position: 'relative',
                  boxSizing: 'border-box',
                  width: { xl: '310px', lg: '310px', md: '310px', sm: '300px' },
                  height: {
                    xl: '493px',
                    lg: '493px',
                    md: '493px',
                    sm: '493px',
                    xs: '480px'
                  },
                  background: '#FFFFFF',
                  border: '2px solid #ECEEF7',
                  marginLeft: '30px',
                  borderRadius: '20px',
                  padding: '20px',
                  '&:hover': {
                    border: '2px solid  #F6B716;',
                    '& #shoppingBag': {
                      backgroundColor: ' #F6B716;',
                      color: 'white'
                    },
                    '& #shoppingBagBorder': {
                      borderBottom: '2px solid #F6B716',
                      borderRight: '2px solid #F6B716'
                    }
                  }
                }}
                style={{ marginTop: '115px' }}>
                {/* {food.tags[0] && (
                  <Typography
                    sx={{
                      position: 'absolute',
                      left: '22px',
                      top: '6px',
                      width: '70px',
                      height: '30px',
                      background: '#191F2C',
                      color: '#FFFFFF',
                      padding: '6px',
                      boxShadow: '0px 4px 8px rgba(25, 31, 44, 0.25)',
                      borderRadius: '3px'
                    }}>
                    Popular
                  </Typography>
                )} */}
                <Box
                  sx={{
                    width: {
                      xl: '260px',
                      lg: '260px',
                      md: '260px',
                      sm: '260px',
                      xs: '200px'
                    }
                  }}
                  onClick={() => {
                    foodDataHandler(food);
                  }}>
                  <Image
                    src={food.image[0]}
                    height={0}
                    width={0}
                    sizes="(max-width:0) 100vw,
                                (max-height:0) 100vh"
                    style={{
                      borderRadius: '154px',
                      height: '200px',
                      width: '200px'
                    }}
                    alt=""
                  />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography
                    sx={{
                      paddingTop: '25px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 600,
                      fontSize: '18px',
                      lineHeight: '25px',
                      color: '#000000',
                      marginBottom: '0px'
                    }}>
                    {food.name}
                  </Typography>
                  <Typography
                    sx={{
                      paddingTop: '30px',
                      paddingLeft: '0px',
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '17px',
                      textAlign: 'right',
                      color: '#000000'
                    }}>
                    ₹{food.price}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#000000',
                    paddingLeft: '18.5px',
                    marginTop: '25px'
                  }}>
                  {food.description}
                </Typography>
                <Typography
                  sx={{
                    marginTop: { xl: '80px', lg: '80px', md: '80px', sm: '80px', xs: '60px' },
                    height: '41px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: '28px',
                    lineHeight: '34px',
                    textAlign: 'center',
                    color: '#121146'
                  }}>
                  500NGN
                </Typography>
                <Button
                  id="shoppingBag"
                  sx={{
                    position: 'absolute',
                    width: '34px',
                    minWidth: '34px',
                    right: {
                      xl: '136px',
                      lg: '136px',
                      md: '136px',
                      sm: '132px',
                      xs: '104px'
                    },
                    top: { xl: '467px', lg: '467px', md: '467px', sm: '467px', xs: '456px' },
                    color: 'black',
                    background: '#FFFFFF',
                    borderRadius: '59px',
                    border: '1px solid #ECEEF7',
                    zIndex: '2'
                  }}>
                  <ShoppingBagIcon />
                </Button>
                <Box
                  id="shoppingBagBorder"
                  sx={{
                    position: 'absolute',
                    width: '50px',
                    height: '50px',
                    borderBottom: '2px solid #ECEEF7',
                    borderRight: '2px solid #ECEEF7',
                    borderBottomRightRadius: '15px',
                    top: '100%',
                    left: '50%',
                    marginLeft: '-25px',
                    content: `'""'`,
                    transform: 'rotate(45deg)',
                    marginTop: '-25px',
                    backgroundColor: '#FFFFFF',
                    zIndex: 1
                  }}></Box>
              </Box>
            </>
          );
        })}
      </Box>
    </>
  );
};

export default PopularRecipes;
