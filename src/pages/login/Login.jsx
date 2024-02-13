import React, { useEffect, useState, useRef  } from 'react'
import Header from '/src/pages/home/Header.jsx'
import loginImage from '/src/assets/loginill.png'
import { Switch } from '@headlessui/react'
import googleImg from '/src/assets/googleLogo.png'
import facebookImg from '/src/assets/facebookLogo.png'



export default function Login() {

  const [enabled, setEnabled] = useState(false);
  const studentOrTeacherRef = useRef(null);
  const teacherRef = useRef(null);

  useEffect(() => {
    if (studentOrTeacherRef.current) {
      studentOrTeacherRef.current.textContent = enabled ? 'Eğitmen' : 'Öğrenci';
      teacherRef.current.style.display = enabled ? 'flex' : 'none';
      teacherRef.current.style.transition = 'all 0.5s';
    }
  }, [enabled]);

  

  return (


    <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
        <div className='container mx-auto flex flex-col gap-y-12 h-screen'>
          <Header />
          <div className='bg-white  shadow-xl w-full h-[700px] grid grid-cols-2 items-center rounded-xl max-h-full'>
            <div className='flex justify-start items-center w-full h-full py-8 flex-col px-12'>
              <h1 className='text-primary-color font-montserrat font-bold text-[40px] mb-4'>Giriş Yap</h1>
              <div>
                <Switch onClick={() => setEnabled(!enabled)} checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-primary-color' : 'bg-primary-color'} relative inline-flex h-[50px] w-[305px] items-center rounded-full`}>
                  <span ref={studentOrTeacherRef} className={`${enabled ? 'translate-x-40' : 'translate-x-1'} h-[40px] w-[140px] transform rounded-full bg-white transition-all duration-500 inline-flex justify-center items-center text-primary-color font-montserrat font-semibold`} />
                </Switch>
              </div>
              <form className='flex justify-center items-center flex-col w-full mt-4 gap-y-4'>
                <input  type="email" placeholder='E-posta Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input  type="password" placeholder='Parola Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input ref={teacherRef} type="text" placeholder='Eğitmen kodunu Giriniz' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color'/>
                <div className='flex gap-x-2 w-full '>
                  <input type="checkbox" id='checkbox' name='checkbox' />
                  <label name="checkbox" htmlFor='checkbox'>Beni Hatırla</label>
                </div>
                <button className='w-full py-4 bg-primary-color text-white rounded-lg font-montserrat font-bold' type='submit'>Giriş Yap</button>
                <div className='w-full flex gap-x-4'>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full  rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={googleImg} alt=""  className='w-6'/>
                    Google ile Devam Et!
                    </a>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={facebookImg} alt="" className='w-6' />
                    Facebook ile Devam Et!
                    </a>
                </div>
              </form>
            </div>





            <div className='flex justify-center items-center w-full h-full bg-primary-color rounded-tr-lg rounded-br-lg px-4 py-4 max-h-full'>
              <img src={loginImage} alt="" className='object-cover w-[600px]' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
