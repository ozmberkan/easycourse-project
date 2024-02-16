import Header from './pages/home/Header';
import Starter from './pages/home/Starter';
import RegisterOrLogin from './pages/home/RegisterOrLogin';
import Search from './pages/home/Search';
import Footer from './pages/home/Footer';
import React from 'react';
import useMedia from './hooks/useMedia';

export default function () {

  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center px-4 py-4' >
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
