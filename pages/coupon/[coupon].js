import AppBar from "../components/AppBar"
import { useRouter } from 'next/router'
import axios from "../api/axios";
import Footer from "../components/Footer"
import { Button, Container, Divider, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Deal from "../components/Deal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export async function getServerSideProps(context) {

  var deals = "";
  var coupon = "";
  

  await axios({
    method: "get",
    url: `/api/coupon/${context.query.coupon}`
  }).then((response) => {
    coupon = response.data.data;
  }).catch(err => {
    console.log(err);

  })

  await axios({
    method: "get",
    url: `/api/coupon/${context.query.coupon}/deals`,

  }).then((response) => {
    deals = response.data.data;
  }).catch(err => {
    console.log(err);
  })

 
  return {
    props: {
     
      deals:deals,
      coupon_data: coupon
    }, // will be passed to the page component as props
  }
}

function coupon({deals,coupon_data}) {
    const router = useRouter()
    const {coupon} = router.query

    const themeLight = createTheme({
      palette: {
        background: {
          default: "#e4f0e2"
        }
      }
    });

    
  return (
    <>

    <ThemeProvider theme={themeLight}>
    <CssBaseline />


    <Container sx={{mb:10}}>
    
    <Grid container columnSpacing={{lg: 10}} mt={5}>
    <Grid item sm={12} lg={4}>
      <Box sx={{display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap"}}>
      <Box
        component="img"
        sx={{
          mx: "auto",
          width: 250,
          height: 250,
          borderRadius: 3,
          boxShadow: 2,
          objectFit: "cover",
          mb: 2
        }}
        alt={coupon_data.name}
        src={coupon_data.image}
      />
     

      <Divider sx={{borderColor: "#d5d5d5", boxShadow: 1 , mb: 2}} />
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      <Typography variant="h5" component="body1" sx={{mr: 1, color: "#faaf00", fontWeight: "bold"}}>
        {
          (Math.round(Number(coupon_data.nrating) * 100) / 100).toFixed(1)
      
        }
   
    </Typography>
   
      <Rating name="half-rating" defaultValue={coupon_data.nrating} precision={0.5} readOnly sx={{my: "auto"}} />

      <Typography variant="h5" component="body1" sx={{ml: 1, color: "grey.600"}}>
        {
          `(${coupon_data.nuses})`
      
        }
   
    </Typography>
      </Box>

<Box sx={{display:"flex", flexDirection:"row", mb:2}}>
      <Typography variant="body1" component="body1" sx={{color: "grey.600", fontWeight:"bold"}}>
       Note:
   
    </Typography>
    <Typography variant="body1" component="body1" sx={{ml: 1, color: "grey.600"}}>
    Rating is only available for registered users.
   
    </Typography>
    </Box>
    <Typography variant="h5" component="h5" sx={{color: "black", fontWeight:"bold"}}>
       About {coupon_data.name}
   
    </Typography>
  
    <Typography variant="body1" component="body1" sx={{color: "grey.600"}}>
      {coupon_data.long_descr}
   
    </Typography>

    <Divider sx={{borderColor: "#d5d5d5", boxShadow: 1 , my: 2}} />
    <Typography variant="h5" component="h5" sx={{color: "black", fontWeight:"bold"}}>
       Tips
   
    </Typography>
  
    <Typography variant="body1" component="body1" sx={{color: "grey.600"}}>
      {coupon_data.tips}
   
    </Typography>
    </Box>
    </Grid>

    <Grid item lg={8} xs={12} sx={{alignContent: "center"}}>
      <Box sx={{display:"flex", flexDirection: "column",  alignContent: "center"}}>
      <Typography variant="h3" component="body1" sx={{fontWeight: "bold", textAlign:{xs:"center", lg:"left"}}}>
      {coupon_data.name} Coupons & Deals
   
    </Typography>

    <Typography variant="h6" component="body1" sx={{fontWeight: "bold", color: "black", textAlign:{xs:"center", lg:"left"}}}>
      {coupon_data.descr}
   
    </Typography>

{deals.map(deal => {
  return (
    <>
    <Deal deal={deal}/>
    </>
  )
})}
        
      </Box>
   
    </Grid>
    </Grid>
    

      </Container>
      </ThemeProvider>

    </>
  )
}

export default coupon