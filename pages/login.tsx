import { Box, Button, InputAdornment, TextField } from '@mui/material';

import LockIcon from '@mui/icons-material/Lock';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AccountCircle } from '@mui/icons-material';
import { NextPage } from 'next';

interface LoginProps {}
const Login: NextPage<LoginProps> = () => {
  const router = useRouter();

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/');
  };

  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      router.push('/');
    }
  });
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ECEEF6',
          width: '100vw',
          height: '100vh'
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            width: {
              xl: '500px',
              lg: '500px',
              md: '500px',
              sm: '350px',
              xs: '262px'
            },
            height: {
              xl: '500px',
              lg: '500px',
              md: '500px',
              sm: '350px',
              xs: '295px'
            },
            backgroundColor: '#ffffff',
            boxShadow: 1
          }}>
          <Box>
            <TextField
              sx={{
                width: {
                  xl: '318px',
                  lg: '318px',
                  md: '318px',
                  sm: '218px',
                  xs: '218px'
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              placeholder="Email"
              label="email"
              type="email"
              value="propelius@gmail.com"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              sx={{
                width: {
                  xl: '318px',
                  lg: '318px',
                  md: '318px',
                  sm: '218px',
                  xs: '218px'
                },
                marginTop: '50px'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
              placeholder="Password"
              label="password"
              type="password"
              value="12345"
              variant="outlined"
            />
          </Box>

          <Button
            sx={{
              width: {
                xl: '320px',
                lg: '320px',
                md: '320px',
                sm: '230px',
                xs: '200px'
              },
              height: '43px',
              textAlign: 'center',

              backgroundColor: '#FFC300',
              marginTop: '40px',
              fontFamily: 'Poppins',
              fontSize: {
                xl: '18px',
                lg: '20px',
                md: '20px',
                sm: '16px',
                xs: '14px'
              },
              color: '#ffffff',
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: '#FFC300',
                color: '#ffffff'
              }
            }}
            onClick={login}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
