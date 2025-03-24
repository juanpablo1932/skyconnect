import CardDetail from '@/components/CardDetail';
import GeneralCardContent from '@/components/GeneralCardContent';
import LocalTimeCardContent from '@/components/LocalTimeCardContent';
import LocationCardContent from '@/components/LocationCardContent';
import Map from '@/components/Map';
import TimeZoneCardContent from '@/components/TimeZoneCardContent';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

interface AirportData {
  iata_code: string;
  [key: string]: string;
}

export default async function page({
  searchParams,
}: {
  searchParams?: Promise<{ option?: string, code?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const iataCode = resolvedSearchParams?.code;
  const optionTab = resolvedSearchParams?.option;

  const filePath = path.join(process.cwd(), 'public', 'airports.csv');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = Papa.parse<AirportData>(fileContent, { header: true }).data.find((item) => iataCode === item.iata_code);


  return (
    <>
      {optionTab === "general" &&
        <div className='p-5 sm:p-0'>
          <CardDetail><GeneralCardContent/></CardDetail>
        </div>}
      {optionTab === "ubicacion" &&
        <div className='flex flex-col gap-5 p-5 sm:p-0'>
          <CardDetail><LocationCardContent/></CardDetail>
          {data && <Map lat={+data.latitude_deg} lng={+data.longitude_deg}/>}
        </div>
      }
      {optionTab === "zona-horaria" &&
        <div className='flex flex-col gap-5 p-5 sm:p-0'>
          <CardDetail>
            <TimeZoneCardContent/>
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
