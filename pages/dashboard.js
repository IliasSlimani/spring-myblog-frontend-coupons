import AppBar from "./components/AppBar"
import React, { useEffect } from 'react'
import axios from "axios"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LoginBody from "./components/LoginBody"
import Footer from "./components/Footer"
import { useAuth } from "./context/AuthContext";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import { useRouter } from "next/router";

function Dashboard() {
 
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter()
  
  useEffect(() => {

    const getId = async () => {
      try {
        const response = await axiosPrivate.get('/api/getid').then((response)=> {
          const userid = response.data.data.userid;
          return axiosPrivate.get('/api/getuser/'+ userid);
          
        }).then((response) => {
          
        });
      
    } catch (err) {
        console.error(err);
        router.push("/login");
    }
    }

    getId();
  }, [])
    const themeLight = createTheme({
        palette: {
          background: {
            default: "#e4f0e2"
          }
        }
      });
  return (
    <>
  
    </>
  )
}

export default Dashboard