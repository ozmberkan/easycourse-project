import React from 'react';
import TeacherHeader from '/src/pages/teacher/TeacherHeader.jsx';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { FaBell } from "react-icons/fa";
import { Dialog, Transition } from '@headlessui/react'



export default function TeacherMeet(props) {

  const ValuePiece = Date | null;
  const [value, onChange] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
        <div className='mx-auto container'>
          <TeacherHeader />
        </div>
        <div className='bg-white px-12 py-12 container mx-auto mt-24 flex justify-start items-center  rounded-lg gap-x-12'>

          <div className='flex flex-col gap-y-6'>
            <Calendar onChange={onChange} value={value} />
            <button className='bg-primary-color px-4 py-4 text-white rounded-md border font-montserrat font-semibold border-transparent hover:border hover:border-primary-color hover:bg-white hover:text-primary-color transition-colors' >SORGULA</button>
            <div className='flex gap-x-6 justify-evenly items-center'>
              <button className='px-4 py-2 border w-full border-[#338A46] text-[#338A46] rounded-md font-montserrat font-semibold hover:bg-[#338A46] hover:text-white transition-colors'>Dersi Kabul Et</button>
              <button className='px-4 py-2 border w-full border-[#A63131] text-[#A63131] rounded-md font-montserrat font-semibold hover:bg-[#A63131] hover:text-white transition-colors'>Dersi Reddet</button>
            </div>
            <div>
              <button onClick={() => setIsOpen(true)} className='w-full bg-primary-color px-4 py-4 text-white rounded-md border font-montserrat font-semibold border-transparent hover:border hover:border-primary-color hover:bg-white hover:text-primary-color transition-colors flex justify-center items-center gap-x-4'><FaBell size={20} />Hatırlatıcı Ekle</button>
              <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <Dialog.Panel className="mx-auto rounded bg-white">
                    <Dialog.Title>
                      <div className='mx-auto container bg-white rounded-xl w-screen h-[500px] py-4 relative'>
                        <h1 className='text-primary-color font-montserrat  text-[24px] text-center font-black uppercase mb-2'>Hatırlatıcı Ekle</h1>
                        <hr className='mt-1 mb-1' />
                        <div className='grid grid-cols-6 px-8 py-2 gap-x-9'>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>Seçilen Öğrenci</span>
                            <button disabled className='px-2 py-2 text-[#898989] w-full bg-[#979797]/50 rounded-lg cursor-pointer '>Berkan ÖZMEN</button>
                          </div>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>Ders Saati</span>
                            <button disabled className='px-2 py-2 text-[#898989] w-full bg-[#979797]/50 rounded-lg cursor-pointer '>10:00 - 10:45</button>
                          </div>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>Dersin Konusu</span>
                            <button disabled className='px-2 py-2 text-[#898989] w-full bg-[#979797]/50 rounded-lg cursor-pointer '>Olasılık</button>
                          </div>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>Hatırlatma Tarihi</span>
                            <input required type='date' className='px-2 py-2 text-[#898989] w-full bg-white border rounded-lg focus:outline-none'></input>
                          </div>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>Hatırlatma Saati</span>
                            <input required type='time' className='px-2 py-2 text-[#898989] w-full bg-white border rounded-lg focus:outline-none'></input>
                          </div>
                          <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <span className='px-2 py-2 text-white bg-primary-color rounded-lg font-semibold text-base w-full text-center'>SMS Gönd. mi?</span>
                            <div className='w-full px-4 py-2 mt-1'>
                              <input type='checkbox' className='px-2 py-2 text-[#898989] w-full bg-yellow-500 border rounded-lg focus:outline-none'></input>
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col items-center justify-center bottom-0 absolute right-0 w-full gap-y-3'>
                          <hr className='bg-gray-700 w-full' />
                          <button onClick={() => setIsOpen(false)} className='bg-[#338A46] flex justify-center items-center rounded-lg text-white font-montserrat font-black py-2 px-6 mb-4'> ONAYLA</button>
                        </div>
                      </div>
                    </Dialog.Title>
                  </Dialog.Panel>
                </div>
              </Dialog>
            </div>
          </div>

          <div className='w-full h-full border border-primary-color rounded-xl flex justify-start items-center  '>

            <div className='flex flex-col py-4  justify-center items-center  w-full '>
              <button className='bg-primary-color px-4 py-2 rounded-lg text-white font-montserrat w-[75%]'>Öğrenci</button>
              <div className='flex flex-col mt-12  w-full h-full py-4'>

                <div className='flex justify-center items-center w-full gap-x-4 py-2 px-4 '>
                  <input type="checkbox" name="berkan" id="berkan" />
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Berkan ÖZMEN</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="mehmet" id="mehmet" />
                  <label htmlFor="mehmet" className='text-primary-color font-semibold text-[17px] w-full'>Mehmet KILIÇ</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="ahmet" id="ahmet" />
                  <label htmlFor="ahmet" className='text-primary-color font-semibold text-[17px] w-full'>Ahmet İLÇİ</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="sude" id="sude" />
                  <label htmlFor="sude" className='text-primary-color font-semibold text-[17px] w-full'>Sude AKÇETUTAN</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="furkan" id="furkan" />
                  <label htmlFor="furkan" className='text-primary-color font-semibold text-[17px] w-full'>Furkan ÖZMEN</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="omer" id="omer" />
                  <label htmlFor="omer" className='text-primary-color font-semibold text-[17px] w-full'>Ömer UĞURLU</label>
                </div>

              </div>

            </div>
            <div className='flex flex-col py-4 justify-center items-center  w-full '>
              <button className='bg-primary-color px-4 py-2 rounded-lg text-white font-montserrat w-[75%]'>Ders Saati</button>
              <div className='flex flex-col mt-12  w-full h-full py-4'>
                <div className='flex justify-center items-center w-full gap-x-4 py-2 px-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>10:00 - 10:45</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>11:00 - 11:45</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>13:00 - 13:45</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>14:00 - 14:45</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>15:00 - 15:45</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>17:00 - 17:45</label>
                </div>

              </div>

            </div>

            <div className='flex flex-col py-4 justify-center items-center  w-full '>
              <button className='bg-primary-color px-4 py-2 rounded-lg text-white font-montserrat w-[75%]'>Dersin Konusu</button>
              <div className='flex flex-col mt-12  w-full h-full py-4'>

                <div className='flex justify-center items-center w-full gap-x-4 py-2 px-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Olasılık</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Logaritma</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>İntegral</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Türev</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Türev</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 text-center'>
                  <label htmlFor="berkan" className='text-primary-color font-semibold text-[17px] w-full'>Logaritma</label>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}
