
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './covid.css'



export default function Coviddisplay(props) {
    const { stateName, foreign, death, dis, toatl, india } = props

    return (

        <div className="d-flex flex-row justify-content-between flex-wrap" >
            {/* <div className="card my-3" style={{ width: '18rem', border: '2px sloid black' }} >
                <h1 className="card-title">{stateName}</h1>
                <h3>Forigen-cases={foreign}</h3>
                <h3>Indian-cases={india}</h3>
                <h3>Total-deaths={death}</h3>
                <h3>Discharged={dis}</h3>
                <h3>Toatal-conformed={toatl}</h3>
            </div> */}
            <div>
                <Card variant="outlined" className='card m-2 '>
                    <Typography variant="h6" component="div" className='p-3 border-bottom bgblue'>
                        {stateName}
                    </Typography>

                    <CardContent>

                        <CardContent className='d-flex justify-content-left p-0 ' align="left">
                            <Typography variant="body2" >Forigen cases:</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{foreign}</Typography>
                        </CardContent>

                        <CardContent className='d-flex justify-content-left p-0' align="left">
                            <Typography variant="body2">Indian cases:</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{india}</Typography>
                        </CardContent>

                        <CardContent className='d-flex justify-content-left p-0' align="left">
                            <Typography variant="body2">Total deaths:</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{death}</Typography>
                        </CardContent>

                        <CardContent className='d-flex justify-content-left p-0' align="left">
                            <Typography variant="body2">Discharged:</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{dis}</Typography>
                        </CardContent>

                        <CardContent className='d-flex justify-content-left p-0' align="left">
                            <Typography variant="body2">Toatalconformed:</Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">{toatl}</Typography>
                        </CardContent>

                    </CardContent>

                </Card>
            </div>
        </div>
    )
}