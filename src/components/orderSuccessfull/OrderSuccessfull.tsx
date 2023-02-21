import { Box } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AuthComponent from '../common/AuthComponent';
import AuthGuard from '../common/AuthGuard';
import MaxWidthWrapper from '../common/MaxWidthWrapper';

const OrderSuccessfull = () => {
  const orderHandler = () => {
    localStorage.removeItem('isOrdered');
  };
  return (
    <AuthComponent>
      <AuthGuard>
        <MaxWidthWrapper>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100vh'
            }}>
            <Box
              sx={{
                width: {
                  xl: '50%',
                  lg: '50%',
                  md: '40%',
                  sm: '40%',
                  xs: '100%'
                }
              }}>
              <Image
                src="/images/successfully-done.gif"
                alt=""
                priority
                height={768}
                width={768}
                sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
                style={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  marginRight: '20px'
                }}
              />
            </Box>
            <Link
              onClick={orderHandler}
              href="/"
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                fontSize: '24px',
                textAlign: 'center',
                color: 'black',
                textDecoration: 'none'
              }}>
              <Image
                height={10}
                width={10}
                sizes="(max-width:0) 100vw,
                      (max-height:0) 100vh"
                style={{
                  height: 'auto',
                  width: '35px',
                  marginRight: '20px'
                }}
                src="/images/backtohome.png"
                alt=""
              />
              Back to Home
            </Link>
          </Box>
        </MaxWidthWrapper>
      </AuthGuard>
    </AuthComponent>
  );
};

export default OrderSuccessfull;
