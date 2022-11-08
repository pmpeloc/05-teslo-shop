import { Box, CircularProgress, Typography } from '@mui/material';

export const FullScreenLoading = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      height={'calc(100vh - 200px)'}>
      <Typography variant='h2' fontWeight={200} sx={{ mb: 3, fontSize: 20 }}>
        Cargando...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
