import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from "axios"

import { restaurants } from '../../data/data';
import baseURL from '../../api';
import { restaurantType } from '../../types/constants/restaurant.type';

interface BrandsSectionProps {}
const BrandsSection: React.FC<BrandsSectionProps> = () => {

  const [restaurants,setRestaurants] = useState<any>()

  useEffect(()=>{
    const callApi = async()=>{
      await axios.get(`${baseURL}/api/restaurants`).then((response)=>{
        setRestaurants(response.data.payload)
      })
    }
    callApi();
  },[])

  return (
    <Box
      sx={{
        marginTop: '50px'
      }}>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: {
            md: '28px',
            sm: '24px',
            xs: '20px'
          },
          lineHeight: '48px',
          color: '#000000'
        }}>
        Top brands for you
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
        {restaurants?.map((data:restaurantType) => {
          return (
            <Box key={data.id}>
              <Link href={`/restaurants/${data.slug}`}>
                <Box
                  sx={{
                    width: {
                      xs: '100px',
                      md: '185px',
                      sm: '150px'
                    },
                    height: {
                      xs: '100px',
                      md: '185px',
                      sm: '150px'
                    },
                    position: 'relative',
                    marginRight: '20px',
                    marginTop: '50px'
                  }}>
                      <>
                        <Image
                          height={0}
                          width={0}
                          sizes="(max-width:0) 100vw,
                          (max-height:0) 100vh"
                          style={{
                            objectFit: 'contain',
                            height: '100%',
                            width: '100%'
                          }}
                          src={`${baseURL}/${data.images['0']}`}
                          alt=""
                        />
                      </>
                </Box>
              </Link>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: { md: '20px', xs: '14px' },
                  lineHeight: '30px',
                  textTransform: 'capitalize',
                  color: '#000000',
                  textAlign: 'center',
                  paddingTop: '15px'
                }}>
                {data.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default BrandsSection;
