import { useEffect, useMemo } from 'react';
import { Airport } from '@/types/airports';
import { useAirportStore } from '@/stores/airport-store';
import { useSearchStore } from '@/stores/search-store';

export function useFilteredAirports(data: Airport[]) {
  const { airports, updateAirports, offset } = useAirportStore();
  const { search } = useSearchStore();

  useEffect(() => {
    updateAirports(data);
  }, [data, updateAirports]);

  const filteredAirports = useMemo(() => {
    const sortedAirports = [...airports].sort((a, b) =>
      a.iata_code.localeCompare(b.iata_code)
    );

    return sortedAirports
      .slice(offset, offset + 6)
      .filter(
        (airport) =>
          airport.airport_name.toLowerCase().includes(search.toLowerCase()) ||
          airport.iata_code.toLowerCase().includes(search.toLowerCase())
      );
  }, [airports, offset, search]);

  return filteredAirports;
}