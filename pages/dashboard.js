import AppBar from "./components/AppBar"
import React, { useEffect } from 'react'
import axios from "axios"
import CssBaseline from "@mui/material/CssBaseline";
import LoginBody from "./components/LoginBody"
import Footer from "./components/Footer"
import { useAuth } from "./context/AuthContext";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import { useRouter } from "next/router";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Divider, Grid, IconButton, List, Toolbar } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {categoryListItems,couponListItems,dealListItems,userListItems,roleListItems,analyticsListItems} from "./components/dashboard/listItems";

function Dashboard() {
 
  const axiosPrivate = useAxiosPrivate();
  const router = useRouter()
  const [open, setOpen] = React.useState(true);
  
  // Drawer
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: "wrap",
        height: "100vh",
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
      
          [theme.breakpoints.down('md')]: {
            width: theme.spacing(9),
            whiteSpace: "nowrap",
            overflowX: 'hidden',
              width:"20%"
          },
          [theme.breakpoints.up('md')]: {
            width: "100%",
            whiteSpace: "wrap",
            overflowX: 'hidden',
          },
        
      },
    }),
  );

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
  <Grid container spacing={2}>
    <Grid item xs={8} sm={3}>
    <Drawer variant="permanent" open={open} sx={{width:"100%"}}>
          
          <List component="nav">
            {categoryListItems}
          
            {couponListItems}
          
            {dealListItems}
          
            {userListItems}
       
            {roleListItems}
       
            {analyticsListItems}
          </List>
        </Drawer>
    </Grid>

    <Grid item>
      
      </Grid>
  </Grid>
    </>
  )
}

export default Dashboard