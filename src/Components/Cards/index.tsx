import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Spline from '@splinetool/react-spline';

const card1 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Basic
            </Typography>
            <Typography variant="h5" component="div">
                $0/month
            </Typography>
            <Spline scene="https://prod.spline.design/0qC0KOPqnA9Ecu6E/scene.splinecode" />
            <div className='flex flex-col gap-3'>
            <Typography variant="body2" color="text.secondary">
                Access basic weather forecasts about current conditions and the upcoming weather.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Track the weather for your primary location with our free plan.
            </Typography>
            </div>
        </CardContent>
        <CardActions>
            <Button variant="contained" size="small" className='text-gray-400 rounded-lg px-5 py-2'>Get Started</Button>
        </CardActions>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Emerald
            </Typography>
            <Typography variant="h5" component="div">
                $4.99/month
            </Typography>
            <Spline scene="https://prod.spline.design/omVPXDTGy2GimumH/scene.splinecode" />
            <div className='flex flex-col gap-3'>
            <Typography variant="body2" color="text.secondary">
                Enhanced forecast accuracy and detailed weather predictions for your selected locations.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Extended weather tracking for multiple locations.
            </Typography>
            </div>
        </CardContent>
        <CardActions>
            <Button variant="contained" size="small" className='bg-lgreen rounded-lg px-5 py-2'>Get Started</Button>
        </CardActions>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Diamond
            </Typography>
            <Typography variant="h5" component="div">
                $9.99/month
            </Typography>
            <Spline scene="https://prod.spline.design/JSekInSXarYzng9z/scene.splinecode" />
            <div className='flex flex-col gap-3'>
            <Typography variant="body2" color="text.secondary">
                Unlock advanced weather insights, including detailed forecasts, historical data, and specialized alerts.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Unlimited location tracking feature for diamond plan only.
            </Typography>
            </div>
        </CardContent>
        <CardActions>
            <Button variant="contained" size="small" className='bg-sblue rounded-lg px-5 py-2'>Get Started</Button>
        </CardActions>
    </React.Fragment>
);

export default function Cards() {
    return (
        <Box className="flex flex-col items-center mt-10 gap-5 md:px-10 lg:px-32">
            <h1 className="text-black text-3xl">Pricing</h1>
            <div className='flex flex-col gap-5 lg:flex-row'>
            <Card variant="outlined" className='pb-5 px-2 rounded-md bg-gradient-to-b from-orange-400/10 to-white shadow-xl shadow-orange-400/10 w-full'>{card1}</Card>
            <Card variant="outlined" className='pb-5 px-2 rounded-md bg-gradient-to-b from-lgreen/50 to-white shadow-xl shadow-lgreen/40 w-full'>{card2}</Card>
            <Card variant="outlined" className='pb-5 px-2 rounded-md bg-gradient-to-b from-sblue/50 to-white shadow-xl shadow-sblue/40 w-full'>{card3}</Card>
            </div>
        </Box>
    );
}
