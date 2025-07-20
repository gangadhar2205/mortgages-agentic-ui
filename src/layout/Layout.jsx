import React from 'react';
import { Box } from '@mui/material';

export const Layout = ({ header, left, right, footer }) => (
  <Box
    sx={{
      height: '100vh', // lock page height
      width: '100vw',
      overflow: 'hidden', // prevent body/page scroll
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {/* Header */}
    <Box
      sx={{
        flex: '0 0 5%',
        minHeight:60,
        maxHeight: '15vh',
        bgcolor: '#00B06B',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
      }}
    >
      {header}
    </Box>

    {/* Main */}
    <Box
      sx={{
        flex: '1 1 auto',
        display: 'flex',
        overflow: 'hidden',
        minHeight: 0, // allows children to shrink
      }}
    >
      {/* Left - 30% */}
      <Box
        sx={{
          width: '25%',
          minWidth: 200,
          maxWidth: 400,
          bgcolor: '#fff',
          borderRight: '1px solid #e0e0e0',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden', // never scrolls
        }}
      >
        {left}
      </Box>
      {/* Right - 70%, only this scrolls */}
      {/* <Box
        sx={{
          width: '75%',
          p: 3,
          overflowY: 'auto', // vertical scroll ONLY here!
          overflowX: 'hidden',
          height: '100%',
          minHeight: 0, // critical for flexbox overflow
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {right}
      </Box> */}
      <Box
      sx={{
        width: '75%',
        p: 3,
        overflowY: 'auto', // 3. Only this scrolls
        height: '100%',
        minHeight: 0,      // 3. Critical
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Long content here */}
      {right}
    </Box>
    </Box>

    {/* Footer */}
    <Box
      sx={{
        flex: '0 0 5%',
        minHeight: 25,
        maxHeight: '10vh',
        bgcolor: '#00B06B',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
      }}
    >
      {footer}
    </Box>
  </Box>
);
