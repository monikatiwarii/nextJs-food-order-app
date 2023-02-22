import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { foodCollectionImages } from '../../data/data';

interface FoodCollectionProps {}
const FoodCollection: React.FC<FoodCollectionProps> = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: {
            lg: '150px',
            sm: '120px',
            xs: '100px'
          }
        }}>
        <Grid container spacing={{ xs: 1, md: 3 }}>
          {foodCollectionImages.map((foodImages, index) => {
            return (
              <>
                <Grid item md={4} sm={4} xs={6}>
                  <Box
                    sx={{
                      height: {
                        lg: '400px',
                        md: '300px',
                        sm: '250px',
                        xs: '150px'
                      },
                      backgroundImage: `url('${foodImages.image}')`,
                      backgroundSize: 'cover'
                    }}></Box>
                </Grid>
              </>
            );
          })}
        </Grid>
        <Box
          sx={{
            background: 'rgba(0, 0, 0, 0.4)'
          }}></Box>
        <Box
          sx={{
            margin: 'auto',
            position: 'relative',
            width: {
              xl: '636px',
              lg: '550px',
              md: '480px',
              sm: '350px',
              xs: '250px'
            },
            height: {
              xl: '205px',
              lg: '195px',
              md: '185px',
              sm: '150px',
              xs: '100px'
            },
            top: {
              lg: '-520px',
              md: '-420px',
              sm: '-335px',
              xs: '-280px'
            },
            background: '#F6B716',
            boxShadow: '0px 20px 25px rgba(246, 183, 22, 0.25)',
            borderRadius: '15px'
          }}>
          <Typography
            sx={{
              position: 'absolute',
              width: {
                md: '453px',
                sm: '300px',
                xs: '230px'
              },
              height: '76px',
              left: {
                xl: '77px',
                lg: '45px',
                md: '15px',
                sm: '30px',
                xs: '20px'
              },
              top: {
                sm: '35px',
                xs: '20px'
              },
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: {
                md: '22px',
                sm: '18px',
                xs: '12px'
              },
              lineHeight: '151.02%',
              textAlign: 'center',
              color: '#FFFFFF'
            }}>
            Follow Us On Instagram To See Pictures Taken By Our Customers
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              left: {
                xl: '221px',
                lg: '183px',
                md: '145px',
                sm: '100px',
                xs: '50px'
              },
              top: '62%',
              bottom: '42.05%'
            }}>
            <Box
              sx={{
                width: {
                  sm: '32px',
                  xs: '25px'
                }
              }}>
              <Image
                src="/images/Vector4.png"
                height={0}
                width={0}
                sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
                style={{
                  height: '100%',
                  width: '100%'
                }}
                alt=""
              />
            </Box>

            <Typography
              sx={{
                position: 'absolute',
                width: '160.13px',
                height: '37.04px',
                left: {
                  sm: '39px',
                  xs: '10px'
                },
                top: '-2px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: { md: '22px', sm: '18px' },
                lineHeight: '33px',
                textAlign: 'center',
                color: '#FFFFFF'
              }}>
              : @santorins
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default FoodCollection;
