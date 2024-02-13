import React from 'react'
import appStore from '/src/assets/appstore.png';
import playStore from '/src/assets/playstore.png';
import huawei from '/src/assets/huawei.jpg';

export default function Footer() {
  return (
    <div className='bg-white w-full h-[350px] grid gap-x-12 grid-cols-4 items-center px-44'>
      <div className=' w-full h-full'>
        <h1 className='font-damion text-[50px] text-primary-color'>easycourse</h1>
        <div className='flex flex-col gap-y-6'>
          <img src={appStore} alt="" className='w-[170px]' />
          <img src={playStore} alt="" className='w-[170px]' />
          <img src={huawei} alt="" className='w-[170px]' />
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full'>
          <ul className='flex flex-col gap-y-4 py-16'>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Hakkımızda</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Kariyer</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Teknoloji Kariyerleri</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>letişim</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>letişim</li>
          </ul>
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full'>
          <ul className='flex flex-col gap-y-4 py-16'>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Sıkça Sorulan Sorular</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Kişisel Verilerin Korunması</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Çerez Politikası</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Gizlilik Politikası</li>
            <li className='text-primary-color font-montserrat font-medium text-lg'>Kullanım Koşulları</li>
          </ul>
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full flex flex-col gap-y-4 py-16'> 
        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Giriş Yap</button>
        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Kayıt Ol</button>
        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Ücretlendirme</button>
        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Avantajlar</button>
        </div>
      </div>
    </div>
  )
}
