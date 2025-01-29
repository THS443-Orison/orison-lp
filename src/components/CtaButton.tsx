"use client";
import Image from "next/image";
import PostBtn from "@/assets/images/postBtn.gif";
export default function CtaButton() {
  return (
    <div className="hover-container animate-bounce animate-float mt-[-1px]">
      <Image src={PostBtn} alt="second kiritori image" unoptimized />
    </div>
  );
}
