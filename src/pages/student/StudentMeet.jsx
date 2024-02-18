import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import StudentHeader from './StudentHeader';
import useMedia from '/src/hooks/useMedia'


export default function StudentMeet(props) {

  const ValuePiece = Date | null;
  const [value, onChange] = useState(new Date());
  const isMobile = useMedia(1024)

  if (isMobile) {
    return (
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center px-4 py-4' >
        <div className='mx-auto container'>
          <StudentHeader />
        </div>
        <div className='bg-white px-4 py-12 container mx-auto mt-6 flex justify-start items-center  rounded-lg  flex-col'>

          <div className='flex flex-col gap-y-6'>
            <Calendar onChange={onChange} value={value} />
            <button className='bg-primary-color px-4 py-4 text-white rounded-md border font-montserrat font-semibold border-transparent hover:border hover:border-primary-color hover:bg-white hover:text-primary-color transition-colors' >SORGULA</button>

          </div>

          <div className='w-full h-full border border-primary-color rounded-xl flex justify-start items-center mt-12 flex-col'>

            <div className='flex flex-col py-4 justify-center items-center  w-full '>
              <button className='bg-primary-color px-4 py-2 rounded-lg text-white font-montserrat w-[75%]'>Eğitmen</button>
              <div className='flex flex-col mt-12  w-full h-full py-4'>

                <div className='flex justify-center items-center w-full gap-x-4 py-2 px-4 '>
                  <input type="checkbox" name="serkan" id="serkan" />
                  <label htmlFor="serkan" className='text-primary-color font-semibold text-[17px] w-full'>Serkan ALICI</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="eylul" id="eylul" />
                  <label htmlFor="eylul" className='text-primary-color font-semibold text-[17px] w-full'>Eylül EKİN</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="ferhat" id="ferhat" />
                  <label htmlFor="ferhat" className='text-primary-color font-semibold text-[17px] w-full'>Ferhat TOKER</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="buket" id="buket" />
                  <label htmlFor="buket" className='text-primary-color font-semibold text-[17px] w-full'>Buket YILDIRIM</label>
                </div>
                <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="fatma" id="fatma" />
                  <label htmlFor="fatma" className='text-primary-color font-semibold text-[17px] w-full'>Fatma KAYA</label>
                </div>
                <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                  <input type="checkbox" name="selin" id="selin" />
                  <label htmlFor="selin" className='text-primary-color font-semibold text-[17px] w-full'>Selin KARA</label>
                </div>

              </div>

            </div>
            <div className='flex flex-col py-4  justify-center items-center  w-full '>
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

            <div className='flex flex-col py-4  justify-center items-center  w-full '>
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
          <div className='flex gap-x-6 justify-evenly items-center mt-12 w-full'>
            <button className='px-4 py-2 text-sm h-[50px] border w-full border-[#338A46] text-[#338A46] rounded-md font-montserrat font-semibold hover:bg-[#338A46] hover:text-white transition-colors'>Dersi Kabul Et</button>
            <button className='px-4 py-2 text-sm h-[50px] border w-full border-[#A63131] text-[#A63131] rounded-md font-montserrat font-semibold hover:bg-[#A63131] hover:text-white transition-colors'>Dersi İptal Et</button>
          </div>
        </div>
      </div>
    )
  }



  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='mx-auto container'>
        <StudentHeader />
      </div>
      <div className='bg-white px-12 py-12 container mx-auto mt-24 flex justify-start items-center  rounded-lg gap-x-12'>

        <div className='flex flex-col gap-y-6'>
          <Calendar onChange={onChange} value={value} />
          <button className='bg-primary-color px-4 py-4 text-white rounded-md border font-montserrat font-semibold border-transparent hover:border hover:border-primary-color hover:bg-white hover:text-primary-color transition-colors' >SORGULA</button>
          <div className='flex gap-x-6 justify-evenly items-center'>
            <button className='px-4 py-2 border w-full border-[#338A46] text-[#338A46] rounded-md font-montserrat font-semibold hover:bg-[#338A46] hover:text-white transition-colors'>Dersi Kabul Et</button>
            <button className='px-4 py-2 border w-full border-[#A63131] text-[#A63131] rounded-md font-montserrat font-semibold hover:bg-[#A63131] hover:text-white transition-colors'>Dersi İptal Et</button>
          </div>
        </div>

        <div className='w-full h-full border border-primary-color rounded-xl flex justify-start items-center py-12 '>

          <div className='flex flex-col py-4 justify-center items-center  w-full '>
            <button className='bg-primary-color px-4 py-2 rounded-lg text-white font-montserrat w-[75%]'>Eğitmen</button>
            <div className='flex flex-col mt-12  w-full h-full py-4'>

              <div className='flex justify-center items-center w-full gap-x-4 py-2 px-4 '>
                <input type="checkbox" name="serkan" id="serkan" />
                <label htmlFor="serkan" className='text-primary-color font-semibold text-[17px] w-full'>Serkan ALICI</label>
              </div>
              <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                <input type="checkbox" name="eylul" id="eylul" />
                <label htmlFor="eylul" className='text-primary-color font-semibold text-[17px] w-full'>Eylül EKİN</label>
              </div>
              <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                <input type="checkbox" name="ferhat" id="ferhat" />
                <label htmlFor="ferhat" className='text-primary-color font-semibold text-[17px] w-full'>Ferhat TOKER</label>
              </div>
              <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                <input type="checkbox" name="buket" id="buket" />
                <label htmlFor="buket" className='text-primary-color font-semibold text-[17px] w-full'>Buket YILDIRIM</label>
              </div>
              <div className='flex justify-center items-center  py-2 px-4 gap-x-4 '>
                <input type="checkbox" name="fatma" id="fatma" />
                <label htmlFor="fatma" className='text-primary-color font-semibold text-[17px] w-full'>Fatma KAYA</label>
              </div>
              <div className='flex justify-center items-center bg-[#D9D9D9] py-2 px-4 gap-x-4 '>
                <input type="checkbox" name="selin" id="selin" />
                <label htmlFor="selin" className='text-primary-color font-semibold text-[17px] w-full'>Selin KARA</label>
              </div>

            </div>

          </div>
          <div className='flex flex-col py-4  justify-center items-center  w-full '>
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

          <div className='flex flex-col py-4  justify-center items-center  w-full '>
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
  )
}
