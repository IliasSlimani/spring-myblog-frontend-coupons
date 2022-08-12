import { useEffect, useState } from 'react'
import axios from "axios"
import AppBar from "./components/AppBar"
import { Grid, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container  from '@mui/material/Container';
import Card from "./components/Card"
import Footer from "./components/Footer"
import { BottomNavigation } from '@mui/material';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export async function getServerSideProps(context) {

  var categories = "";
  var coupons = "";
  const server_url = process.env.SERVER_URL
  await axios({
    method: "get",
    url: "categories"
  }).then((response) => {
    categories = response.data.data;
  }).catch(err => {
    console.log(err);

  })

  await axios({
    method: "get",
    url: "coupons"
  }).then((response) => {
    coupons = response.data.data;
  }).catch(err => {
    console.log(err);

  })

 
  return {
    props: {
      data: categories,
      coupons: coupons
    }, // will be passed to the page component as props
  }
}


export default function Home({data, coupons}) {
  const [logo, setLogo] = useState("https://i.imgur.com/OGTx0FN.png")
  const [search, setSearch] = useState("")
  const [categories_, setCategories_] = useState(data)
  const [coupons_, setCoupons] = useState(coupons)

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });

  return (
    
    <>
    <AppBar categories={categories_}/>
    <ThemeProvider theme={themeLight}>
    <CssBaseline />
    
    <Container sx={{
      mt:10,
      mb: 10
    }}>
    <Typography variant='h3' component="h3" fontWeight="bold">

    Browse Our Top Deals

    </Typography>
    <Grid container spacing={4} sx={{
      mt: 5
    }}>
      {coupons_.map((coupon,key) => {
        return (
          <Card coupon={coupon}></Card>
        )
      })}
      
     
      
    </Grid>
    </Container>
    </ThemeProvider>
      <Footer/>
    </>
  )
}
