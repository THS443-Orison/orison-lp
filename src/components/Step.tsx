import React from "react";
import Image from "next/image";
import stepIcon1 from "@/assets/images/1.png";
import stepIcon2 from "@/assets/images/2.png";
import stepIcon3 from "@/assets/images/3.png";
import step1 from "@/assets/images/step1.png";
import step2 from "@/assets/images/step2.png";
import step3 from "@/assets/images/step3.png";

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
      : "";

  const stepImage =
    stepNumber === 1
      ? step1
      : stepNumber === 2
      ? step2
      : stepNumber === 3
      ? step3
      : "";

  return (
    <div className="mb-14">
      <div className="flex gap-4 items-center ml-4">
        <div>
          <Image src={stepIcon} className="w-auto h-6" alt="Step Icon" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="mt-1 mb-2 ml-4 text-sm">{desc}</p>
      <div className="flex justify-center mx-4 shadow-sm shadow-gray-500">
        <Image src={stepImage} alt="Step Image" />
      </div>
    </div>
  );
}
