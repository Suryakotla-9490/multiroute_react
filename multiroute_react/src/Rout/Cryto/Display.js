
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Display(props) {
    let { image, label, source } = props
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {label}

                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {source}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}