import React from "react";
import Image from "next/image";
import PostBtn from "@/assets/images/postBtn.gif";

export default function Kiritori() {
  return (
    <div>
      <Image src={PostBtn} alt="Kiritori Image" className="background-image" />
    </div>
  );
}
