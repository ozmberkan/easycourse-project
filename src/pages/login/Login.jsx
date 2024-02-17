import React, { useEffect, useState, useRef } from 'react'
import Header from '/src/pages/home/Header.jsx'
import loginImage from '/src/assets/loginill.png'
import { Switch } from '@headlessui/react'
import googleImg from '/src/assets/googleLogo.png'
import facebookImg from '/src/assets/facebookLogo.png'
import { useNavigate } from 'react-router-dom'
import Footer from '/src/pages/home/Footer.jsx'
import useMedia from '/src/hooks/useMedia'



export default function Login() {

  const [enabled, setEnabled] = useState(false);
  const studentOrTeacherRef = useRef(null);
  const teacherRef = useRef(null);

  useEffect(() => {
    if (studentOrTeacherRef.current) {
      studentOrTeacherRef.current.textContent = enabled ? 'Eğitmen' : 'Öğrenci';
      teacherRef.current.style.display = enabled ? 'flex' : 'none';
    }
  }, [enabled]);


  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [teacherCode, setTeacherCode] = useState('');

  const emailSet = (e) => { setEmail(e.target.value) }
  const passwordSet = (e) => { setPassword(e.target.value) }
  const teacherSet = (e) => { setTeacherCode(e.target.value) }
  const enabledClick = () => { setEnabled(!enabled) }

  const handleLogin = () => {
    if (email === '' && password === '' && teacherCode === '') {
      alert('Lütfen tüm alanları doldurunuz!')
    }
    else if (email === '' && password === '' && enabled && teacherCode === '') {
      alert('Lütfen tüm alanları doldurunuz!')
    }
    else if (email != 'berkan@ozmen' && password != '123' && !enabled) {
      alert('Öğrenci girişi yapmak için lütfen {berkan@ozmen} ve {123} parolasını kullanınız.')
    }
    else if ((email != 'serkan@alici' || email != 'eylul@ekin') && password != '123' && enabled && teacherCode != '123') {
      alert('Eğitmen girişi yapmak için lütfen {serkan@alici} ya da {eylul@ekin}, {123} parolasını ve {123} kodunu kullanınız.')
    }

    else if (email === 'berkan@ozmen' && password === '123' && !enabled) {
      navigate('/studentprofile')
    } else if (email === 'serkan@alici' && password === '123' && enabled && teacherCode === '123') {
      navigate('/teacherprofile')
    }
    else if (email === 'eylul@ekin' && password === '123' && enabled && teacherCode === '123') {
      navigate('/teacherprofiletwo')
    }
  }

  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <>
        <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center ' >
          <div className='container mx-auto flex flex-col px-4 py-4'>
            <Header />
            <div className='bg-white shadow-xl w-full  items-center rounded-xl max-h-full flex flex-col mt-6'>

              <div className='flex justify-center items-center w-full bg-white  rounded px-1 py-1 max-h-full'>
                <img src={loginImage} alt="" className='object-cover w-[150px] drop-shadow-lg mt-1' />
              </div>

              <div className='flex justify-start items-center w-full h-full py-8 flex-col px-12'>
                <h1 className='text-primary-color font-montserrat font-bold text-[20px] mb-4'>Giriş Yap</h1>
                <div>
                  <Switch onClick={enabledClick} checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-primary-color' : 'bg-primary-color'} relative inline-flex h-[40px] w-[200px] items-center rounded-full`}>
                    <span ref={studentOrTeacherRef} className={`${enabled ? 'translate-x-24' : 'translate-x-1'}  w-[100px] h-[30px] transform rounded-full bg-white transition-all duration-500 inline-flex justify-center items-center text-primary-color font-montserrat font-semibold`} />
                  </Switch>
                </div>
                <form className='flex justify-center items-center flex-col w-full mt-4 gap-y-4'>
                  <input onChange={emailSet} type="email" placeholder='E-posta Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                  <input onChange={passwordSet} type="password" placeholder='Parola Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                  <input onChange={teacherSet} ref={teacherRef} type="text" placeholder='Eğitmen kodunu Giriniz' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                  <div className='flex gap-x-2 w-full '>
                    <input type="checkbox" id='checkbox' name='checkbox' />
                    <label name="checkbox" htmlFor='checkbox'>Beni Hatırla</label>
                  </div>
                  <button onClick={handleLogin} className='w-full py-4 bg-primary-color text-white rounded-lg font-montserrat font-bold'>Giriş Yap</button>
                  <div className='w-full flex gap-x-4 flex-col gap-y-2'>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-3 text-center w-full  rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={googleImg} alt="" className='w-4 h-4' />
                    <p>Google ile Devam Et!</p>
                  </a>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-3 text-center  w-full rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={facebookImg} alt="" className='w-4 h-4' />
                    <p>Facebook ile Devam Et!</p>
                  </a>
                </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </>
    )
  }



  return (


    <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center ' >
        <div className='container mx-auto flex flex-col gap-y-12'>
          <Header />
          <div className='bg-white  shadow-xl w-full h-[700px] grid grid-cols-2 items-center rounded-xl max-h-full'>
            <div className='flex justify-start items-center w-full h-full py-8 flex-col px-12'>
              <h1 className='text-primary-color font-montserrat font-bold text-[40px] mb-4'>Giriş Yap</h1>
              <div>
                <Switch onClick={enabledClick} checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-primary-color' : 'bg-primary-color'} relative inline-flex h-[50px] w-[305px] items-center rounded-full`}>
                  <span ref={studentOrTeacherRef} className={`${enabled ? 'translate-x-40' : 'translate-x-1'} h-[40px] w-[140px] transform rounded-full bg-white transition-all duration-500 inline-flex justify-center items-center text-primary-color font-montserrat font-semibold`} />
                </Switch>
              </div>
              <form className='flex justify-center items-center flex-col w-full mt-4 gap-y-4'>
                <input onChange={emailSet} type="email" placeholder='E-posta Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input onChange={passwordSet} type="password" placeholder='Parola Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="color" className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input onChange={teacherSet} ref={teacherRef} type="text" placeholder='Eğitmen kodunu Giriniz' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <div className='flex gap-x-2 w-full '>
                  <input type="checkbox" id='checkbox' name='checkbox' />
                  <label name="checkbox" htmlFor='checkbox'>Beni Hatırla</label>
                </div>
                <button onClick={handleLogin} className='w-full py-4 bg-primary-color text-white rounded-lg font-montserrat font-bold'>Giriş Yap</button>
                <div className='w-full flex gap-x-4'>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full  rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={googleImg} alt="" className='w-4 h-4' />
                    <p>Google ile Devam Et!</p>
                  </a>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={facebookImg} alt="" className='w-4 h-4' />
                    <p>Facebook ile Devam Et!</p>
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
      <Footer />
    </>
  )
}
