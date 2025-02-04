import Image from "next/image";

export default function CtaButton() {
  return (
    <div className="hover-container animate-bounce animate-float mt-[-1px]">
      <Image src={'https://glb.orison-ms.jp/postBtn.gif'} alt="second kiritori image" unoptimized />
    </div>
  );
}
