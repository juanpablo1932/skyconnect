'use client';

import { MapContainer, TileLayer } from 'react-leaflet';

export default function MapContent({ lat, lng }: { lat: number; lng: number }) {
  const position: [number, number] = [lat, lng];

  return (
    <div className="w-full h-96 overflow-hidden rounded-md">
      <MapContainer className="h-full" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}