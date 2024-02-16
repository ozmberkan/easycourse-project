import React from 'react'
import Header from '/src/pages/home/Header.jsx'
import contactImg from '/src/assets/contactill.png'
import useMedia from '/src/hooks/useMedia'

export default function Contact() {

  const isMobile = useMedia(1024);

  if(isMobile){
    return(
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center px-4 py-4' >
      <div className='container mx-auto'>
        <Header />
        <div className='w-full bg-white px-6 py-4 mt-12 rounded-md shadow-md flex justify-center items-center flex-col'>
        <div className=' w-[400px] h-full'>
            <img src={contactImg} alt="" />
          </div>
          <div className='w-full flex flex-col gap-y-4 max-h-[500px] text-center '>
            <h1 className='font-montserrat text-primary-color text-[25px] font-extrabold'>Bizimle iletişime geç!</h1>
            <p className='font-montserrat text-gray-600 text-[15px] font-medium'>Aşağıdaki alanlardan geri bildirim ve önerilerini bize iletebilirsin.</p>
            <input placeholder='İsim Soyisim' type="text" className='w-full border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium'/>
            <input placeholder='Konu' type="text" className='w-full border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium'/>
            <textarea placeholder='Mesaj' rows="10" type="message" className='w-full border-2 border-primary-color px-4 py-4 rounded-md focus:outline-none font-montserrat text-primary-color font-medium '/>
            <button className='px-4 py-4 w-full bg-primary-color text-white font-montserrat font-semibold rounded-md border border-transparent hover:bg-white hover:text-primary-color hover:border hover:border-primary-color transition-colors'>Gönder</button>
          </div>
          
        </div>
      </div>
    </div>
    )
  }

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
