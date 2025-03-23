'use client'

import Image from 'next/image'
import GradientText from './GradientText'
import { Airport } from '@/types/airports';
import { useEffect, useState } from 'react';

export default function LocationCardContent() {
  const [airport, setAirport] = useState<Airport | null>(null);

  useEffect(() => {
    const storedAirport = sessionStorage.getItem('airport');
    if (storedAirport) {
      setAirport(JSON.parse(storedAirport));
    }
  }, []);

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
