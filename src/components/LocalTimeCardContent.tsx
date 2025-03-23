'use client'

import Image from 'next/image'
import GradientText from './GradientText'
import { useEffect, useState } from 'react';
import { useAirportDetail } from '@/lib/hooks/useAirportDetail';

export default function LocalTimeCardContent() {

  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const airport = useAirportDetail();

  useEffect(() => {
    setCurrentTime(new Date().toLocaleString('es-Es', {timeZone: airport?.timezone}));
  }, [airport]);


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
        <p>{currentTime}</p>
      </div>
  </div>
  )
}
