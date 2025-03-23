import { useEffect, useState } from 'react';
import { Airport } from '@/types/airports';

export function useAirportDetail() {
  const [airport, setAirport] = useState<Airport | null>(null);

  useEffect(() => {
    const storedAirport = sessionStorage.getItem('airport');
    if (storedAirport) {
      setAirport(JSON.parse(storedAirport));
    }
  }, []);

  return airport;
}