import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface RestaurantHeaderProps {}
const RestaurantHeader: React.FC<RestaurantHeaderProps> = () => {
  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          marginTop: {
            xl: '10px',
            sm: '5px',
            xs: '3px'
          }
        }}>
        <Grid item sm={6} xs={6}>
          <Box
            sx={{
              height: '100%'
            }}>
            <Box
              sx={{
                height: '100%'
              }}>
              <Image
                src="/images/Rectangle141.png"
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
          </Box>
        </Grid>
        <Grid item sm={6} xs={6}>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <Image
                src="/images/Rectangle151.png"
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
            </Grid>
            <Grid item sm={12} xs={12}>
              <Image
                src="/images/Rectangle161.png"
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default RestaurantHeader;
