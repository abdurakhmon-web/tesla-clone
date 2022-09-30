import Head from 'next/head'
import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import ModelY from '../components/ModelY.js';
import ModelS from '../components/ModelS.js';
import ModelX from '../components/ModelX.js';
import SolarPanels from '../components/SolarPanels.js';
import SolarRoof from '../components/SolarRoof.js';
import Accessories from '../components/Accessories.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla Clone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Navbar/>
      <Header/>
      <ModelY/>
      <ModelS/>
      <ModelX/>
      <SolarPanels/>
      <SolarRoof/>
      <Accessories/>
      <Footer/>
    </>
  )
}
