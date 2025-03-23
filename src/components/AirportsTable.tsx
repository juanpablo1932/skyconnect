'use client'

import { Airport } from '@/types/airports'
import Card from './Card'
import AirportCardContent from './AirportCardContent'
import Link from 'next/link'
import { useFilteredAirports } from '@/lib/hooks/useFilteredAirports'

export default function AirportsTable({ data }: { data: Airport[] }) {

  const filteredAirports = useFilteredAirports(data);

  const handleSessionStorage = (airport: Airport) => {
    sessionStorage.setItem('airport', JSON.stringify(airport));
  };

  return (
<>
 {filteredAirports.length === 0 ? <p>...Cargando</p> : filteredAirports.map((airport) => (
  <Link
    className='w-1/2 max-w-2xl h-52'
    href={{
      pathname: `/airports/${airport.airport_name.replace(/\//g, " ")}`,
      query: { code: airport.iata_code }
    }}
    key={airport.airport_name}
    onClick={() => handleSessionStorage(airport)}
  >
    <Card>
      <AirportCardContent
        name={airport.airport_name}
        country={airport.country_name}
        city={airport.timezone}
        code={airport.iata_code}
      />
    </Card>
  </Link>
  ))}
</>
  )
}
