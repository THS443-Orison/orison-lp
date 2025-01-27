"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import PostBtn from "@/assets/images/postBtn.gif";
import Link from "next/link";
export default function CtaButton() {
  return (
    <Link href={"/"} target="_blank">
      <div className="hover-container animate-bounce animate-float mt-[-1px] cursor-pointer">
        <Image src={PostBtn} alt="second kiritori image" unoptimized  />
      </div>
    </Link>
  );
}
