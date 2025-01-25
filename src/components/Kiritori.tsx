import React from 'react'
import Image from 'next/image'
import kiritori from '@/assets/images/kiritori.svg'

export default function Kiritori() {
  return (
    <div>
      <Image
      src={kiritori}
      alt="Kiritori Image"

      />
    </div>
  )
}
