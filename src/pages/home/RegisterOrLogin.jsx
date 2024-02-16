import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import useMedia from '/src/hooks/useMedia';


export default function RegisterOrLogin() {


  const isMobile = useMedia(1024);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailSet = (e) => { setEmail(e.target.value) }
  const passwordSet = (e) => { setPassword(e.target.value) }

  const handleLogin = (e) => {
    e.preventDefault()
    if(email === '' && password === ''){
      alert('Lütfen tüm alanları doldurunuz!')
    }
    else if(email != 'berkanozmen' && password != '123'){
      alert('Öğrenci girişi yapmak için lütfen admin@admin ve admin parolasını kullanınız.')
    }
    else if(email === 'berkanozmen' && password === '123'){
      navigate('/studentprofile')
  }
}

  if(isMobile){
    return(
      <div className='container mx-auto w-full mt-12 pt-2 mb-12' id='starter'>
      <div className='flex justify-center items-center h-full gap-x-8 mt-10 flex-col gap-y-12'>

        <div className='bg-white h-[500px] w-full rounded-xl shadow-xl px-8 py-8 flex flex-col gap-y-6 relative text-center '>
          <h1 className='text-primary-color font-montserrat font-black text-[30px]'>Eğitimin kolay adresinde hala bir hesaba sahip değil misin?</h1>
          <p className='text-black font-montserrat font-medium text-[15px]'>Aşağıdaki butona basarak ücretsiz bir şekilde hesap oluşturabilirsin ve öğrenci paketlerini inceleyebilirsin.</p>
          <div className='flex gap-x-5 justify-center items-center'>
            <Link to="/register" path="relative">
            <button className='bg-primary-color text-white w-28 h-12 rounded-md mt-5 font-montserrat' >Kayıt Ol</button>
            </Link>
            <Link to="/advantage" path="relative">
            <button className='bg-primary-color text-white w-28 h-12 rounded-md mt-5 font-montserrat' >Paketler</button>
            </Link>
          </div>
        </div>

        <div className='bg-white h-[500px] w-full rounded-xl shadow-xl px-8 py-8 flex flex-col gap-y-6'>
          <h1 className='text-[20px] font-bold text-primary-color font-montserrat'>Bir hesaba sahipsen giriş yaparak detaylara ulaşabilirsin.</h1>
          <form className='flex flex-col gap-y-12'>
            <input onChange={emailSet} type="text" placeholder='Kullanıcı Adı' className='w-full border-primary-color border-b-2 py-4 focus:outline-none'/>
            <input onChange={passwordSet} type="password" placeholder='Parola' className='w-full border-primary-color border-b-2 py-4 focus:outline-none'/>
            <button onClick={handleLogin} className='w-full bg-primary-color text-white px-6 py-4 rounded-lg text-xl font-montserrat'>Giriş Yap</button>
          </form>
          <span className='text-center text-opacity-45 text-black hover:underline cursor-pointer transition-all font-montserrat'>Şifremi unuttum</span>
        </div>
      </div>
    </div>
    )
  }






  return (
    <div className='container mx-auto w-full mt-36 mb-24' id='starter'>
      <div className='flex justify-center items-center h-full gap-x-8 mt-10'>
        <div className='bg-white h-[500px] w-[60%] rounded-xl shadow-xl px-8 py-8 flex flex-col gap-y-6 relative'>
          <h1 className='text-primary-color font-montserrat font-black text-[40px]'>Eğitimin kolay adresinde hala bir hesaba sahip değil misin?</h1>
          <p className='text-black font-montserrat font-medium text-[20px]'>Aşağıdaki butona basarak ücretsiz bir şekilde hesap oluşturabilirsin ve öğrenci paketlerini inceleyebilirsin.</p>
          <div className='flex gap-x-5'>
            <Link to="/register" path="relative">
            <button className='bg-primary-color text-white w-28 h-12 rounded-md mt-5 font-montserrat' >Kayıt Ol</button>
            </Link>
            <Link to="/advantage" path="relative">
            <button className='bg-primary-color text-white w-28 h-12 rounded-md mt-5 font-montserrat' >Paketler</button>
            </Link>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-20 bottom-14 w-60 h-60 opacity-40' viewBox="0 0 300 300"><path fill="#77CBB9" d="M246.83 264.49c-21.91-53.41-56.52-101.1-100.05-138.8a510.786 510.786 0 00-24.68-28.11c6.39-12.8 13-25.48 19.86-38.03.69-1.26.41-2.47-.32-3.31h.1c3.86.11 3.86-5.89 0-6-7.03-.2-14.05-.12-21.08.27-.11 0-.21.03-.32.05-27.61-.44-55.12 3.13-81.71 10.6-2.27.64-2.8 3.35-1.32 5.01 2.79 3.16 5.54 6.35 8.25 9.58-.05 1.42.7 2.75 2.32 2.79a499.485 499.485 0 0146.57 66.72c1.04 1.78 4.24 2.12 5.18 0 1.77-4 3.57-7.97 5.39-11.95.55-.48.96-1.16 1.07-2.04l.06-.41c3.31-7.2 6.69-14.37 10.15-21.51 5.09 3.63 10.08 7.4 14.97 11.29 4.83 5.65 9.67 11.3 14.5 16.95l13.86 17.84c.91 1.18 2.29 1.17 3.39.55 5.88 7.58 11.56 15.32 17.04 23.21.51.74 1.2 1.13 1.91 1.27A391.55 391.55 0 00197 198.97c.05.09.1.18.16.26.8 1.45 1.59 2.91 2.39 4.36 0 .46.11.94.38 1.43a761.949 761.949 0 0127.29 56.84c1.33 3.1 6.64.88 5.48-2.31-.32-.89-.66-1.78-.99-2.67 1.52-.48 2.77-1.9 2.06-3.59-1.1-2.63-2.2-5.26-3.3-7.9.12-.48.11-1.02-.11-1.63-.61-1.67-1.26-3.32-1.91-4.98 4.59 8.92 8.8 18.03 12.61 27.31 1.45 3.52 7.25 1.98 5.79-1.6zM104.01 78.94c-.31-.26-.67-.43-1.04-.51-.11-.09-.21-.18-.32-.25.99-.21 1.98-.42 2.97-.64.19 0 .38-.02.57-.03l-.45 1.77c-.57-.12-1.15-.23-1.72-.33zm-3.89 9.6c-.14-.27-.28-.55-.43-.82a2.68 2.68 0 00-1.45-1.27c.53.05 1.05.09 1.58.13l.29 1.95zm-3.32-2.23c-1.14.17-2.2.94-2.57 2.06-1.04-.96-2.1-1.91-3.2-2.82 1.92.3 3.84.55 5.77.75zm-27.12-2.52c2.55 2.31 5.05 4.66 7.46 7.09-.14-.06-.29-.1-.44-.14-2.58-2.28-5.15-4.58-7.7-6.9.23-.02.45-.03.68-.05zm-4.61-4.09c-.06.13-.11.27-.16.41-.14-.13-.29-.26-.43-.4-.49-.61-.99-1.21-1.48-1.82l2.08 1.81zm-4.71-11.01c-1.36.33-2.72.69-4.07 1.07-.46-.55-.92-1.1-1.38-1.64 1.81.21 3.63.4 5.45.57zm60.76-2.5c-.15-.02-.3-.03-.45-.02-.23.02-.46.05-.7.07.53-.28 1.05-.56 1.57-.83-.15.26-.28.52-.43.78zm1.16-9.62c.44 0 .82-.07 1.16-.2 4.53-.2 9.06-.28 13.6-.23-.09.12-.18.23-.25.37-4.03 7.37-7.97 14.79-11.83 22.25-.04-.12-.08-.23-.13-.34.39-1.49.76-2.98 1.11-4.48.26-1.15-.06-2.12-.69-2.77 1.27-2.37 2.58-4.71 3.96-7.02 1.96-3.29-3.08-6.27-5.11-3.13-.38-1.14-1.34-2.04-2.74-1.9l-.7.06c-.02-1-.5-2.03-1.4-2.65 1 .01 2.01.02 3.01.04zm-75.57 8.64c.28 1.1 1.13 2.06 2.46 2.25-.61.87-.77 2-.03 3.03l.9 1.26c-.01 0-.02 0-.03.01-1.71-2.04-3.42-4.08-5.16-6.09.62-.16 1.24-.31 1.86-.47zm49.98 72.03c-1.28-2.14-2.6-4.26-3.92-6.38 1.05-.82 1.6-2.23.7-3.73-.2-.34-.41-.67-.61-1.01.23-.08.44-.18.65-.3 1.74 2.23 3.52 4.45 5.35 6.62-.73 1.6-1.46 3.2-2.18 4.8z"></path><path fill="#A5A6BC" d="M127.37 257.39c-6.52-10.97-14.59-20.87-23.35-30.13-4.41-4.66-8.98-9.17-13.59-13.63-1.49-1.44-2.97-2.94-4.48-4.41 3.29-1.94 6.53-3.98 9.7-6.14 1.41-.96 1.72-3 .96-4.33.65-1.52.22-3.52-1.85-4.05-12.3-3.15-20.72-14.17-33.84-15.19-2.08-.16-3.25 2.04-2.89 3.8.27 1.36.53 2.72.78 4.08-1.49.66-2.18 2.77-1.46 4.36.92 2.03 1.96 3.97 3.12 5.83.89 6.2 1.56 12.42 2 18.68.17 2.44 2.38 3.51 4.51 2.59 4.62-1.99 9.13-4.18 13.54-6.56 2.17 2.02 4.22 4.19 6.3 6.21 4.4 4.26 8.75 8.57 12.96 13.02 8.42 8.9 16.14 18.37 22.41 28.92 1.97 3.32 7.16.3 5.18-3.03zm-42.35-57.74c.42-1.82-.97-3.73-2.82-3.75-.08-.24-.18-.48-.33-.7 2 1.25 4.03 2.43 6.14 3.4-1.02.3-2.01.65-2.99 1.05zm-11.52-9.36c-.47-.26-.94-.51-1.42-.77-.57-.31-1.16-.41-1.71-.36-1.77-.47-3.57-.66-5.36-.91-.12-.71-.24-1.42-.37-2.12 4.13 1.05 7.89 3.16 11.6 5.49-.9-.48-1.81-.92-2.75-1.33zm-7.48 4c.74.11 1.47.25 2.21.45.17.05.33.1.49.16.25.43.49.86.74 1.28-.73.12-1.41.5-1.91 1.17-.48-.65-.94-1.32-1.38-2-.05-.35-.1-.71-.16-1.06zm7.8 13.99c.07.21.16.4.28.59-.79.41-1.59.81-2.39 1.2.69-.61 1.39-1.21 2.1-1.79z"></path><path fill="#77CBB9" d="M271.25 159.57c-8.8-22.39-26.88-38.69-47.05-50.98 1.04-2.31 2.07-4.61 3.21-6.83a4301 4301 0 017.81-10.91c1.9-2.65-1.76-5.48-4.19-4.02-.28-1.23-1.2-2.35-2.77-2.51-11.84-1.21-23.6-.82-35.35 1-2.22.34-2.89 3.61-1.32 5.01.57.51 1.14 1.03 1.69 1.56-2.17-.32-4.55 1.91-3.14 4.41 5.93 10.49 11.86 20.98 17.78 31.48 1.21 2.14 3.88 1.71 5.18 0 3.29-4.35 6.06-8.92 8.51-13.73 18.55 11.37 35.73 26.45 43.86 47.13 1.4 3.55 7.2 2.01 5.79-1.59zm-48.92-60.98c-1.05 1.46-2.1 2.93-3.14 4.39a2.48 2.48 0 00-.7-.27c1.07-.91 1.62-2.53.85-3.75.5-.47.78-1.1.85-1.76.22.01.43.01.65.02 2.45.15 4.15-3.49 2.12-5.12-1.77-1.41-3.74-1.88-5.5-1.49.01-.33.03-.65.04-.98 3.41.08 6.81.28 10.22.62-2.11 2.57-3.84 5.38-5.38 8.33zm-20.2 3.52c0 .61-.01 1.22-.03 1.83-.47-.73-.93-1.47-1.4-2.2.48.14.95.26 1.43.37zm3.66-9.64c-1.05.1-2.1.25-3.15.46-.78-.88-1.59-1.73-2.41-2.57 2.51-.27 5.02-.48 7.54-.6-.73.85-1.4 1.75-1.98 2.72zm3.9 26.23c.64.39 1.41.54 2.17.3-.35.55-.7 1.1-1.07 1.65-.37-.65-.74-1.3-1.1-1.95z"></path></svg>
        </div>
        <div className='bg-white h-[500px] w-[40%] rounded-xl shadow-xl px-8 py-8 flex flex-col gap-y-6'>
          <h1 className='text-[30px] font-bold text-primary-color font-montserrat'>Bir hesaba sahipsen giriş yaparak detaylara ulaşabilirsin.</h1>
          <form className='flex flex-col gap-y-12'>
            <input onChange={emailSet} type="text" placeholder='Kullanıcı Adı' className='w-full border-primary-color border-b-2 py-4 focus:outline-none'/>
            <input onChange={passwordSet} type="password" placeholder='Parola' className='w-full border-primary-color border-b-2 py-4 focus:outline-none'/>
            <button onClick={handleLogin} className='w-full bg-primary-color text-white px-6 py-4 rounded-lg text-xl font-montserrat'>Giriş Yap</button>
          </form>
          <span className='text-center text-opacity-45 text-black hover:underline cursor-pointer transition-all font-montserrat'>Şifremi unuttum</span>
        </div>
      </div>
    </div>
  )
}
