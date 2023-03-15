import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Link from 'next/link';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import Image from 'next/image';
import { useSelector } from '../../store';
import { CartDataItem } from '../../types/constants/cartDataItem.type';
import { cartItemType } from '../../types/redux/cartItem.type';

interface HeaderProps {
  count : number
  logoutHandler :()=> void
}
const Header: React.FC<HeaderProps> = ({
  count,
  logoutHandler
}) => {

  
  // let counter = 0;
 
  // if(Array.isArray(cartData)){
  //   cartData?.map((count: cartItemType) => {
  //     counter += count.quantity;
  //     return count;
  //   });
  // }

  return (
    <MaxWidthWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <Box
          sx={{
            paddingTop: '40px',
            fontSize: {
              xl: '24px',
              md: '20px',
              xs: '16px'
            }
          }}>
          <Link
            href="/"
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '30px',
              textTransform: 'capitalize',
              color: '#FFC300',
              textDecoration: 'none'
            }}>
            NoodleTown
          </Link>
        </Box>

        <Box
          sx={{
            marginLeft: {
              lg: '60%',
              md: '50%',
              sm: '40%',
              xs: '10%'
            },
            paddingTop: '40px',
            fontSize: {
              xl: '24px',
              md: '20px',
              xs: '16px'
            }
          }}>
          <Link
            href="/restaurants"
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '30px',
              textTransform: 'capitalize',
              color: 'black',
              textDecoration: 'none'
            }}>
            Menu
          </Link>
        </Box>
        <Box >
          <Box
            sx={{
              position: 'relative',
              top: '23px',
              left: { xs: '5px' },
              width: '20px',
              height: '20px',
              borderRadius: '15px',
              background: '#FFA500'
            }}>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '13px',
                lineHeight: '20px',
                color: '#FFFFFF',
                textAlign: 'center'
              }}>
              {count}
            </Typography>
          </Box>
          <Box
            sx={{
              paddingTop: '20px',
              width: {
                xl: '35px',
                md: '25px',
                sm: '20px',
                xs: '25px'
              },
              height: {
                xl: '40px',
                md: '30px',
                xs: '25px'
              }
            }}>
            <Link href="/cart" style={{}}>
              <Image
                className="gfg"
                style={{
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '20px',
                  color: 'black',
                  objectFit: 'cover'
                }}
                width={25}
                height={20}
                src="/images/Group6.png"
                alt="cart"
              />
            </Link>
          </Box>
        </Box>
        <Box sx={{
            paddingTop: '40px', 
            cursor : 'pointer'
          }}
          onClick={() => {
            logoutHandler()
          }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '20px',
            color: '#FFC300',
            fontSize: {
              xl: '24px',
              md: '20px',
              xs: '16px'
            }
        }}> LOGOUT</Typography>
       
      </Box>
      </Box>
    </MaxWidthWrapper>
  );
};

export default Header;
