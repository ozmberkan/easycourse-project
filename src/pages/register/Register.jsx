import React from 'react'
import Header from '/src/pages/home/Header.jsx'

export default function Register() {
  return (
    <>
     <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto flex flex-col gap-y-24'>
        <Header />

        <div className='bg-white px-24 py-24 rounded-lg shadow-xl'>
          Register
        </div>
      </div>
     
    </div>
    </>
   
  )
}
