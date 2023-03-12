import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { restaurantImage } from '../../data/data';

interface DiningOutProps {
  diningOut : any
}
const DiningOut: React.FC<DiningOutProps> = ({diningOut}) => {

  

  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 5, md: 5 }}
      sx={{
        marginTop: {
          xl: '50px',
          lg: '40px',
          md: '30px',
          sm: '20px',
          xs: '10px'
        }
      }}>
      {diningOut?.map((data:any, index:any) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                background: '#FFFFFF',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                marginTop: '20px',
                paddingBottom: '10px'
              }}>
              <Link href="/restaurants">
                <Image
                  src={data.image}
                  alt="imageGirl"
                  height={0}
                  width={0}
                  sizes="(max-width:0) 100vw,
                                (max-height:0) 100vh"
                  style={{
                    objectFit: 'contain',
                    height: '100%',
                    width: '100%'
                  }}
                />
              </Link>

              <Typography
                sx={{
                  paddingLeft: '10px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '24px',
                  textTransform: 'capitalize',
                  color: '#000000'
                }}>
                {data.title}
              </Typography>
              <Typography
                sx={{
                  paddingLeft: '10px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '300',
                  fontSize: '12px',
                  lineHeight: '21px',
                  textTransform: 'capitalize',
                  color: '#000000'
                }}>
                {data.description}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DiningOut;
