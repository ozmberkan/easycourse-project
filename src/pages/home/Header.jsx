import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function Header() {

  return (
    // ilk section baslangic
    <div className='container mx-auto h-20 text-white pt-4'>
        <nav className='flex justify-between items-center'>
          <h1 className='font-damion text-[50px]'>easycourse</h1>
          <div className='flex gap-x-4'>
            <Link to="/login">
              <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Giriş Yap</button>
            </Link>
            <Link to="/register">
              <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Kayıt Ol</button>
            </Link>
          </div>
        </nav>
    </div>
    // ilk section bitis
  );
}
