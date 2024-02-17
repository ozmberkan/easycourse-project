import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import homeIll from '/src/assets/homeill.png';
import { Link } from 'react-router-dom';
import useMedia from '/src/hooks/useMedia';


export default function Starter() {

  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
        <>
        <div className='mx-auto bg-white rounded-xl mt-6 flex justify-center items-center shadow-xl flex-col ' >
          <div className='w-[300px] flex justify-center items-center'>
            <img src={homeIll} alt="homeIll" />
          </div>
          <div className='w-full px-5 py-6 flex flex-col gap-y-3 justify-center items-center text-center'>
            <h1 className='text-primary-color font-montserrat font-black text-[25px] '>Eğitimin kolay adresi ! </h1>
            <p className=' text-primary-color font-montserrat font-medium text-[15px] mb-5'>100'den fazla eğitmene ve  20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsin.</p>
            <div className='flex justify-center items-center relative w-full'>
              <input type="text" placeholder='Ne öğrenmek istersin?' className='font-montserrat w-full h-12 rounded-xl border-[3px] border-primary-color text-black text-opacity-50 pl-7 pr-12 text-[14px] font-medium focus:outline-none' />
              <Link to="/teachersearch" className='absolute right-5 top-35 ml-3 w-6 h-6 flex justify-center items-center'>
                <IoIosSearch size={20} className='text-primary-color  cursor-pointer' />
              </Link>
            </div>
            <div className='flex justify-start items-center mt-1 flex-col w-full'>
              <span className='text-black mt-5 font-montserrat'>Popüler aratmalar :</span>
              <Link to="/teachersearch" className='bg-primary-color text-white w-full px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Matematik</Link>
              <Link to="/teachersearch" className='bg-primary-color text-white w-full px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Türk Dili ve Edebiyatı</Link>
              <Link to="/teachersearch" className='bg-primary-color text-white w-full px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Fizik</Link>
              <Link to="/teachersearch" className='bg-primary-color text-white w-full px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Geometri</Link>
            </div>
          </div>
        </div>
        <div className=' flex justify-center items-center py-4 px-4 mt-4'>
          <a href="#starter" className='bg-primary-color px-4 py-4 rounded-full text-white animate-bounce'><FaArrowDown size={30} /></a>
        </div>
        </>
    )
  }


  return (
    <>
      <div className='w-full h-[500px] bg-white rounded-xl mt-[100px] flex justify-start items-start shadow-xl' >
        <div className='w-[700px] h-full  flex justify-center items-center'>
          <img src={homeIll} alt="homeIll" />
        </div>
        <div className='w-full px-5 py-6 flex flex-col gap-y-3'>
          <h1 className='text-primary-color font-montserrat font-black text-[50px] '>Eğitimin kolay adresi ! </h1>
          <p className=' text-primary-color font-montserrat font-medium text-[25px] mb-5'>100'den fazla eğitmene ve  20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsin.</p>
          <div className='flex justify-center items-center relative'>
            <input type="text" placeholder='Ne öğrenmek istersin?' className='font-montserrat w-full h-20 z-10 rounded-xl border-[3px] border-primary-color text-black text-opacity-50 px-7 text-[20px] font-medium focus:outline-none' />
            <Link to="/teachersearch" className='absolute right-5 top-35 z-20'>
              <IoIosSearch size={50} className='text-primary-color  cursor-pointer' />
            </Link>
          </div>
          <div className='flex justify-start items-center gap-x-6 mt-4'>
            <span className='text-black mt-5 font-montserrat'>Popüler aratmalar :</span>
            <Link to="/teachersearch" className='bg-primary-color text-white w-auto px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Matematik</Link>
            <Link to="/teachersearch" className='bg-primary-color text-white w-auto px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Türk Dili ve Edebiyatı</Link>
            <Link to="/teachersearch" className='bg-primary-color text-white w-auto px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Fizik</Link>
            <Link to="/teachersearch" className='bg-primary-color text-white w-auto px-4 h-10 rounded-md mt-5 font-montserrat flex justify-center items-center'>Geometri</Link>
          </div>
        </div>
      </div>
      <div className=' flex justify-center items-center py-4 px-4 mt-24'>
        <a href="#starter" className='bg-primary-color px-4 py-4 rounded-full text-white animate-bounce'><FaArrowDown size={30} /></a>
      </div>
    </>
  )
}
