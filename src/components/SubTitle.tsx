import React from 'react';
import Image from 'next/image';
import triangle1 from '@/assets/images/triangle-1.svg'; // 画像のインポート
import triangle2 from '@/assets/images/triangle-2.svg'; // 画像のインポート
import triangle3 from '@/assets/images/triangle-3.svg'; // 画像のインポート
import triangle4 from '@/assets/images/triangle-4.svg'; // 画像のインポート
import redHouse from '@/assets/images/house-icon-red.svg'; // 画像のインポート
import yellowHouse from '@/assets/images/house-icon-yellow.svg'; // 画像のインポート

interface SubTitleProps {
  section?: string;
  title: string;
  positionR: string;
  positionL: string;
  imageNum_a: number;
  imageNum_b: number;
}

export default function SubTitle({
  positionR,
  positionL,
  section,
  title,
  imageNum_a,
  imageNum_b,
}: SubTitleProps) {
  // imageNum_a と imageNum_b に基づいて画像を選択
  const triangleImage_a =
    imageNum_a === 1 ? triangle1 :
    imageNum_a === 2 ? triangle2 :
    imageNum_a === 3 ? triangle3 :
    imageNum_a === 4 ? triangle4 : redHouse;

  const triangleImage_b =
    imageNum_b === 1 ? triangle1 :
    imageNum_b === 2 ? triangle2 :
    imageNum_b === 3 ? triangle3 :
    imageNum_b === 4 ? triangle4 : yellowHouse;

  return (
    <div className="flex justify-between items-center mb-6">
      <div
        className={`${positionR} relative`}
        style={{ width: '50px', height: '50px' }}
      >
        {/* 選択された画像を表示 */}
        <Image
          src={triangleImage_a}
          alt="Triangle1 Image"
          objectFit="contain"
        />
      </div>
      <div className="text-center">
        <span className="text-xs">{section}</span>
        <h2
          className="text-2xl font-bold"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div
        className={`${positionL} relative`}
        style={{ width: '50px', height: '50px' }}
      >
        {/* 選択された画像を表示 */}
        <Image
          src={triangleImage_b}
          alt="Triangle2 Image"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
