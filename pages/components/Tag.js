import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function BasicChips({value}) {
  return (
 
     
      <Chip label={value} color="primary" variant="outlined" />
  
  );
}
