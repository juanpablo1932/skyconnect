'use client'

import Image from 'next/image'
import GradientText from './GradientText'

export default function LocalTimeCardContent() {


  return (
    <div className='m-5 flex flex-col gap-6'>
      <div className='flex flex-row gap-3'>
        <Image
          className=""
          src={"/Clock.png"}
          alt={"clock"}
          quality={100}
          width={30}
          height={10}
        />
        <GradientText text="Hora Local" size="text-2xl" />
      </div>
      <div className='flex flex-col gap-2'>
        <p>{new Date().toLocaleString("es-ES")}</p>
      </div>
  </div>
  )
}
