import { Box, Button, Typography } from '@mui/material';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { cartItemType } from '../../types/redux/cartItem.type';
import { categoryType } from '../../types/constants/category.type';
import { foodItemType } from '../../types/constants/foodItem.type';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseURL from '../../api';
import { addFoodItemToCart } from '../../store/reducers/cartItemSlice/caerItem.api';
import { useRouter } from 'next/router';
import { useDispatch } from '../../store';
import { selectedCategoryType } from '../../types/constants/selectedCategory.type';
import callAPI from '../../../pages/api/callAPI';

interface PopularRecipesProps {
  selectedCategory : selectedCategoryType[] | undefined
  categoryItem : categoryType[] | undefined
  foodsItem : foodItemType[] | undefined
}
const PopularRecipes: React.FC<PopularRecipesProps> = ({
  selectedCategory, 
  categoryItem ,
  foodsItem 

}) => {
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down('sm'));


  const [categoryItems, setCategoryItems] = useState<Array<categoryType>>();
  const [foodList, setFoodList] = useState<Array<foodItemType>>();
  const [categoryName, setCategoryName] = useState<string | undefined>();

 
 
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let categoryArray : any[]= [];
    categoryItem?.map(data => {   
      if (selectedCategory?.find(val => val.name === data.name)) {
        categoryArray.push(data);
      }
    }); 
    if(categoryArray.length > 0){
      setCategoryItems(categoryArray);
      setCategoryName(categoryArray[0].name);
    }
  },[]);

 

  let foodArray: foodItemType[] = [];
  useEffect(() => {
    console.log('in category name useeffect',categoryName);  
    (async ()=>{
    console.log('in category name useeffect FN');  

      const res:any = await callAPI("GET",`foods/find/${categoryName}`)
      setFoodList(res.data.payload)
    })();

  }, [categoryName]);

  const foodItemHandler = (data: any) => {
    setCategoryName(data.name);
  };

  const foodDataHandler = (data: any) => {
    dispatch(
      addFoodItemToCart({
        id: data.id,
        quantity: 1
      })
    );
    router.push('/cart');
  };

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
              md: '48px',
              sm: '38px',
              xs: '24px'
            },
            lineHeight: {
              lg: '150px',
              md: '58px',
              xs: '100px'
            },
            marginLeft: {
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
                    marginLeft: '20px',
                    marginTop: '10px',
                    width: {
                      md: '161px',
                      xs: '120px'
                    },
                    height: {
                      sm: '67px',
                      xs: '50px'
                    },
                    backgroundColor: categoryName === data.name ? '#F6B716' : '#ECEEF6',
                    borderRadius: '45px',
                    border: '0px',
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: {
                      sm: '16px',
                      xs: '12px'
                    },
                    lineHeight: '22px',
                    textAlign: 'center',
                    color: categoryName === data.name ? '#FFFFFF' : '#000000',
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
        {foodList?.map((food :any, index:any) => {
          return (
            <>
              <Box
                sx={{
                  position: 'relative',
                  boxSizing: 'border-box',
                  width: { md: '310px', sm: '300px' },
                  height: {
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
                      sm: '260px',
                      xs: '200px'
                    }
                  }}
                  onClick={() => {
                    foodDataHandler(food);
                  }}
                  >
                  <Image
                    src={food.image}
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
                    marginTop: { xl: '50px', sm: '80px', xs: '60px' },
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
                      md: '136px',
                      sm: '132px',
                      xs: '104px'
                    },
                    top: { sm: '467px', xs: '456px' },
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
