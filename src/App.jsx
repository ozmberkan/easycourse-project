import React, { useEffect,useState } from 'react'
import Header from './pages/home/Header';
import Starter from './pages/home/Starter';
import RegisterOrLogin from './pages/home/RegisterOrLogin';
import Search from './pages/home/Search';
import Footer from './pages/home/Footer';

export default function () {

  const [studentCounter, setStudentCounter] = useState(0)
  const [lessonCounter, setLessonCounter] = useState(0)
  const [teacherCounter, setTeacherCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (studentCounter === 1500) {
        clearInterval(interval);
      } else {
        setStudentCounter((studentCounter) => studentCounter + 1);
      }
    }, 1);
    return () => {
      clearInterval(interval);
    };
  }, [studentCounter]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lessonCounter === 20) {
        clearInterval(interval);
      } else {
        setLessonCounter((lessonCounter) => lessonCounter + 1);
      }
    }, 150);
    return () => {
      clearInterval(interval);
    };
  }, [lessonCounter]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (teacherCounter === 200) {
        clearInterval(interval);
      } else {
        setTeacherCounter((teacherCounter) => teacherCounter + 1);
      }
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [teacherCounter]);
  

  return (



    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto h-full'>
        <Header/>
        <Starter/>
      </div>
      <div className='container mx-auto'>
        <RegisterOrLogin/>
      </div>

      <div className='container mx-auto text-center grid grid-cols-3 gap-x-7 items-center rounded-xl'>
        <h1 className='text-xl text-primary-color font-semibold px-4 py-6 bg-white rounded-xl shadow-2xl'>{studentCounter}'den fazla Öğrenci</h1>
        <h1 className='text-xl text-primary-color font-semibold px-4 py-6 bg-white rounded-xl shadow-2xl'>{lessonCounter}'den fazla Ders</h1>
        <h1 className='text-xl text-primary-color font-semibold px-4 py-6 bg-white rounded-xl shadow-2xl'>{teacherCounter}'den fazla Eğitmen</h1>
      </div>
      <div className='container mx-auto'>
        <Search/>
      </div>

      <div className=' mx-auto'>
        <Footer/>
      </div>
    </div>
  )
}
