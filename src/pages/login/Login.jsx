import React from 'react'
import Header from '/src/pages/home/Header.jsx'

export default function Login() {
  return (
    <>
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto flex flex-col gap-y-24 h-screen'>
        <Header />

        <div className='bg-white px-24 py-24 rounded-lg shadow-xl'>
          Login
        </div>
      </div>
     
    </div>
    </>
  )
}
