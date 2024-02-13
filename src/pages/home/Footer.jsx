import React from 'react'
import appStore from '/src/assets/appstore.png';
import playStore from '/src/assets/playstore.png';
import huawei from '/src/assets/huawei.jpg';

export default function Footer() {
  return (
    <div className='w-full h-screen  flex flex-col justify-end items-center '>
      <div className='bg-white h-[500px] w-full flex flex-row justify-start items-center px-12'>
        <div className='w-[25%] h-full px-4 py-4 bg-green-500'>
          <h1 className='font-damion text-[50px]'>easycourse</h1>
          <div className='flex flex-col gap-y-4 '>
            <img src={appStore} alt=""className=' cursor-pointer w-44 h-12' />
            <img src={playStore} alt="" className='cursor-pointer w-44 h-12'/>
            <img src={huawei} alt="" className='cursor-pointer w-44 h-12'/>
          </div>
        </div>
        <div className='w-[25%]  h-full px-4 py-24 bg-yellow-500'>
          <ul className='flex flex-col gap-y-8 justify-center items-start'>
            <li className='text-xl'>Hakkımızda</li>
            <li className='text-xl'>İletişim</li>
            <li className='text-xl'>Yardım</li>
            <li className='text-xl'>Sosyal Sorumluluk Projeleri</li>
            <li className='text-xl'>Teknoloji Eğitimleri</li>
          </ul>
        </div>
        <div className='w-[25%]  h-full px-4 py-24 bg-yellow-500'>
        <ul className='flex flex-col gap-y-8 justify-center items-start'>
            <li className='text-xl'>Sıkça Sorulan Sorular</li>
            <li className='text-xl'>Kişisel Verilerin Korunması</li>
            <li className='text-xl'>Gizlilik Politikası</li>
            <li className='text-xl'>Kullanım Koşulları</li>
            <li className='text-xl'>Çerez Politikası</li>
          </ul>
        </div>
        <div className='w-[25%] h-full px-4 py-24 flex flex-col bg-yellow-500 '>
        <button className='border-[2px] border-primary-color text-primary-color h-12 rounded-md mt-5 font-montserrat w-full' >Avantajlar</button>
        <button className='border-[2px] border-primary-color text-primary-color h-12 rounded-md mt-5 font-montserrat w-full' >Avantajlar</button>
        <button className='border-[2px] border-primary-color text-primary-color h-12 rounded-md mt-5 font-montserrat w-full' >Avantajlar</button>
        <button className='border-[2px] border-primary-color text-primary-color h-12 rounded-md mt-5 font-montserrat w-full' >Avantajlar</button>
        </div>
      </div>
    </div>
  )
}
