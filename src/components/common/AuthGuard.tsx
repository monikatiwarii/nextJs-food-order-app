import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

interface AuthGuardProps {
  children: React.ReactNode;
}
const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('isOrdered')) {
      console.log('isordered....');
    } else {
      router.push('/');
    }
  }, []);
  return <Box>{children}</Box>;
};

export default AuthGuard;
