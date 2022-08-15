import { useEffect, useState } from "react";
import AppBar from "./AppBar"
import Footer from "./Footer"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useQuery } from "react-query";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useAuth } from "../context/AuthContext";
import useRefreshToken from "../hooks/useRefreshToken";
import axios from "../api/axios";


const Layout = ({ children }) => {

  const [categories_, setCategories_] = useState()
  const {auth,setAuth} = useAuth();
  const axiosPrivate = useAxiosPrivate();
  
  const isAuth = (auth.length !== 0);
  
  const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });

  // get refresh token

  const getRefreshToken = async () => {
    const response = await axios.get('/api/token/refresh', {
      withCredentials: true
  });
  setAuth(response.data.access_token);
  }

  const refreshTokenQuery = useQuery(
    "refresh",
    getRefreshToken
  );

  // get User id

  const getUserID = async () => {
    const response = await axiosPrivate.get('/api/getid');

    return response;
  }

  // Get User Data
  const getUserData = async ({ queryKey }) => {
    const response = await axiosPrivate.get(`/api/getuser/${queryKey[1]}`);

    return response;
  }

  // Get Categories
  const getCategroiesFunc = async () => {
    
    const response =  await axios.get('/api/categories');
    
    return response;
  };

  // Get Categories

  const { data, status } = useQuery(
    "categories",
    getCategroiesFunc
  );

    
    const userIdQuery = useQuery(
      "userid",
      getUserID, {
        enabled: isAuth
      }
    );
  
    const userid = userIdQuery?.data?.data?.data?.userid;
  
    const userQuery = useQuery(
      ["userdata",userid],
      getUserData, {
        enabled: !!userid,
      }
    );
  
  //User data
    const userData = userQuery?.data?.data?.data
  
    if (status === "loading" || userIdQuery.status === "loading" || userQuery.status === "loading" ) {
      return (
        <>
        <Container>
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
          <Typography variant="h3" component="h3" sx={{mx: 3}}>
            Loading...
          </Typography>
        <CircularProgress />
      </Box>
        </Container>
      
  
        </>
      )
    }
  
    if(userIdQuery.status == "error") {
      // Pass this data later to appbar
      console.log("user not logged in");
    }
  
  
 
  return (
  
    <ThemeProvider theme={themeLight}>
    <CssBaseline />

     
    <AppBar categories={data?.data?.data} userData={userData}/>
  
      { children }
      <Footer/>
    
    </ThemeProvider>
    
 
  );
}
 
export default Layout;