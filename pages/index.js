import React, { useEffect, useState } from 'react'
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


  var coupons = "";
  const server_url = process.env.SERVER_URL
 

  await axios({
    method: "get",
    url: "http://localhost:8080/api/coupons"
  }).then((response) => {
    coupons = response.data.data;
  }).catch(err => {
    console.log(err);

  })

 
  return {
    props: {
     
      coupons: coupons
    }, // will be passed to the page component as props
  }
}


export default function Home({coupons}) {
  const [logo, setLogo] = useState("https://i.imgur.com/OGTx0FN.png")
  const [search, setSearch] = useState("")

  const [coupons_, setCoupons] = useState(coupons)

 
  return (
    
    <>
 
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

    </>
  )
}