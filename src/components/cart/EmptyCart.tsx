import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface EmptyCartProps {}
const EmptyCart: React.FC<EmptyCartProps> = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '200px'
      }}>
      <Box
        sx={{
          width: '500px'
        }}>
        <Image
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
          src="/images/empty-cart.png"
        />
      </Box>
    </Box>
  );
};

export default EmptyCart;
