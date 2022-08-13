import AppBar from "../components/AppBar"
import { useRouter } from 'next/router'
import axios from "axios"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

function category({data}) {
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
    <AppBar categories={data}/>
    <ThemeProvider theme={themeLight}>
    <CssBaseline />

   
    <div><p>Route: {category}</p></div>
    </ThemeProvider>
    </>
  )
}

export default category