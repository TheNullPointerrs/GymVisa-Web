import React from 'react';
import BackgroundVideoMobile from './BackgroundVideoMobile';
import { Box } from '@mui/material';

const MobileScreen = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          position: 'relative',
          width: '290px', 
          height: '620px', 
          bgcolor: 'white',
          borderRadius: '30px',
          border: '7px solid grey', 
          overflow: 'hidden', 
          boxShadow: '0px 0px 15px rgba(0, 0, 0.3, 0.3)', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'black',
        }}
      >
        <BackgroundVideoMobile />
      </Box>
    </React.Fragment>
  );
};

export default MobileScreen;
