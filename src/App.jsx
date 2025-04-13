import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';


import Banners from './components/Banners/Banners';
import Banners2 from './components/Banners/Banners2';
import Banners3 from './components/Banners/Banners3';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
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
