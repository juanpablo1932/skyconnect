'use client';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/airpotIcon.png',
  iconSize: [25, 41]
});

export default function MapContent({ lat, lng }: { lat: number; lng: number }) {
  const position: [number, number] = [lat, lng];

  return (
    <div className="w-full h-96 overflow-hidden rounded-md">
      <MapContainer className="h-full" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon} />
      </MapContainer>
    </div>
  );
}