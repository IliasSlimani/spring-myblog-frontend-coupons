import AppBar from "./components/AppBar"
import React from 'react'
import axios from "axios"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LoginBody from "./components/LoginBody"
import Footer from "./components/Footer"
export async function getServerSideProps(context) {

    var categories = "";
  
    await axios({
      method: "get",
      url: "http://localhost:8080/api/categories"
    }).then((response) => {
      categories = response.data.data;
    }).catch(err => {
      console.log(err);
  
    })
  
    console.log(categories)
  
    return {
      props: {
        data: categories
      }, // will be passed to the page component as props
    }
  }

function Login({data}) {
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

    <AppBar categories={data}/>
    <LoginBody/>
    <Footer/>
    </ThemeProvider>
 
    
    </>
  )
}

export default Login