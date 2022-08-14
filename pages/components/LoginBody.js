import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from "yup";
import validationsLogin from "../validations/login"
import { useFormik } from 'formik';
import axios from "axios";
import { useRouter } from "next/router";
import Success from "./Success"
import Error from "./Error"
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';

const theme = createTheme();

export default function SignInSide() {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error_msg, setErrorMsg] = useState("")
  const [success_msg, setSuccessMsg] = useState("")
  const router = useRouter()
  const { setAuth } = useAuth();

  const changeSuccess = (success) => {
    setIsSuccess(success);
   }
  
   const changeError = (error) => {
    
    setIsError(error);
    console.log(isError);
   }
  
  const formik = useFormik({
    initialValues: {
    email: "",   
    password: "",
    rememberMe: false
  },
  validationSchema: validationsLogin,
  onSubmit: async (values) => {
    const { email, password} = values;
    // Send request to server
    await axios({
      method: "POST",
      url: "http://localhost:8080/login",
      data: {
        "email": email,
        "password": password
      },
      withCredentials: true
    }).then((response) => {
     
      setIsError(false);
      setSuccessMsg(response.data.message);
      setAuth(response.data.access_token);
      
      setIsSuccess(true);
        router.push("/dashboard");
      


    }).catch((err) => {
      console.log(err);

      setIsSuccess(false);
      setErrorMsg(err.response.data.message);
      setIsError(true);
      
    });
    
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.imgur.com/u08S2s4.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                helperText={formik.touched.email ? formik.errors.email : ""}
              error={formik.touched.email && Boolean(formik.errors.email)}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                helperText={formik.touched.password ? formik.errors.password : ""}
                error={formik.touched.password && Boolean(formik.errors.password)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" id="rememberMe" name="rememberMe"  onChange={formik.handleChange}
                defaultChecked={formik.values.rememberMe}
                helperText={formik.touched.rememberMe ? formik.errors.rememberMe : ""}
                error={formik.touched.rememberMe && Boolean(formik.errors.rememberMe)} color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                className="bg-blue-400 hover:bg-pink-200 hover:text-black"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="reset" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
      {isSuccess && <Success msg={success_msg} success={changeSuccess} />}
       {isError && <Error msg={error_msg} error={changeError}/>}
    </ThemeProvider>
  );
}