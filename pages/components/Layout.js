import { useEffect, useState } from "react";
import AppBar from "./AppBar"
import Footer from "./Footer"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { useQuery } from "react-query";
import { Box, CircularProgress, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useAxiosPrivate from "../hooks/useAxiosPrivate";



const Layout = ({ children }) => {

  const [categories_, setCategories_] = useState()
  const axiosPrivate = useAxiosPrivate();



  const themeLight = createTheme({
    palette: {
      background: {
        default: "#e4f0e2"
      }
    }
  });

  const getUserID = async () => {
    const response = await axiosPrivate.get('/api/getid');

    return response;
  }

  const getUserData = async ({ queryKey }) => {
    const response = await axiosPrivate.get(`/api/getuser/${queryKey[1]}`);

    return response;
  }
  const getCategroiesFunc = async () => {
    var categories = "";
    const response = await axios({
      method: "get",
      url: "http://localhost:8080/api/categories"
    });
    
    return response;
  };

  
   const { data, status } = useQuery(
    "categories",
    getCategroiesFunc
  );
  const userIdQuery = useQuery(
    "userid",
    getUserID
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

     
    <AppBar categories={data?.data?.data}/>
  
      { children }
      <Footer/>
    
    </ThemeProvider>
    
 
  );
}
 
export default Layout;