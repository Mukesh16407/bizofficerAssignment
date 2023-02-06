import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

export const Spinner = () => {
  return (
    <Box sx={{ display: 'flex',justifyContent:"center",alignItems:"center" }}>
    <CircularProgress color="inherit" /> &nbsp; Loading...
  </Box>
  )
}
