import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Spline from '@splinetool/react-spline';

const Banner = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function SubBanner() {
    return (
        <div className='flex flex-col gap-5 md:px-10 lg:flex-row lg:px-32'>
            <Banner
                variant="outlined"
                style={{
                    width: '100%',
                    height: '100%',
                    paddingBottom: '2em'
                }}
            >
                <Spline
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    scene="https://prod.spline.design/MA2tJWy9aKk3muig/scene.splinecode"
                />
                <Typography variant="h6" component="div">Take the Weather with You in Your Pocket</Typography>
                <Typography variant="body2" color="text.secondary">
                    Real-time updates keep you informed about changing weather conditions.
                </Typography>
            </Banner>
            <Banner
                variant="outlined"
                style={{
                    width: '100%',
                    height: '100%',
                    paddingBottom: '2em'
                }}
            >
                <Spline
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    scene="https://prod.spline.design/MjFMvkYpL3v4oLd2/scene.splinecode"
                />
                <Typography variant="h6" component="div">Forecast Fun with Pokémon Companions</Typography>
                <Typography variant="body2" color="text.secondary">
                    Experience Pokémon in sync with the current weather.
                </Typography>
            </Banner>
            <Banner
                variant="outlined"
                style={{
                    width: '100%',
                    height: '100%',
                    paddingBottom: '2em'
                }}
            >
                <Spline
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    scene="https://prod.spline.design/UDbQyNVLMlDdD67H/scene.splinecode"
                />
                <Typography variant="h6" component="div">Explore Pokémon with Pokédex Integration</Typography>
                <Typography variant="body2" color="text.secondary">
                    Explore detailed information in the integrated Pokédex.
                </Typography>
            </Banner>
        </div>
    );
}