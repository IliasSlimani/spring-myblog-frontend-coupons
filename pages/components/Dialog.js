import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { Chip, Stack, Typography } from '@mui/material';
import ProgressBar from "./ProgressBar"

export default function MaxWidthDialog({isOpen, deal}) {
  const [open, setOpen] = React.useState(true);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
    const [progress, setProgress] = React.useState(false);


  const handleClose = () => {
    isOpen(false);
    setOpen(false);
  
  };

  const startAnimation = () => {
    setProgress(true)
  }

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
  
    <React.Fragment>
    
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        PaperProps={{
            style: { borderRadius: 15,
                height: "60%"
                
            }
        }

        }
        onClose={handleClose}
      >
      
        <DialogContent sx={{display: "flex", direction: "column", justifyContent: "center"}}>
          
          <Box
          
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center"
             
             
            }}
          >
           <Typography variant="h4" component="body1" color="primary" sx={{fontWeight: "bold", textAlign:"center", mb: 3}}>
           100$ OFF
           </Typography>
           
           <Typography variant="h6" component="body1" color="black" sx={{fontWeight: "bold", textAlign: "center", mb: 3}}>
         $100 OFF Your Next Checkout with Apple

            </Typography>

            
            {!progress ? <Box sx={{display:"flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
                <Box sx={{display:"flex", flexDirection: {xs: "column", lg: "row"}, justifyContent: "center", alignContent: "center", alignItems: "center"}}>
            <Typography variant="body1" component="body1" color="grey.600" sx={{mr: 3, mb: {xs: 2, lg: 0}}}>
                Verified 1 day ago

            </Typography>

            <Typography variant="body1" component="body1" color="grey.600">
                2k uses Today

            </Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={{my: 3}}>
        <Chip label="Amaz*****" color="primary" variant="outlined" sx={{fontWeight: "bold", fontSize: "body1.fontSize", mx: "auto", fontSize: "h4.fontSize", p: 3, borderRadius: 10, backgroundColor: "grey.200"}} />
         </Stack>

         <Button onClick={startAnimation} className="bg-blue-400 hover:bg-pink-200 hover:text-black" sx={{color:"white", fontWeight: "bold", borderRadius: 5, mx: "auto", px:3, py:1}}>Unlock Code</Button>
            </Box>
           : 
            <ProgressBar/>
            
            }  

          </Box>
        </DialogContent>
    
      </Dialog>
    </React.Fragment>
  );
}
