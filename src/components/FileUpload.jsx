import React from 'react';
import { Button } from '@mui/material';

const FileUpload = ({
  label,
  name,
  id,
  register,
  accept,
  error,
  helperText,
  ...rest
}) => (
  <div style={{ margin: '16px 0' }}>
    <input
      type="file"
      id={id}
      style={{ display: 'none' }}
      accept={accept}
      {...register(name)}
      {...rest}
    />
    <label htmlFor={id}>
      <Button variant="contained" component="span">
        {label}
      </Button>
    </label>
    {helperText && (
      <div style={{ color: error ? 'red' : 'inherit', fontSize: 12, marginTop: 4 }}>
        {helperText}
      </div>
    )}
  </div>
);

export default FileUpload;
