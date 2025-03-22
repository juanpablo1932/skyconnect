import CardDetail from '@/components/CardDetail';
import GeneralCardContent from '@/components/GeneralCardContent';
import LocalTimeCardContent from '@/components/LocalTimeCardContent';
import LocationCardContent from '@/components/LocationCardContent';
import TimeZoneCardContent from '@/components/TimeZoneCardContent';
import React from 'react'

export default async function page({
  searchParams,
  params,
}: {
  searchParams?: Promise<{ option?: string }>;
  params: Promise<{ airport: string }>
}) {
  const {airport} = await params;
  const resolvedSearchParams = await searchParams;
  const optionTab = resolvedSearchParams?.option;
  const decodedAirport = decodeURIComponent(airport);
  return (
    <>
      {optionTab === "general" && <CardDetail><GeneralCardContent airportName={decodedAirport}/></CardDetail>}
      {optionTab === "ubicacion" && <CardDetail><LocationCardContent airportName={decodedAirport}/></CardDetail>}
      {optionTab === "zona-horaria" &&
        <div className='flex flex-col gap-5'>
          <CardDetail>
            <TimeZoneCardContent airportName={decodedAirport}/>
          </CardDetail>
          <CardDetail>
            <LocalTimeCardContent/>
          </CardDetail>
        </div>
      }
      {optionTab === "estadisticas" && <CardDetail>No disponible</CardDetail>}
    </>
  )
}
