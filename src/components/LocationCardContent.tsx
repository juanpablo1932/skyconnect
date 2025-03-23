'use client'

import Image from 'next/image'
import GradientText from './GradientText'
import { useAirportDetail } from '@/lib/hooks/useAirportDetail'

export default function LocationCardContent() {

  const airport = useAirportDetail()

  return (
    <div className='m-5 flex flex-col gap-6'>
      <div className='flex flex-row gap-3'>
        <Image
          className=""
          src={"/Point.png"}
          alt={"point"}
          quality={100}
          width={30}
          height={10}
        />
        <GradientText text="Ubicación" size="text-2xl" />
      </div>
      <div className='flex flex-col gap-2'>
        <p><strong>Latitud:</strong> {airport?.latitude}</p>
        <p><strong>Longitud:</strong> {airport?.longitude}</p>
        <p><strong>ID Geoname:</strong> {airport?.geoname_id}</p>
      </div>

  </div>
  )
}
