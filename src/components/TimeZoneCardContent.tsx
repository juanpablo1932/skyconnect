'use client'

import Image from 'next/image'
import GradientText from './GradientText'
import { useAirportDetail } from '@/lib/hooks/useAirportDetail'

export default function TimeZoneCardContent() {

  const airport = useAirportDetail()

  return (
    <div className='m-5 flex flex-col gap-6'>
      <div className='flex flex-row gap-3'>
        <Image
          className=""
          src={"/Global.png"}
          alt={"global"}
          quality={100}
          width={30}
          height={10}
        />
        <GradientText text="Zona Horaria" size="text-2xl" />
      </div>
      <div className='flex flex-col gap-2'>
        <p><strong>Zona Horaria:</strong> {airport?.timezone}</p>
        <p><strong>GMT:</strong> {airport?.gmt}</p>
      </div>

  </div>
  )
}
