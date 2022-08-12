import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import { palette } from '@mui/system';
import Dialog from "./Dialog"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Deal({deal}) {
  const [open, setOpen] = React.useState(false);

  const callback = (open) => {
    setOpen(open)
  }
  const handleClickOpen = () => {
    setOpen(!open);
    
  };



  return (
    <Card sx={{ mt:3 , borderRadius:4, boxShadow:2}}>
      <CardContent>
       <Grid container sx={{my: 0}} >

        <Grid item xs={12} lg={2} sx={{
            
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
            
            
            }} >
               <Typography variant="h4" component="body1" color="primary" sx={{fontWeight: "bold", textAlign:"center"}}>
                100$ OFF

            </Typography>

        </Grid>

        <Grid item xs={12} lg={7} sx={{direction: "column", alignContent:"center", justifyContent: "center",mb:{xs:2, lg:0} }}>
        <Stack direction="row" spacing={1} sx={{mb:1}}>
        <Chip label="code" color="primary" variant="outlined" sx={{fontWeight: "bold", fontSize: "body1.fontSize"}} />
         </Stack>

         <Typography variant="h6" component="body1" color="black" sx={{fontWeight: "bold"}}>
         $100 OFF Your Next Checkout with Apple

            </Typography>
            <Box sx={{display:"flex", flexDirection: "row"}}>
            <Typography variant="body1" component="body1" color="grey.600" sx={{mr: 3}}>
                Verified 1 day ago

            </Typography>

            <Typography variant="body1" component="body1" color="grey.600">
                Verified 1 day ago

            </Typography>
            </Box>


        </Grid>

        <Grid item xs={12} lg={3} sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Button onClick={handleClickOpen} className="bg-blue-400 hover:bg-pink-200 hover:text-black" sx={{color:"white", fontWeight: "bold", borderRadius: 2}}>Show Coupon Code</Button>
        
            {open && <Dialog isOpen={callback} deal={deal}/>}
            
        </Grid>
       </Grid>
      </CardContent>
    
    </Card>
  );
}
