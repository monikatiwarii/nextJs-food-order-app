import { Box, Button, InputAdornment, TextField } from '@mui/material';
import { Alert, Snackbar } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AccountCircle } from '@mui/icons-material';
import { NextPage } from 'next';

interface LoginProps {}
const Login: NextPage<LoginProps> = () => {
  const [loginData, setLoginData] = useState<{ email: string; password: string }>({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState<boolean>(false);
  const router = useRouter();

  const login = () => {
    if (loginData.email == 'propelius@gmail.com' && loginData.password == '12345') {
      localStorage.setItem('isLoggedIn', true.toString());
      router.push('/');
    } else {
      setAlert(true);
    }
  };

  const loginHandler = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push({ pathname: '/login' });
    } else {
      router.push({ pathname: '/' });
    }
  }, []);

  const handleClose = () => {
    setAlert(false);
  };

  return (
    <>
      {alert && (
        <Snackbar open={alert} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Invalid Credential!
          </Alert>
        </Snackbar>
      )}
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
              md: '500px',
              sm: '350px',
              xs: '262px'
            },
            height: {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => loginHandler(e)}
              placeholder="Email"
              label="email"
              type="email"
              value={loginData.email}
              name="email"
              variant="outlined"
            />
          </Box>
          <Box>
            <TextField
              sx={{
                width: {
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => loginHandler(e)}
              placeholder="Password"
              label="password"
              type="password"
              value={loginData.password}
              name="password"
              variant="outlined"
            />
          </Box>

          <Button
            sx={{
              width: {
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
