import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import baseURL from '../../api';
import { menus } from '../../data/data';
import { restaurantType } from '../../types/constants/restaurant.type';

interface MenusProps {
  selectedRestaurant: restaurantType | undefined;
}
const Menus: React.FC<MenusProps> = ({ selectedRestaurant }) => {
  return (
    <>
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
              xs: '30px'
            },
            paddingTop: '80px'
          }}>
          Menu
        </Typography>
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          sx={{
            marginTop: {
              xl: '20px',
              lg: '40px',
              md: '30px',
              sm: '20px',
              xs: '10px'
            },
            paddingLeft: {
              xl: '368px',
              lg: '250px',
              md: '125px',
              xs: '30px'
            }
          }}>
          { 
          !!selectedRestaurant?.menu ? 
            Object.values(selectedRestaurant.menu).map((menu, index) => {
              return (
                <Grid item xs={6} sm={4} md={4} key={index}>
                  <Box>
                    
                    <Image
                      src={`${baseURL}/${ menu }`}
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
                  {/* <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      fontSize: {
                        md: '20px',
                        sm: '16px',
                        xs: '12px'
                      },
                      lineHeight: '30px',
                      textTransform: 'capitalize',
                      color: '#FFFFFF'
                    }}>
                    {menu.type}
                  </Typography> */}
                </Grid>
              );
          }) : ''
        }
        </Grid>
      </Box>
    </>
  );
};

export default Menus;
