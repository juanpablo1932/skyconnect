import Image from 'next/image'
import React from 'react'

export default function CardDetail({children}: {children: React.ReactNode}) {
  return (
    <div className='relative z-10 border-2 border-gray-200 rounded-lg w-auto h-auto max-h-96 min-h-40 bg-gradient-to-r from-zinc-500 from-0% via-blue-950 to-blue-950'>
      <Image
        className="-z-1 opacity-20 absolute w-1/2 right-0"
        src={"/airplane.png"}
        alt={"airplane"}
        quality={100}
        width={500}
        height={500}
        style={{width: 'inherit', height: '100%'}}
      />

        {children}


    </div>
  )
}
