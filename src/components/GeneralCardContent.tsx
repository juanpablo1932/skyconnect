'use client'

import Image from 'next/image'
import GradientText from './GradientText'
// import { useAirportStore } from '@/stores/airport-store'
import { Airport } from '@/types/airports';
import { useEffect, useState } from 'react';

export default function GeneralCardContent() {
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
          src={"/info.png"}
          alt={"flight"}
          quality={100}
          width={30}
          height={10}
        />
        <GradientText text="Información General" size="text-2xl" />
      </div>
      <div className='flex flex-col gap-2'>
        <p><strong>Código IATA:</strong> {airport?.iata_code}</p>
        <p><strong>Código ICAO:</strong> {airport?.icao_code}</p>
        <p><strong>País:</strong> {airport?.country_name} ({airport?.country_iso2})</p>
        <p><strong>Ciudad IATA:</strong> {airport?.city_iata_code}</p>
        <p><strong>Teléfono:</strong> {airport?.phone_number ?? 'No disponible'}</p>
      </div>

  </div>
  )
}
