import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';

interface AuthComponentProps {
  children: React.ReactNode;
}
const AuthComponent: React.FC<AuthComponentProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      setLoading(false);
    } else {
      setLoading(false);
      router.push('/login');
    }
  }, []);

  return (
    <>
      {loading ? (
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Box>{children}</Box>
      )}
    </>
  );
};

export default AuthComponent;
