import React from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from '@react-google-maps/api';

interface Garden {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  production: {
    type: string;
    amount: number;
  }[];
}

const gardens: Garden[] = [
  {
    id: '1',
    name: 'Huerta Comunitaria San Fernando',
    position: { lat: 3.4372, lng: -76.5225 },
    production: [
      { type: 'Tomatoes', amount: 25 },
      { type: 'Lettuce', amount: 30 },
      { type: 'Herbs', amount: 15 }
    ]
  },
  {
    id: '2',
    name: 'Jardín Urbano Granada',
    position: { lat: 3.4583, lng: -76.5284 },
    production: [
      { type: 'Bell Peppers', amount: 20 },
      { type: 'Spinach', amount: 18 },
      { type: 'Carrots', amount: 40 }
    ]
  },
  {
    id: '3',
    name: 'Huerto El Peñón',
    position: { lat: 3.4516, lng: -76.5319 },
    production: [
      { type: 'Cilantro', amount: 10 },
      { type: 'Green Onions', amount: 15 },
      { type: 'Kale', amount: 12 }
    ]
  }
];

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 3.4516,
  lng: -76.5260
};

export default function GardenMap() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCmZpA70ZSOisUj6I9cxh0Yd2n38ZBIew4'
  });

  const [selectedGarden, setSelectedGarden] = React.useState<Garden | null>(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps...</div>;

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={{
          styles: [
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'off' }]
            }
          ],
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: true,
        }}
      >
        {gardens.map((garden) => (
          <MarkerF
            key={garden.id}
            position={garden.position}
            onClick={() => setSelectedGarden(garden)}
            icon={{
              url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMxMDk3MmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1mbG93ZXItMiI+PHBhdGggZD0iTTEyIDN2NC0yIDhhMiAyIDAgMSAwIDQgMGMwLTIuNS0yLTYtNC02WiIvPjxwYXRoIGQ9Ik0xMiAxOXYzIi8+PHBhdGggZD0iTTEyIDN2NC0yIDhhMiAyIDAgMSAxLTQgMGMwLTIuNSAyLTYgNC02WiIvPjxwYXRoIGQ9Ik0xMiAxOXYzIi8+PHBhdGggZD0iTTEyIDN2NCAxYTIgMiAwIDEgMS00IDBjMC0yLjUgMi02IDQtNloiLz48cGF0aCBkPSJNMTIgM3Y0IDFhMiAyIDAgMSAwIDQgMGMwLTIuNS0yLTYtNC02WiIvPjwvc3ZnPg==',
              scaledSize: new google.maps.Size(32, 32)
            }}
          />
        ))}

        {selectedGarden && (
          <InfoWindowF
            position={selectedGarden.position}
            onCloseClick={() => setSelectedGarden(null)}
          >
            <div className="p-2">
              <h3 className="font-semibold text-lg mb-2">{selectedGarden.name}</h3>
              <div className="space-y-1">
                {selectedGarden.production.map((item, index) => (
                  <p key={index} className="text-sm">
                    {item.type}: {item.amount} kg
                  </p>
                ))}
              </div>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  );
}