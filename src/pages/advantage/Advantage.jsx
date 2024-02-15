import React, { useEffect, Fragment, useState } from 'react'
import Header from '/src/pages/home/Header'
import { Tab, Transition } from '@headlessui/react'


export default function Advantage() {

  const [isShowing, setIsShowing] = useState(false)


  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
      <div className='container mx-auto flex flex-col gap-y-12 h-screen'>
        <Header />

        <div className='mt-12'>
          <Tab.Group>
            <Tab.List className="w-[80%] grid grid-cols-3  mx-auto px-4 py-4 rounded-md shadow-md bg-primary-color bg-opacity-25 gap-x-6">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected ? 'bg-primary-color font-montserrat text-white px-4 py-4 rounded-lg transition-all ring-offset-2 ring-primary-color/40 focus:outline-none focus:ring-4' : 'bg-white font-montserrat text-black px-4 py-4 rounded-lg transition-all  outline-none'}>
                    Normal Versiyon
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected ? 'bg-primary-color font-montserrat text-white px-4 py-4 rounded-lg transition-all ring-offset-2 ring-primary-color/40 focus:outline-none focus:ring-4' : 'bg-white font-montserrat text-black px-4 py-4 rounded-lg transition-all outline-none'}>
                    Plus Versiyon
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={selected ? 'bg-primary-color font-montserrat text-white px-4 py-4 rounded-lg transition-all ring-offset-2 ring-primary-color/40 focus:outline-none focus:ring-4' : 'bg-white font-montserrat text-black px-4 py-4 rounded-lg transition-all outline-none '}>
                    Pro Versiyon
                  </button>
                )}
              </Tab>
              {/* ...  */}
            </Tab.List>
            <Tab.Panels className="w-[80%] bg-[url('/src/assets/depth.jpg')] bg-cover bg-center mx-auto mt-6  rounded-lg shadow-md">
              <Tab.Panel className="px-4 py-1 text-white font-montserrat text-xl font-medium flex flex-col gap-y-5">
              <div className='px-1 py-2 flex flex-col justify-center items-center  gap-y-2'>
                  <h1 className='text-[30px] w-full h-[40px] flex justify-center items-center font-bold font-montserrat text-zinc-700'>Normal Versiyon</h1>
                  <div className='flex flex-col'>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 line-through border-b border-primary-color'>Eğitmenlerle anında konuşma</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 line-through border-b border-primary-color'>Randevu özelleştirme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 line-through border-b border-primary-color'>Yapay zeka desteği</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Ders Saati Belirleyebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Tekrarlı Canlı kayıt İndirebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Ücretsiz kayıt</span>
                  </div>
                  <button className='bg-primary-color px-4 mt-5 py-2 rounded-xl text-center text-white font-montserrat  hover:border-primary-color transition-colors hover:bg-white hover:text-primary-color'>Normal Versiyonu Seç</button>
                </div>
              </Tab.Panel>
              <Tab.Panel className="px-4 py-1 text-white font-montserrat text-xl font-medium flex flex-col gap-y-5">
                <div className='px-1 py-2 flex flex-col justify-center items-center  gap-y-2'>
                  <h1 className='text-[30px] w-full h-[40px] flex justify-center items-center font-bold font-montserrat text-zinc-700'>Plus Versiyon</h1>
                  <div className='flex flex-col'>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 line-through border-b border-primary-color'>Eğitmenlerle anında konuşma</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 line-through border-b border-primary-color'>Randevu özelleştirme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Yapay zeka desteği</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Ders Saati Belirleyebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Tekrarlı Canlı kayıt İndirebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Ücretsiz kayıt</span>
                  </div>
                  <button className='bg-primary-color px-4 mt-5 py-2 rounded-xl text-center text-white font-montserrat  hover:border-primary-color transition-colors hover:bg-white hover:text-primary-color'>Plus Versiyonu Seç</button>
                </div>
              </Tab.Panel>
              <Tab.Panel className="px-4 py-1 text-white font-montserrat text-xl font-medium flex flex-col gap-y-5">
              <div className='px-1 py-2 flex flex-col justify-center items-center  gap-y-2'>
                  <h1 className='text-[30px] w-full h-[40px] flex justify-center items-center font-bold font-montserrat text-zinc-700'>Pro Versiyon</h1>
                  <div className='flex flex-col'>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Eğitmenlerle anında konuşma</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Randevu özelleştirme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Yapay zeka desteği</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Ders Saati Belirleyebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>5 Adet Tekrarlı Canlı kayıt İndirebilme</span>
                    <span className='px-2 py-1 text-white font-montserrat text-base border-opacity-15 border-b border-primary-color'>Ücretsiz kayıt</span>
                  </div>
                  <button className='bg-primary-color px-4 mt-5 py-2 rounded-xl text-center text-white font-montserrat  hover:border-primary-color transition-colors hover:bg-white hover:text-primary-color'>Pro Versiyonu Seç</button>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}
