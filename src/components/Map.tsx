'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const DynamicMap = dynamic(() => import('./MapContent'), { ssr: false });

export default function Map({ lat, lng }: { lat: number; lng: number }) {
  return <DynamicMap lat={lat} lng={lng} />;
}
