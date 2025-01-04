import React from 'react';
import Image from 'next/image';
import heroT from '@/public/images/hero-t.svg';
import heroB from '@/public/images/hero-b.svg';
import logo from '@/public/images/orison-logo.svg';
export default function Hero() {
  return (
    <div className="relative">
    <div className="w-full">
      <Image
        src={heroT}
        alt="Hero Image"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="w-52 mx-auto">
      <Image src={logo} alt="logo Image" objectFit="contain" />
    </div>
    <div className="w-full mt-10">
      <Image
        src={heroB}
        alt="Hero Image"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <p className="text-center text-gray-800 text-xs absolute top-72 w-full mt-3 tracking-widest">
      あなたの折り紙で、折りなす日本を
      <br />
      織りなしていく町づくり体験
      <br />
      その手で祈る新世界へ！
    </p>
  </div>
  )
}
