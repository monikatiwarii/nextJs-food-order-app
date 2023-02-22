import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { restaurants } from '../../data/data';

interface BrandsSectionProps {}
const BrandsSection: React.FC<BrandsSectionProps> = () => {
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
        {restaurants.map((data, index) => {
          return (
            <Box key={data.restaurantId}>
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
                  {data.images.map(image => {
                    return (
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
                          src={image}
                          alt=""
                        />
                      </>
                    );
                  })}
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
