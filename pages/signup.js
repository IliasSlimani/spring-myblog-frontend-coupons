import AppBar from "./components/AppBar"
import React from 'react'
import axios from "axios"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUpBody from "./components/SignUpBody"
import Footer from "./components/Footer"


function Login() {
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

    <SignUpBody/>

    </ThemeProvider>
 
    
    </>
  )
}

export default Login