import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { restaurantType } from '../../types/constants/restaurant.type';

import MaxWidthWrapper from '../common/MaxWidthWrapper';

interface RestaurantDetailsProps {
  selectedRestaurant: restaurantType | undefined;
}
const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({ selectedRestaurant }) => {
  console.log(selectedRestaurant);
  return (
    <MaxWidthWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'column'
          },
          paddingLeft: {
            xl: '368px',
            lg: '250px',
            md: '120px',
            sm: '20px',
            xs: '20px'
          },
          paddingTop: '25px'
        }}>
        <Box
          sx={{
            width: {
              xl: '187px',
              lg: '187px',
              md: '187px',
              sm: '187px',
              xs: '190px'
            },
            paddingLeft: {
              xl: '0px',
              lg: '0px',
              md: '0px',
              sm: '0px',
              xs: '55px'
            }
          }}>
          <Image
            src={selectedRestaurant?.images[0] || ''}
            height={0}
            width={0}
            sizes="(max-width:0) 100vw,
                            (max-height:0) 100vh"
            style={{
              objectFit: 'cover',
              height: '100%',
              width: '100%'
            }}
            alt=""
          />
        </Box>
        <Box
          sx={{
            paddingLeft: {
              xl: '30px',
              lg: '30px',
              md: '30px',
              sm: '30px',
              xs: '10px'
            }
          }}>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: {
                xl: '24px',
                lg: '24px',
                md: '24px',
                sm: '20px',
                xs: '22px'
              },
              lineHeight: '36px',
              textTransform: 'capitalize',
              color: '#000000',
              paddingTop: '20px'
            }}>
            {selectedRestaurant?.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              columnGap: {
                xl: '20px',
                lg: '20px',
                md: '20px',
                sm: '20px',
                xs: '0px'
              }
            }}>
            {/* <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: {
                  xl: '14px',
                  lg: '14px',
                  md: '14px',
                  sm: '14px',
                  xs: '12px'
                },
                lineHeight: '20px',
                textTransform: 'capitalize',
                color: '#999999',
                paddingTop: '2px'
              }}> */}
            {/* {selectedRestaurant.items} */}
            {/* </Typography> */}
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: {
                  xl: '14px',
                  lg: '14px',
                  md: '14px',
                  sm: '14px',
                  xs: '12px'
                },
                lineHeight: '20px',
                textTransform: 'capitalize',
                color: '#999999'
              }}>
              Average Cost: {selectedRestaurant?.averageCost}
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
                md: '14px',
                sm: '14px',
                xs: '16px'
              },
              lineHeight: '36px',
              textTransform: 'capitalize',
              color: '#999999'
            }}>
            Address : {selectedRestaurant?.address}
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
                xs: '16px'
              },
              lineHeight: '30px',
              textTransform: 'capitalize',
              color: '#999999'
            }}>
            <span style={{ color: '#C84B11' }}>Open now </span>
            {selectedRestaurant?.time.open} to {selectedRestaurant?.time.closes}
          </Typography>
          <Box>
            <Button
              sx={{
                width: {
                  xl: '140px',
                  lg: '140px',
                  md: '140px',
                  sm: '120px',
                  xs: '100px'
                },
                height: '35px',
                fontSize: {
                  xl: '14px',
                  lg: '14px',
                  md: '14px',
                  sm: '12px',
                  xs: '10px'
                },
                justifyContent: 'center',
                backgroundColor: '#FFC300',
                marginTop: '10px',
                color: '#ffffff',
                marginRight: '20px',
                '&:hover': {
                  backgroundColor: '#FFC300',
                  color: '#ffffff'
                }
              }}>
              order online
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: {
                  xl: '140px',
                  lg: '140px',
                  md: '140px',
                  sm: '120px',
                  xs: '100px'
                },
                height: '35px',
                fontSize: {
                  xl: '14px',
                  lg: '14px',
                  md: '14px',
                  sm: '14px',
                  xs: '10px'
                },
                justifyContent: 'center',
                borderColor: '#FFC300',
                marginTop: '10px',
                color: 'black',
                marginRight: '20px',
                '&:hover': {
                  borderColor: '#FFC300',
                  background: 'white'
                }
              }}>
              directions
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: {
                  xl: '140px',
                  lg: '140px',
                  md: '140px',
                  sm: '120px',
                  xs: '100px'
                },
                height: '35px',
                textAlign: 'center',
                fontSize: {
                  xl: '14px',
                  lg: '14px',
                  md: '14px',
                  sm: '12px',
                  xs: '10px'
                },
                borderColor: '#FFC300',
                marginTop: '10px',
                color: 'black',
                marginRight: '10px',

                '&:hover': {
                  borderColor: '#FFC300',
                  background: 'white'
                }
              }}>
              share
            </Button>
          </Box>
        </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default RestaurantDetails;
