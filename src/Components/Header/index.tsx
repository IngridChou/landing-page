import * as React from 'react';
import Link from '@mui/material/Link';
import { Button } from "@mui/material";
import Image from 'next/image';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Header() {
    return (
        <header className='flex flex-row items-center justify-between px-5 py-2 bg-lgreen min-w-full fixed top-0 rounded-b-xl z-50 md:px-10'>
            <div className='flex flex-row items-center gap-1'>
                <Button variant="text">
                    <Link href='/'>
                        <Image
                            src="/logo.png"
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                    </Link>
                </Button>
                <h1 className='text-white hidden md:block'>PocketForecast</h1>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <h1 className='hidden md:block'>Pocket you forceast now</h1>
                <ArrowForwardIcon
                    fontSize="medium"
                    sx={{ color: 'white' }}
                    className='animate-shake animate-infinite hidden md:block'
                />
                <Link className='no-underline' href='/contact'>
                    <Button variant="text" className='bg-white text-sblue hover:bg-white/90 rounded-lg px-5 py-2'>
                        Get Started
                    </Button>
                </Link>
            </div>
        </header>
    )
}