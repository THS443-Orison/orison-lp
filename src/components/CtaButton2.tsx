"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostBtn from "@/assets/images/postBtn.gif";
import Kiritori from "@/assets/images/kiritori.png";
import Link from "next/link";
export default function CtaButton2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link href={"/"} target="_blank">
      <div className="hover-container hover:animate-bounce hover:animate-float mt-[-1px] cursor-pointer">
        {isScrolled ? (
          <Image src={PostBtn} alt="second kiritori image" unoptimized />
        ) : (
          <Image src={Kiritori} alt="first kiritori image" />
        )}
      </div>
    </Link>
  );
}
