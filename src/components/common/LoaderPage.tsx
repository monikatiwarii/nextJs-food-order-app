import { Box } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from '@mui/material';

const LoaderPage = () => {
  return (
    <Box>
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
export default LoaderPage;
