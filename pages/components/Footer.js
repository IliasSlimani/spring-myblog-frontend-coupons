import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Link from "next/link"
import { Container } from 'postcss';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { palette } from '@mui/system';

export default function BoxSx() {

    const [site_url, setUrl] = React.useState("coupons.com")
  return (


    <Box 
      sx={{
        width: "100%",
        
        backgroundColor: 'primary.main',
        px: 2,
        
        
        display: "flex",
        flexDirection: "column"
        
      }}
    >

      <img src="/logo.png" height="150px" width="150px" className="object-contain mt-4 mx-auto"/>
    
      <Box sx={{display: "flex" ,flexDirection: "row", justifyContent: "space-between", mx: "auto", mt:3, flexWrap: "nowrap"}}>
      <Typography variant="body2" component="body2" sx={{color: "white", fontWeight: "bold", mx: 2}}>
            <Link href="terms">
                Terms of Use
            </Link>

      </Typography>
      <Typography variant="body2" component="body2" sx={{color: "white", fontWeight: "bold", mx: 2}}>
            <Link href="privacy">
                Privacy Policy
            </Link>

      </Typography>
      <Typography variant="body2" component="body2" sx={{color: "white", fontWeight: "bold", mx: 2}}>
            <Link href="sitemap">
                Sitemap
            </Link>

      </Typography>

      </Box>

      <Box sx={{display: "flex" ,flexDirection: "row", justifyContent: "space-between", mx: "auto", mt:3, flexWrap: "nowrap"}}>
      <a href="https://www.facebook.com">
      <FacebookIcon sx={{color: "white", fontWeight: "bold", mx: 2}} className="hover:cursor-pointer">
            
                
          

      </FacebookIcon>
      </a>
      <a href="https://www.twitter.com">
      <TwitterIcon sx={{color: "white", fontWeight: "bold", mx: 2}} className="hover:cursor-pointer">
     
                
              

      </TwitterIcon>
      </a>
      <a href="https://www.instagram.com">
      <InstagramIcon sx={{color: "white", fontWeight: "bold", mx: 2}} className="hover:cursor-pointer">
            <Link href="sitemap">
                Sitemap
            </Link>

      </InstagramIcon>
      </a>

      </Box>

      <Box sx={{display: "flex" ,flexDirection: "row", justifyContent: "space-between", mx: "auto", mt:3, flexWrap: "nowrap"}}>
      <Typography variant="body2" component="body2" sx={{color: "white", fontWeight: "bold", mx: 2}}>
      © 2022 {site_url}  

      </Typography>
     

      </Box>

      <Box sx={{display: "flex" ,flexDirection: "column", justifyContent: "center", mx: "auto", mt:4, flexWrap: "nowrap"}}>
      <Typography variant="body2" component="body2" sx={{color: "white", mx: "auto", textAlign: "center"}}>
      Third-party trademarks are the property of their respective third-party owners.


      </Typography>
      <Typography variant="body2" component="body2" sx={{color: "white", mx: "auto", my: 2, textAlign: "center"}}>
      Presence of a third-party trademark does not mean that IcyCoupons has any relationship with that third-party or that the third-party endorses IcyCoupons or its services.


      </Typography>

      </Box>
        </Box>
  );
}
