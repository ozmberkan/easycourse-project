import React from 'react'
import Header from '/src/pages/home/Header.jsx'
import contactImg from '/src/assets/contactill.png'

export default function Contact() {
  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto'>
        <Header />
        <div className='w-full bg-white px-24 py-4 mt-12 rounded-md shadow-md flex justify-center items-center max-h-[700px]'>
          <div className='w-full flex flex-col gap-y-4 max-h-[500px]'>
            <h1 className='font-montserrat text-primary-color text-[35px] font-extrabold'>Bizimle iletişime geç!</h1>
            <input placeholder='İsim Soyisim' type="text" className='w-[80%] border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium'/>
            <input placeholder='Konu' type="text" className='w-[80%] border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium'/>
            <textarea placeholder='Mesaj' rows="10" type="message" className='w-[80%] border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium '/>
            <button className='px-4 py-4 w-[80%] bg-primary-color text-white font-montserrat font-semibold rounded-md border border-transparent hover:bg-white hover:text-primary-color hover:border hover:border-primary-color transition-colors'>Gönder</button>
          </div>
          <div className=' w-full h-full'>
            <img src={contactImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
