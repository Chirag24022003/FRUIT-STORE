import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';
import Banners from './components/Banners/Banners';
import Banners2 from './components/Banners/Banners2';

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden'>

        <Navbar />
        <Hero />
        <Menus />
        <Banners />
        <Banners2 />

      </main>
    </>
  )

};

export default App;