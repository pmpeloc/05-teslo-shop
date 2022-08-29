import { Box, Typography } from '@mui/material';
import React from 'react';
import { ShopLayout } from '../components/layouts';

const CustomPage404 = () => {
  return (
    <ShopLayout
      title={'Page not found'}
      pageDescription={'No se encuentra el recurso solicitado'}>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'calc(100vh - 200px)'}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <Typography
          variant='h1'
          component={'h1'}
          fontSize={80}
          fontWeight={150}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default CustomPage404;
