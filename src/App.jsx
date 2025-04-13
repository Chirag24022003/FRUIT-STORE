import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Banners from './components/Banners/Banners';
import Banners2 from './components/Banners/Banners2';
import Banners3 from './components/Banners/Banners3';
import Hero from './components/Hero/Hero';
import Menus from './components/Menus/Menus';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/>
      <Menus/>
      <Banners/>
      <Banners2/>
      <Banners3/>
      <main className='overflow-x-hidden'>
        <Routes>
          <Route path='/'  />
          <Route path='/Banners' element={<Banners />} />
          <Route path='/Banners2' element={<Banners2 />} />
          <Route path='/Banners3' element={<Banners3 />} />
        </Routes>
      </main>
      <Footer />
      
     
    </BrowserRouter>
  );
};

export default App;
