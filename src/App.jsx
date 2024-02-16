import Header from './pages/home/Header';
import Starter from './pages/home/Starter';
import RegisterOrLogin from './pages/home/RegisterOrLogin';
import Search from './pages/home/Search';
import Footer from './pages/home/Footer';
import React from 'react';

export default function () {
  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto'>
        <Header />
        <Starter />
        <RegisterOrLogin />
        <Search />
      </div>
      <Footer />

  </div>
  )
}
