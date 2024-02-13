import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";


export default function Starter() {
  return (
    <>
    <div className='w-full h-[500px] bg-white rounded-xl mt-[150px] flex justify-start items-start shadow-xl' >
      <div className='w-[700px] h-full  flex justify-center items-center'>
        <img src="easycourse\src\assets\homeill.png" alt="" />
      </div>
      <div className='w-full px-5 py-6 flex flex-col gap-y-3'>
        <h1 className='text-primary-color font-montserrat font-black text-[50px] '>Eğitimin kolay adresi ! </h1>
        <p className=' text-primary-color font-montserrat font-medium text-[25px] mb-5'>100'den fazla eğitmene ve  20’den fazla eğitim dalına anında erişebilir, kolayca öğrenebilirsin.</p>
        <div className='flex justify-center items-center relative'>
          <input type="text" placeholder='Ne öğrenmek istersin?' className='font-montserrat w-full h-20 z-10 rounded-xl border-[3px] border-primary-color text-black text-opacity-50 px-7 text-[20px] font-medium focus:outline-none' />
          <IoIosSearch size={50} className='text-primary-color absolute right-5 top-35 z-20 cursor-pointer'/>
        </div>
        <div className='flex justify-start items-center gap-x-6 mt-4'>
          <span className='text-black mt-5 font-montserrat'>Popüler aratmalar :</span>
          <button className='bg-primary-color text-white w-24 h-10 rounded-md mt-5 font-montserrat'>Matematik</button>
          <button className='bg-primary-color text-white w-24 h-10 rounded-md mt-5 font-montserrat'>İngilizce</button>
          <button className='bg-primary-color text-white w-24 h-10 rounded-md mt-5 font-montserrat'>Geometri</button>
          <button className='bg-primary-color text-white w-24 h-10 rounded-md mt-5 font-montserrat'>Fizik</button>
        </div>
      </div>
    </div>
    <div className=' flex justify-center items-center py-4 px-4 mt-4'>
        <a href="#starter" className='bg-primary-color px-4 py-4 rounded-full text-white'><FaArrowDown size={30}/></a>
    </div>
    </>
  )
}
