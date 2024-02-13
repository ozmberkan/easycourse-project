import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import mathTeacher from '/src/assets/mathteacher.jpg';
import geometryTeacher from '/src/assets/geometryteacher.jpg';

export default function Search() {
  return (
    <div className='container mx-auto w-full h-screen flex justify-center items-center flex-col gap-y-12' id='starter'>
      <div className='bg-white rounded-lg shadow-lg w-full h-[300px] flex justify-center items-center px-24 py-6 flex-col gap-y-6'>
        <h1 className='text-4xl font-bold text-primary-color font-montserrat'>İstediğin eğitim dalında ki eğitmenini bul! </h1>
        <span className='text-lg font-medium text-black text-opacity-50 font-montserrat'>Aşağıdaki alandan istediğin eğitmenin ismini girerek profiline gidebilir, yorumlarını ve puanını görüntüleyebilirsin.</span>
        <div className='flex justify-center items-center relative w-full'>
          <input type="text" placeholder='Ne öğrenmek istersin?' className='w-full h-20 z-10 rounded-xl border-[3px] border-primary-color text-black text-opacity-50 px-7 text-[30px] font-medium font-montserrat focus:outline-none' />
          <IoIosSearch size={50} className='text-primary-color absolute right-5 top-35 z-20 cursor-pointer'/>
        </div>
      </div>

        <div className='flex flex-row w-full justify-center items-center gap-x-12'>
          <div className='bg-white rounded-lg shadow-lg w-full h-[300px]'>
            <div className='w-full fleex justify-start items-center px-4 py-4 bg-primary-color bg-opacity-60 rounded-tr-md rounded-tl-md text-white font-montserrat'>
              <span>Haftanın en çok aranan eğitmeni</span>
            </div>
            <div className='w-full h-[244px] flex justify-center items-center gap-x-6 py-6 px-12'>
              <div className='bg-white w-full h-full flex flex-col gap-y-5'>
                <h2 className='font-montserrat text-black text-opacity-65 text-2xl'>Serkan ALICI</h2>
                <p className='font-montserrat text-black text-opacity-65 text-2xl'>Matematik</p>
                <div className='flex flex-row gap-x-4 text-yellow-500'>
                <FaStar size={20}/>
                <FaStar size={20}/>
                <FaStar size={20}/>
                <FaStar size={20}/>
                <FaStar size={20}/>
                </div>
                <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-24 text-white'>Profil</button>
              </div>
              <div className='bg-white w-full h-full object-cover'>
                <img src={mathTeacher} alt="" className='object-cover w-full h-full rounded-lg cursor-pointer' />
              </div>
            </div>
          </div>
          
          <div className='bg-white rounded-lg shadow-lg w-full h-[300px]'>
            <div className='w-full fleex justify-start items-center px-4 py-4 bg-primary-color bg-opacity-60 rounded-tr-md rounded-tl-md text-white font-montserrat'>
              <span>Haftanın en çok aranan eğitmeni</span>
            </div>
            <div className='w-full h-[244px] flex justify-center items-center gap-x-6 py-6 px-12'>
              <div className='bg-white w-full h-full flex flex-col gap-y-5'>
              <h2 className='font-montserrat text-black text-opacity-65 text-2xl'>Eylül EKİN</h2>
                <p className='font-montserrat text-black text-opacity-65 text-2xl'>Geometri</p>
                <div className='flex flex-row gap-x-4 text-yellow-500'>
                <FaStar size={20}/>
                <FaStar size={20}/>
                <FaStar size={20}/>
                <FaStar size={20}/>
                </div>
                <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-24 text-white'>Profil</button>
              </div>
              <div className='bg-white w-full h-full object-cover'>
                <img src={geometryTeacher} alt="" className='object-cover w-full h-full rounded-lg cursor-pointer' />
              </div>
            </div>
          </div>
        </div>

        
    </div>
  )
}
