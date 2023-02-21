import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { useRouter } from 'next/router';
import LoaderPage from './LoaderPage';

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
      setLoading(true);
      router.push('/login');
    }
  }, []);

  return <>{loading ? <LoaderPage /> : <Box>{children}</Box>}</>;
};

export default AuthComponent;
