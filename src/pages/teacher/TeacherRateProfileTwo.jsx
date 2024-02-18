import React from 'react'
import Header from '/src/pages/home/Header.jsx'
import GeometryImage from '/src/assets/geometryteachertwo.jpg'
import Footer from '/src/pages/home/Footer'
import useMedia from '/src/hooks/useMedia'


export default function TeacherRateProfile() {

  const isMobile = useMedia(1024)

  if (isMobile) {
    return(
      <>
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto px-4 py-4'>
        <Header />
        <div className='bg-white w-full mt-12 rounded-md shadow-xl'>
          <div className='px-4 py-4'>
            <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Eylül EKİN</h1>
            <span className='text-[#A8AEAF] text-xl'>@eylulekin</span>
          </div>
          <div className='w-full px-4 py-4'>
            <img src={GeometryImage} alt="" className='w-full h-[350px] object-cover rounded-md' />
          </div>
          <div className='flex w-full px-4 py-4 gap-x-4 flex-col'>
            <div className='bg-[#F1F1F1] bg-opacity-75 rounded-lg gap-y-2 px-4 py-4 flex flex-col' >
              <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Matematik</h1>
              <p className='font-montserrat text-sm'>En gelişmiş teknikler ve metotlarla zor gibi gözüken matematiği çok basit hale çevirebiliriz!</p>
              <p className='mb-2 font-montserrat text-sm'>İster online ister yüz yüze şeklinde eğitim verilebilir.</p>
              <button className='px-3 py-3 border text-primary-color border-primary-color w-44 rounded-lg font-montserrat'>İletişime geç</button>
            </div>
            <div className='bg-[#F1F1F1] bg-opacity-75 px-4 py-4'>
              <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Ücretlendirme</h1>
              <div className='w-full flex justify-center items-center flex-col'>
                <div className='w-full bg-white flex justify-between items-center px-4 py-4 rounded-md mt-2'>
                  <span className='font-montserrat'>Yıllık ücretlendirme</span>
                  <span className='font-montserrat'>10.000₺</span>
                </div>
                <div className='w-full bg-white flex justify-between items-center px-4 py-4 rounded-md mt-2'>
                  <span className='font-montserrat'>Aylık ücretlendirme</span>
                  <span className='font-montserrat'>3.000₺</span>
                </div>
                <div className='w-full bg-white flex justify-between items-center px-4 py-4 rounded-md mt-2'>
                  <span className='font-montserrat'>Saatlik ücretlendirme</span>
                  <span className='font-montserrat'>300₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }

  return (
    <>
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto'>
        <Header />
        <div className='bg-white w-full h-[750px] mt-12 rounded-md shadow-xl'>
          <div className='px-4 py-4'>
            <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Eylül EKİN</h1>
            <span className='text-[#A8AEAF] text-xl'>@eylulekin</span>
          </div>
          <div className='w-full px-4 py-4 flex justify-start items-center'>
            <img src={GeometryImage} alt="" className='w-full h-[350px] object-cover rounded-md' />
          </div>
          <div className='grid grid-cols-2 w-full h-[255px] px-4 py-4 gap-x-4 '>
            <div className='bg-[#F1F1F1] bg-opacity-75 rounded-lg gap-y-2 px-4 py-4 flex flex-col' >
              <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Geometri</h1>
              <p className='font-montserrat text-sm'>En gelişmiş teknikler ve metotlarla zor gibi gözüken geometri derslerini çok basit hale çevirebiliriz!</p>
              <p className='mb-2 font-montserrat text-sm'>İster online ister yüz yüze şeklinde eğitim verilebilir.</p>
              <button className='px-3 py-3 border text-primary-color border-primary-color w-44 rounded-lg font-montserrat'>İletişime geç</button>
            </div>
            <div className='bg-[#F1F1F1] bg-opacity-75 px-4 py-4'>
              <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Ücretlendirme</h1>
              <div className='w-full flex justify-center items-center flex-col'>
                <div className='w-full bg-white flex justify-between items-center px-4 py-4 rounded-md mt-2'>
                  <span className='font-montserrat'>Yıllık ücretlendirme</span>
                  <span className='font-montserrat'>16.000₺</span>
                </div>
                <div className='w-full bg-white flex justify-between items-center px-4 py-4 rounded-md mt-2'>
                  <span className='font-montserrat'>Aylık ücretlendirme</span>
                  <span className='font-montserrat'>2.000₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>
  )
}
