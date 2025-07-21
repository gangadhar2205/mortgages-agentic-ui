import React, { useRef } from 'react';
import { Box, TextField, IconButton, InputAdornment, Tooltip } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

export const Home = () => {
  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    alert(`File selected: ${file?.name}`);
  };

  const handleSend = () => {
    alert("Send Enquiry Clicked!");
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <TextField
        placeholder="Start your enquiry…."
        fullWidth
        size="medium"
        variant="outlined"
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 2,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bdbdbd', // default border
            },
            '&:hover fieldset': {
              borderColor: '#00B06B', // green on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00B06B', // green on focus
            },
          },
          '& label.Mui-focused': {
            color: '#00B06B',         // label color on focus
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Tooltip title="File Upload" arrow>
                  <IconButton
                    component="span"
                    onClick={() => fileInputRef.current.click()}
                    edge="end"
                    size="small"
                  >
                    <AttachFileIcon />
                  </IconButton>
                </Tooltip>
                <input
                  type="file"
                  hidden
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                />
                <Tooltip title="Send Enquiry" arrow>
                  <IconButton
                    onClick={handleSend}
                    edge="end"
                    size="small"
                    sx={{
                      color: '#00B06B', // Send icon color (green)
                      '&:hover': { color: '#00844A' }, // Slightly darker green on hover
                    }}
                  >
                    <SendIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
