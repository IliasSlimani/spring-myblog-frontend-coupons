import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as yup from "yup";
import validationsSignup from "../validations/signup"
import { useFormik } from 'formik';
import axios from "axios"
import { useEffect, useState } from 'react'
import Success from "./Success"
import Error from "./Error"
import { useRouter } from "next/router";

const theme = createTheme();

export default function SignUp() {
 const [isSuccess, setIsSuccess] = useState(false)
 const [isError, setIsError] = useState(false)
 const [error_msg, setErrorMsg] = useState("")
 const [success_msg, setSuccessMsg] = useState("")
 const router = useRouter()

 const changeSuccess = (success) => {
  setIsSuccess(success);
 }

 const changeError = (error) => {
  
  setIsError(error);
  console.log(isError);
 }
  const formik = useFormik({
    initialValues: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",   
    password: "",
    ismarketing: false
  },
  validationSchema: validationsSignup,
  onSubmit: async (values) => {
    // Send request to server
    const { firstName, lastName, username, email, password} = values;
    
    await axios({
      method: "POST",
      url: "http://localhost:8080/api/register",
      data: {
        "fname": firstName,
        "lname": lastName,
        "username": username,
        "password": password,
        "email": email
      }
    }).then((response) => {
    
      setIsError(false);
      setSuccessMsg(response.data.message);
      setIsSuccess(true);
        router.push("/login");
      


    }).catch((err) => {
      console.log(err.response.data);

      setIsSuccess(false);
      setErrorMsg(err.response.data.message);
      setIsError(true);
      
    });


  },
});

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            mb:8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"                  
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  helperText={formik.touched.firstName ? formik.errors.firstName : ""}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  helperText={formik.touched.lastName ? formik.errors.lastName : ""}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  helperText={formik.touched.username ? formik.errors.username : ""}
                error={formik.touched.username && Boolean(formik.errors.username)}
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.touched.email ? formik.errors.email : ""}
                error={formik.touched.email && Boolean(formik.errors.email)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" id="ismarketing" name="ismarketing" onChange={formik.handleChange}
                  defaultChecked={formik.values.marketing}
                  helperText={formik.touched.marketing ? formik.errors.marketing : ""}
                  error={formik.touched.marketing && Boolean(formik.errors.marketing)} color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              className="bg-blue-400 hover:bg-pink-200 hover:text-black"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

       {isSuccess && <Success msg={success_msg} success={changeSuccess} />}
       {isError && <Error msg={error_msg} error={changeError}/>}
      </Container>
    </ThemeProvider>
  );

  
}
