import React from 'react'
import appStore from '/src/assets/appstore.png';
import playStore from '/src/assets/playstore.png';
import huawei from '/src/assets/huawei.jpg';
import { Link } from 'react-router-dom';
import useMedia from '/src/hooks/useMedia';

export default function Footer() {

  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <>
        <div className='bg-white w-full flex justify-center items-center flex-col mt-24 '>
            <h1 className='font-damion text-[50px] text-primary-color w-full flex justify-center items-center mt-2'>easycourse</h1>
            <hr className='mb-2 mt-2' />

          <div className=' w-full h-full'>
            <ul className='flex flex-col gap-y-4 mt-6 justify-center items-center'>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Hakkımızda</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kariyer</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Teknoloji Kariyerleri</li>
              <Link to='/contact' className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>İletişim</Link>
            </ul>
          </div>
          <div className=' w-full h-full'>
            <ul className='flex flex-col gap-y-4 mt-6 justify-center items-center'>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Sıkça Sorulan Sorular</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kişisel Verilerin Korunması</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Çerez Politikası</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Gizlilik Politikası</li>
              <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kullanım Koşulları</li>
            </ul>
          </div>
          <div className='flex flex-col gap-y-6 w-full justify-center items-center mt-12'>
              <img src={appStore} alt="" className='cursor-pointer w-[200px]  object-cover' />
              <img src={playStore} alt="" className='cursor-pointer w-[200px]  object-cover' />
              <img src={huawei} alt="" className='cursor-pointer w-[200px]  object-cover' />
            </div>
            <div className='w-full h-full flex flex-col gap-y-4 py-16 px-6'>
              <Link to='/login'>
                <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Giriş Yap</button>
              </Link>
              <Link to='/register'>
                <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Kayıt Ol</button>
              </Link>
              <Link to='/contact'>
                <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>İletişim</button>
              </Link>
            </div>
        </div>
      </>
    )
  }


  return (
    <div className='bg-white w-full h-[350px] grid gap-x-12 grid-cols-4 items-center px-44'>
      <div className=' w-full h-full'>
        <h1 className='font-damion text-[50px] text-primary-color'>easycourse</h1>
        <div className='flex flex-col gap-y-6'>
          <img src={appStore} alt="" className='w-[170px] cursor-pointer' />
          <img src={playStore} alt="" className='w-[170px] cursor-pointer' />
          <img src={huawei} alt="" className='w-[170px] cursor-pointer' />
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full'>
          <ul className='flex flex-col gap-y-4 py-16'>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Hakkımızda</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kariyer</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Teknoloji Kariyerleri</li>
            <Link to='/contact' className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>İletişim</Link>
          </ul>
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full'>
          <ul className='flex flex-col gap-y-4 py-16'>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Sıkça Sorulan Sorular</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kişisel Verilerin Korunması</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Çerez Politikası</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Gizlilik Politikası</li>
            <li className='text-primary-color font-montserrat font-medium text-lg cursor-pointer hover:underline'>Kullanım Koşulları</li>
          </ul>
        </div>
      </div>
      <div className=' w-full h-full'>
        <div className='w-full h-full flex flex-col gap-y-4 py-16'>
          <Link to='/login'>
            <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Giriş Yap</button>
          </Link>
          <Link to='/register'>
            <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>Kayıt Ol</button>
          </Link>
          <Link to='/contact'>
            <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat w-full text-white hover:bg-white hover:text-primary-color hover:border-primary-color border transition-all'>İletişim</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
