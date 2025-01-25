import React from 'react';
import Image from 'next/image';
import stepIcon1 from '@/assets/images/1.png';
import stepIcon2 from '@/assets/images/2.png';
import stepIcon3 from '@/assets/images/3.png';
import step1 from '@/assets/images/step1.png';
import step2 from '@/assets/images/step2.png';
import step3 from '@/assets/images/step3.png';
import demoImage from '@/assets/images/demo-step.png';
import demoIcon from '@/assets/images/demo-icon.png';

interface StepProps {
  stepNumber: number;
  title: string;
  desc: string;
}

export default function Step({ stepNumber, title, desc }: StepProps) {
  const stepIcon =
    stepNumber === 1
      ? stepIcon1
      : stepNumber === 2
      ? stepIcon2
      : stepNumber === 3
      ? stepIcon3
      : demoIcon;

  const stepImage =
    stepNumber === 1
      ? step1
      : stepNumber === 2
      ? step2
      : stepNumber === 3
      ? step3
      : demoImage;

  return (
    <div className='mb-14'>
      <div className="flex gap-4 items-center mb-6 ml-12">
        <div className="">
          <Image src={stepIcon}
          className='w-auto h-8'
          alt="Step Icon" />
        </div>
        <h3 className='text-xl font-bold'>{title}</h3>
      </div>
      <p className='ml-12 mb-1'>{desc}</p>
      <div className="flex justify-center">
        <Image src={stepImage} alt="Step Image" />
      </div>
    </div>
  );
}
