import React from 'react'
import Header from '/src/pages/home/Header'
import studentImg from '/src/assets/student.jpg'
import { IoMdArrowDroprightCircle } from "react-icons/io";


export default function StudentProfile() {
  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto'>
        <Header />
        <div className='w-full h-[730px] mt-12 flex gap-x-5 '>
          <div className='bg-white w-full h-full rounded-lg shadow-md px-6 py-6 flex flex-col gap-y-3'>
            <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Berkan ÖZMEN</h1>
            <p className='text-[#A8AEAF] text-xl'><span className='text-primary-color font-montserrat text-md font-semibold'>s</span> - @ozmberkan</p>
            <img src={studentImg} alt="" className='rounded-xl w-full h-[350px] object-cover' />
            <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 items-center'>
              <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>Şifre Değiştir</button>
              <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>Bildirim Ayarları</button>
              <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>E-Posta Değiştir</button>
              <div className='relative '>
                <input type="text" name="teacherCode" id="teacherCode" className='border w-full border-primary-color px-4 py-4 rounded-xl text-center text-primary-color font-montserrat' placeholder='Eğitmen Kodu' />
                <IoMdArrowDroprightCircle className='absolute right-3 top-3.5 flex items-center cursor-pointer' size={30}/>
              </div>
            </div>
            <button className='w-full border border-primary-color px-4 py-4 rounded-md font-montserrat'>Profil Resmi Ekle/Değiştir</button>
          </div>
          <div className='bg-white w-full h-full rounded-lg shadow-md py-6 px-6'></div>
        </div>
      </div>
    </div>
  )
}
