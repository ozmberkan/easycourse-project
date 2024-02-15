import Header from '/src/pages/home/Header.jsx'
import { CiFilter } from "react-icons/ci";
import Users from '/src/api/users.json';
import { useEffect, useState,useRef } from 'react';




export default function TeacherSearch() {

  const [teacher, setTeacher] = useState([])

  const ınputRef = useRef(null)

  const searchTeacher = () => {
    const value = ınputRef.current.value
    const filteredTeacher = Users.filter((user) => (user.lesson.toLowerCase().includes(value.toLowerCase())) || (user.name.toLowerCase().includes(value.toLowerCase())) || (user.surname.toLowerCase().includes(value.toLowerCase())))
    setTeacher(filteredTeacher)
  }


  useEffect(() => {
    setTeacher(Users)
  }, [])




  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto'>
        <Header />
        <div className='w-full bg-white px-4 py-4 mt-12 rounded-md shadow-md flex justify-center items-center flex-col'>
          <div className='flex flex-col items-center justify-center gap-y-4'>
            <h1 className='text-primary-color font-montserrat text-[40px] font-bold'>Aradığın dersin eğitmenini kolayca bul!</h1>
            <p className='text-black font-montserrat text-md font-medium'>Aşağıdaki alandan istediğin dersin adını girerek eğitmenleri görüntüleyebilir, onların profiline gidebilir, yorumlarını ve puanını görüntüleyebilirsin.</p>
          </div>
          <div className='grid-cols-2 w-full flex justify-center items-center gap-x-4 mt-12'>
            <input ref={ınputRef} onChange={searchTeacher}  type="text" className='border-2 border-primary-color text-gray-500 w-full px-4 py-4 rounded-md focus:outline-none 
            +-' placeholder='Eğitmen Adı, Dersin Adı..'  />
            <div className='flex items-center justify-center px-4 py-4 rounded-lg cursor-pointer bg-primary-color'>
              <CiFilter size={30} fill='#fff' />
            </div>
          </div>
          <ul className='w-full flex flex-col gap-y-6 gap-x-6 mt-8'>
          {teacher.map((user, index) => (
              <li key={index} className='flex justify-start items-center w-full px-4 py-6 border rounded-lg gap-x-6'>
                <img src={user.avatar} alt="" className='w-12 h-12 rounded-full object-cover' />
                <h1 className='text-primary-color font-montserrat font-medium text-xl'>{user.name} {user.surname}</h1>
                <span className='text-primary-color font-montserrat font-medium'>{user.lesson}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
