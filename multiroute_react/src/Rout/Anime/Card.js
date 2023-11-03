import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Crds.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function MultiActionAreaCard(props) {
   

    return (
      <Card className='m-3 p-3 card-size' sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={props.Cover}
            alt="img is broken or img is not found"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{props.Title}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
         <a href={props.Details} className='mx-auto link '>
         <Button variant="outlined">Details</Button></a>
        </CardActions>
      </Card>
    );
  }
