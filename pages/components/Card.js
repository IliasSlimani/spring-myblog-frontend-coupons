import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Stack } from '@mui/material';
import Tag from "./Tag"
import Link from "next/link"

export default function ImgMediaCard({coupon}) {
  return (
    <Grid item md={4} xs={11} sx={{mx:"auto"}} >
      <Link href={`/coupon/${coupon.id}`}>
    <Card className="hover:cursor-pointer" sx={{ mx: "auto" , borderRadius: 10, boxShadow: 3}}>
      <CardMedia
      
        component="img"
        alt="green iguana"
        height="140"
        image={coupon.image}
      />
      <CardContent>
      <Stack direction="row" spacing={1} sx={{mb:2}}>
        {coupon.tag.map((tag) => {
          return (
           
     
     <Tag value={tag}/>
         
         
          )
        })}
         </Stack>
        <Typography gutterBottom variant="h5" component="div">
          {coupon.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coupon.descr}
        </Typography>

        <Stack direction="row" spacing={2} sx={{mt:4, justifyContent: "space-between"}}>
        <Chip label={`${coupon.nleft} left Today`} color="secondary" variant="outlined" sx={{borderRadius:3, borderStyle:"dashed"}} />
        <Chip label={`${coupon.nuses} used`} color="secondary" variant="outlined" sx={{borderRadius:3, borderStyle:"dashed"}}/>
        </Stack>
      </CardContent>
      <CardActions>
        <Link href={`/coupon/${coupon.id}`}>
        <Button sx={{ml:2}} size="small">Learn More</Button>
        </Link>
      </CardActions>


    </Card>
    </Link>
    </Grid>
  );
}
