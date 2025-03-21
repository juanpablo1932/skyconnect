'use client'

import { Airport } from '@/types/airports'
import Card from './Card'
import AirportCardContent from './AirportCardContent'
import {useAirportStore} from '@/stores/airport-store'
import { useEffect } from 'react'

export default function AirportsTable({ data }: { data: Airport[] }) {


  const { airports, setAirports } = useAirportStore()

  console.log(airports)

  useEffect(() => {
    setAirports(data)
  }, [])
  return (
<>
 {airports.map((airport) => (
    <Card key={airport.iata_code}>
      <AirportCardContent
        name={airport.airport_name}
        country={airport.country_name}
        city={airport.timezone}
        code={airport.iata_code}
      />
    </Card>
  ))}
</>
  )
}
