import { Box, Typography } from '@mui/material';

import React from 'react';
import error from '../assets/erorr img.jpg';

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Box textAlign="center">
        <Typography variant="h3" gutterBottom>
          Something’s wrong here...
        </Typography>
        <Typography variant="body1" gutterBottom>
          We can’t find the page you’re looking for. <br />
          Check out our help center or head back to home.
        </Typography>
        <img className="mt-3" src={error} alt="Page not found" />
      </Box>
    </div>
  );
};

export default PageNotFound;
