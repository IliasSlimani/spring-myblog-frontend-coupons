import AppBar from "../components/AppBar"
import { useRouter } from 'next/router'
import axios from "axios"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


function category() {
    const router = useRouter()
    const {category} = router.query
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

   
    <div><p>Route: {category}</p></div>
    </ThemeProvider>
    </>
  )
}

export default category