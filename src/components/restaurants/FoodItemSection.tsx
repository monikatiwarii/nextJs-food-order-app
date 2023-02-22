import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { foodList } from '../../data/data';

interface FoodItemSectionProps {}
const FoodItemSection: React.FC<FoodItemSectionProps> = () => {
  const router = useRouter();

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: {
              xl: '28px',
              lg: '28px',
              md: '28px',
              sm: '24px',
              xs: '18px'
            },
            lineHeight: '48px',
            color: '#000000',
            marginTop: '50px'
          }}>
          Food according to weather
        </Typography>

        <Grid
          container
          spacing={4}
          sx={{
            marginTop: {
              xl: '50px',
              lg: '40px',
              md: '30px',
              sm: '20px',
              xs: '10px'
            }
          }}>
          {foodList.map((foodlist, index) => {
            return (
              <Grid item xs={6} sm={4} md={4} key={index}>
                <Box>
                  <Image
                    src={foodlist.image}
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
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: {
                      lg: '20px',
                      sm: '18px',
                      xs: '16px'
                    },
                    lineHeight: '30px',
                    textTransform: 'capitalize',
                    color: '#000000',
                    paddingTop: {
                      lg: '10px',
                      md: '5px',
                      sm: '3px',
                      xs: '2px'
                    },
                    paddingLeft: '8px'
                  }}>
                  {foodlist.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    fontSize: {
                      sm: '16px',
                      xs: '14px'
                    },
                    lineHeight: {
                      lg: '30px',
                      xs: '20px'
                    },
                    textTransform: 'capitalize',
                    color: '#999999',
                    paddingTop: {
                      lg: '5px',
                      md: '3px',
                      sm: '2px',
                      xs: '0px'
                    },
                    paddingLeft: '8px'
                  }}>
                  {foodlist.time} min
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default FoodItemSection;
