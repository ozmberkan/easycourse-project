import React from 'react'
import teacherImg from '/src/assets/geometryteacher.jpg'
import { IoMdArrowDroprightCircle } from "react-icons/io";
import student from '/src/assets/student.jpg'
import { Link } from 'react-router-dom';
import TeacherHeaderTwo from './TeacherHeaderTwo';


export default function TeacherProfile() {
  return (
    <>
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
    <div className='container mx-auto'>
      <TeacherHeaderTwo />
      <div className='w-full h-[730px] mt-12 flex gap-x-5 '>
        <div className='bg-white w-full h-full rounded-lg shadow-md px-6 py-6 flex flex-col gap-y-2'>
          <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Eylül EKİN</h1>
          <p className='text-[#A8AEAF] text-xl'><span className='text-primary-color font-montserrat text-md font-semibold'>t</span> - @eylulekin</p>
          <img src={teacherImg} alt="" className='rounded-xl w-full h-[350px] object-cover' />
          <div className='grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 items-center'>
            <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>Şifre Değiştir</button>
            <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>Bildirim Ayarları</button>
            <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>E-Posta Değiştir</button>
           <Link to="/teacherratetwo" className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat'>Ücretlendirme</Link>

          </div>
          <button className='w-full border border-primary-color px-4 py-4 rounded-md font-montserrat mt-4'>Profil Resmi Ekle/Değiştir</button>
        </div>
        <div className='bg-white w-full h-full rounded-lg shadow-md py-6 px-6'>
          <h1 className='text-primary-color font-montserrat text-[35px] font-semibold' >Ders talebi oluştur!</h1>
          <p className='text-[#A8AEAF] text-xl'>Bu alandan ders talebi oluşturabilir ve yönetebilirsin.</p>
          <div className='flex flex-col gap-y-4 mt-5'>
            <select name="" id="" className='w-full border-2 border-primary-color px-4 py-4 rounded-lg '>
              <option value="one" >Ders Konusu</option>
              <option value="two" >Cebirler</option>
              <option value="three">Ebob - Ekok</option>
              <option value="four" >Türev</option>
            </select>
            <select name="" id="" className='w-full border-2 border-primary-color px-4 py-4 rounded-lg '>
              <option value="one">Öğrenci</option>
              <option value="one">Berkan ÖZMEN</option>
              <option value="one">Sude AKÇETUTAN</option>
              <option value="one">Mehmet KILIÇ</option>
              <option value="one">Ahmet İLÇİ</option>
            </select>
            <button className='bg-primary-color px-4 py-4 rounded-xl text-center text-white font-montserrat mb-5'>Ders Talebi Oluştur</button>
          </div>
          <div className=' w-full rounded-md h-[350px] flex flex-col gap-y-4 py-3'>
            <p className='w-full flex justify-between items-center bg-gray-200 py-4 px-4 rounded-lg shadow-lg font-montserrat cursor-pointer'>Hocam bugün ders yapacak mıyız? <img src={student} alt="" className='w-7 h-7 rounded-full object-cover' /></p>
            <p className='w-full flex justify-between items-center bg-gray-200 py-4 px-4 rounded-lg shadow-lg font-montserrat cursor-pointer'>Bu soruda neden böyle yaptık? <img src={student} alt="" className='w-7 h-7 rounded-full object-cover' /></p>
            <p className='w-full flex justify-between items-center bg-gray-200 py-4 px-4 rounded-lg shadow-lg font-montserrat cursor-pointer'>Saat 15:30 gibi derse başlayabiliriz.<img src={student} alt="" className='w-7 h-7 rounded-full object-cover' /></p>
          </div>
        </div>

      </div>
    </div>
  </div>
  </>
  )
}
