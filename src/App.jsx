import React, { useEffect, useState } from 'react'
import Header from './pages/home/Header';
import Starter from './pages/home/Starter';
import RegisterOrLogin from './pages/home/RegisterOrLogin';
import Search from './pages/home/Search';
import Footer from './pages/home/Footer';
import teacherSvg from '/src/assets/teachersvg.svg';

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
      <div className='container mx-auto'>
        <Header />
        <Starter />
        <RegisterOrLogin />
        <Search />
      </div>
      <Footer />

  </div>
  )
}
