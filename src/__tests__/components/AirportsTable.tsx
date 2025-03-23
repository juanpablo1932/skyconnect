import { render, screen, fireEvent } from '@testing-library/react';
import AirportsTable from '../../components/AirportsTable';
import { Airport } from '@/types/airports';
import { useFilteredAirports } from '../../lib/hooks/useFilteredAirports';

// Mock del hook useFilteredAirports
jest.mock('../../lib/hooks/useFilteredAirports', () => ({
  useFilteredAirports: jest.fn(),
}));

const mockAirports: Airport[] = [
  {
    airport_name: 'Barajas',
    country_name: 'Spain',
    timezone: 'Europe/Madrid',
    iata_code: 'MAD',
    id: '1',
    gmt: '1',
    airport_id: '1',
    city_iata_code: 'MAD',
    latitude: '40.493556',
    longitude: '-3.566764',
    geoname_id: '1',
    icao_code: 'LEMD',
    country_iso2: 'ES',
    phone_number: '+34 913 21 10 00',
  },
  {
    airport_name: 'Heathrow',
    country_name: 'United Kingdom',
    timezone: 'Europe/London',
    iata_code: 'LHR',
    id: '2',
    gmt: '0',
    airport_id: '2',
    city_iata_code: 'LHR',
    latitude: '51.470600',
    longitude: '-0.461941',
    geoname_id: '2',
    icao_code: 'EGLL',
    country_iso2: 'GB',
    phone_number: '+44 844 335 1801',
  },
];

describe('AirportsTable', () => {
  beforeEach(() => {
    (useFilteredAirports as jest.Mock).mockReturnValue(mockAirports);
    sessionStorage.clear();
  });

  it('should render a list of airports', () => {
    render(<AirportsTable data={mockAirports} />);

    expect(screen.getByText('Barajas')).toBeInTheDocument();
    expect(screen.getByText('Heathrow')).toBeInTheDocument();
  });

  it('should store the airport in sessionStorage on click', () => {
    render(<AirportsTable data={mockAirports} />);

    const barajasLink = screen.getByText('Barajas').closest('a');
    fireEvent.click(barajasLink!);

    const storedAirport = JSON.parse(sessionStorage.getItem('airport')!);
    expect(storedAirport).toEqual(mockAirports[0]);
  });

  it('should generate links with the correct paths', () => {
    render(<AirportsTable data={mockAirports} />);

    const barajasLink = screen.getByText('Barajas').closest('a');
    const heathrowLink = screen.getByText('Heathrow').closest('a');

    expect(barajasLink).toHaveAttribute(
      'href',
      '/airports/Barajas?code=MAD'
    );
    expect(heathrowLink).toHaveAttribute(
      'href',
      '/airports/Heathrow?code=LHR'
    );
  });
});