'use client'

import { Airport } from '@/types/airports'
import Card from './Card'
import AirportCardContent from './AirportCardContent'
import {useAirportStore} from '@/stores/airport-store'
import {useSearchStore} from '@/stores/search-store'
import { useEffect } from 'react'
import Link from 'next/link'

export default function AirportsTable({ data }: { data: Airport[] }) {


  const { airports, updateAirports, offset } = useAirportStore()
  const { search } = useSearchStore()

  useEffect(() => {
    updateAirports(data)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleSessionStorage = (airport: Airport) => {
    sessionStorage.setItem('airport', JSON.stringify(airport))
  }

  const sortedAirports = [...airports].sort((a, b) => a.iata_code.localeCompare(b.iata_code));

  const filteredAirports = sortedAirports.slice(offset, offset + 6).filter(
    (airport) =>
      airport.airport_name.toLowerCase().includes(search.toLowerCase()) ||
      airport.iata_code.toLowerCase().includes(search.toLowerCase())
 )

  return (
<>
 {filteredAirports.map((airport) => (
  <Link
    className='w-1/2 max-w-2xl h-52'
    href={{
      pathname: `/airports/${airport.airport_name}`,
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
