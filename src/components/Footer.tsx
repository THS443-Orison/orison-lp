import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/orison-logo.svg';

export default function Footer() {
  return (
    <footer className="text-center text-gray-800 my-10">
      <div className='flex justify-center'>
        <Image src={logo} alt="logo Image" width={200} objectFit="contain" />
      </div>
      <p className="text-sm mt-3">THS443-〇〇〇〇〇</p>
    </footer>
  );
}
