import Image from 'next/image'
import React from 'react'

export default function ActionButton() {
  return (
    <>
      <button className='bg-gradient-to-r from-blue-700 from-0% via-blue-400 via- to-cyan-300 to-75% text-white rounded-md flex items-center w-auto h-10 p-2 opacity-90 border-white border-1 cursor-pointer'>
        <Image src='/return.png' alt='return' width={30} height={10} />
      </button>
    </>
  )
}
