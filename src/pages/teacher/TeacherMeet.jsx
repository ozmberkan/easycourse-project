import React, { useRef,useState } from 'react';
import TeacherHeader from '/src/pages/teacher/TeacherHeader.jsx';
import { FaPlusSquare } from "react-icons/fa";

export default function TeacherMeet() {
  const [addedItems, setAddedItems] = useState(new Set());

  const selectRef = useRef();
  const myUl = useRef();

  const clickBtn = () => {
    const selectedItem = selectRef.current.value;
    if (addedItems.has(selectedItem)) {
      alert('Bu öğe zaten eklenmiş!');
      return;
    }
    const li = document.createElement('li');
    li.innerText =
      selectedItem === 'berkan' ? 'Berkan ÖZMEN' : selectedItem === 'mehmet' ? 'Mehmet KILIÇ' : selectedItem === 'sude' ? 'Sude AKÇETUTAN' : 'Ahmet İLÇİ';
    li.className =
      'bg-primary-color text-white px-4 py-4 flex justify-start items-center font-montserrat font-bold rounded-md';
    myUl.current.appendChild(li);
    setAddedItems((prevItems) => new Set(prevItems).add(selectedItem));
  };

  return (
    <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
    <div className='container mx-auto'>
      <TeacherHeader />
      <div className='mt-12 h-[750px] flex flex-row gap-x-6'>
        <div className='bg-white w-full rounded-lg py-4 px-4 flex flex-col gap-y-2'>
          <h1 className='text-primary-color font-montserrat text-[35px] font-semibold'>Eğitmen Randevu Kontrol Ekranı</h1>
          <p className='text-gray-600 font-montserrat text-md font-medium'>Bu ekrandan ders randevularını görüntüleyebilirsin.</p>
          <div className='w-full h-full'>
            <div className='flex gap-x-6'>
              <FaPlusSquare onClick={clickBtn} className='text-primary-color w-[50px] h-[50px] cursor-pointer' />
              <select ref={selectRef} name="select" id="select" className='w-full border-2 border-primary-color h-[50px] rounded-lg px-4 font-montserrat font-semibold '>
                <option value="berkan">Berkan ÖZMEN</option>
                <option value="mehmet">Mehmet KILIÇ</option>
                <option value="sude">Sude AKÇETUTAN</option>
                <option value="ahmet">Ahmet İLÇİ</option>
              </select>
            </div>
            <ul className='w-full h-[500px] mt-6 rounded-lg  overflow-auto gap-y-5 flex flex-col border py-1 px-1' ref={myUl}></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
