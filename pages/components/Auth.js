import React from 'react'
import { useAuth } from "../context/AuthContext";
import useRefreshToken from "../hooks/useRefreshToken";
import axios from "../api/axios";
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import NextNProgress from 'nextjs-progressbar';

function Auth({ children }) {
  // get refresh token
  const router = useRouter()
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


  const {auth,setAuth} = useAuth();
  const isAuth = (auth.length !== 0);
  
  if(isAuth) {
    if(router.pathname === "/login" || router.pathname === "/signup") {
        router.push("/dashboard")
    }
        
  }
return (
    <>
    <NextNProgress />
      {children}
    </>
  
)
}

export default Auth