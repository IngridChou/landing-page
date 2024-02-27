import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
    return (
        <Typography variant="body2" color="white" align="center">
            {'© '}
            <Link color="inherit" href="https://github.com/IngridChou/landing-page">
                Ingrid Chou
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <footer className='flex flex-row items-center justify-center bg-lgreen w-full h-32 sticky'>
            <div className='flex flex-col items-center gap-3'>
                <Copyright />
                <Link href='https://github.com/Civic86/Adv-final-Project' className='no-underline'>
                    <Button variant="outlined" className="normal-case flex flex-row gap-2 w-full border-solid border-white text-black bg-white shadow-md rounded-lg">
                        <GitHubIcon />
                        GitHub
                    </Button>
                </Link>
            </div>
        </footer>
    )
}