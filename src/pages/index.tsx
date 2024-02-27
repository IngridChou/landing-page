import Header from "@/Components/Header";
import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import SubBanner from "@/Components/SubBanner";
import Subscribe from "@/Components/Subscribe";

import Spline from '@splinetool/react-spline';
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main
      className={`flex bg-gradient-to-b from-blue-100 from-1% via-white to-white max-w-full min-h-screen flex-col items-center justify-between gap-10`}
    >
      <Header />
      <div className="flex flex-col items-center gap-10 mt-36">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-lgreen text-2xl text-center">Forecast weather with Pokémon.</h1>
          <h1 className="text-black text-2xl text-center">In your pocket,<br className="md:hidden" /> Anytime,<br className="md:hidden" /> Anywhere.</h1>
        </div>
        <Spline
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          scene="https://prod.spline.design/Tivl2HLEwDLPzDou/scene.splinecode" 
        />
        <p className="text-black px-10 py-2 md:px-18 bg-white border-dotted border-2 border-lgreen">PocketForecast adds a touch of adventure to weather awareness. Say goodbye to the boring and dull weather updates and immerse yourself in a world where Pokémon come to life.</p>
        <Button variant="contained" className="text-sblue w-[30%] bg-white rounded-lg px-5 py-2 md:w-[15%] lg:w-[8%]">Try it out</Button>
        <div className="flex flex-col gap-10 px-10">
          <Cards />
          <SubBanner />
          <Subscribe />
        </div>
      </div>
      <Footer />
    </main>
  );
}
