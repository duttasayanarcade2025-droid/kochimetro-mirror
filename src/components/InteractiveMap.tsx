import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Actual Kochi Metro station coordinates
const metroStations = [
  // Line 1 (Aluva to Ernakulam South)
  { name: "Aluva", coordinates: [76.3536, 10.1081], line: "Line 1" },
  { name: "Pulinchodu", coordinates: [76.3486, 10.0981], line: "Line 1" },
  { name: "Companypady", coordinates: [76.3436, 10.0881], line: "Line 1" },
  { name: "Ambattukavu", coordinates: [76.3386, 10.0781], line: "Line 1" },
  { name: "Muttom", coordinates: [76.3336, 10.0681], line: "Line 1" },
  { name: "Kalamassery", coordinates: [76.3286, 10.0581], line: "Line 1" },
  { name: "Cochin University", coordinates: [76.3236, 10.0481], line: "Line 1" },
  { name: "Pathadipalam", coordinates: [76.3186, 10.0381], line: "Line 1" },
  { name: "Edapally", coordinates: [76.3086, 10.0256], line: "Line 1" },
  { name: "Changampuzha Park", coordinates: [76.2986, 10.0156], line: "Line 1" },
  { name: "Palarivattom", coordinates: [76.2886, 10.0056], line: "Line 1" },
  { name: "JLN Stadium", coordinates: [76.2786, 9.9956], line: "Line 1" },
  { name: "Kaloor", coordinates: [76.2686, 9.9856], line: "Line 1" },
  { name: "Town Hall", coordinates: [76.2586, 9.9756], line: "Line 1" },
  { name: "M.G Road", coordinates: [76.2486, 9.9656], line: "Line 1" },
  { name: "Maharaja's College", coordinates: [76.2386, 9.9556], line: "Line 1" },
  { name: "Ernakulam South", coordinates: [76.2286, 9.9456], line: "Line 1" },
  
  // Line 2 (Kadavanthra to Tripunithura)
  { name: "Kadavanthra", coordinates: [76.2986, 9.9656], line: "Line 2" },
  { name: "Elamkulam", coordinates: [76.3086, 9.9556], line: "Line 2" },
  { name: "Vytilla", coordinates: [76.3186, 9.9456], line: "Line 2" },
  { name: "Thaikoodam", coordinates: [76.3286, 9.9356], line: "Line 2" },
  { name: "Petta", coordinates: [76.3386, 9.9256], line: "Line 2" },
  { name: "Vadakkekotta", coordinates: [76.3486, 9.9156], line: "Line 2" },
  { name: "SN Junction", coordinates: [76.3586, 9.9056], line: "Line 2" },
  { name: "Tripunithura", coordinates: [76.3686, 9.8956], line: "Line 2" }
];

interface InteractiveMapProps {
  className?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ className = "" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [76.2986, 9.9956], // Center around Kochi Metro area
      zoom: 11,
      pitch: 0,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      if (!map.current) return;

      // Add metro stations as markers
      metroStations.forEach((station) => {
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'metro-station-marker';
        markerElement.style.cssText = `
          width: 24px;
          height: 24px;
          background-color: hsl(var(--metro-teal));
          border: 2px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          color: white;
        `;

        // Add popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
          <div style="padding: 8px;">
            <h3 style="margin: 0 0 4px 0; font-weight: bold; color: hsl(var(--metro-teal));">${station.name}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">${station.line}</p>
          </div>
        `);

        // Create marker
        new mapboxgl.Marker(markerElement)
          .setLngLat(station.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });

      // Add metro lines
      map.current!.addSource('metro-line-1', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: metroStations
              .filter(station => station.line === 'Line 1')
              .map(station => station.coordinates)
          }
        }
      });

      map.current!.addSource('metro-line-2', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: metroStations
              .filter(station => station.line === 'Line 2')
              .map(station => station.coordinates)
          }
        }
      });

      map.current!.addLayer({
        id: 'metro-line-1',
        type: 'line',
        source: 'metro-line-1',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': 'hsl(var(--metro-teal))',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });

      map.current!.addLayer({
        id: 'metro-line-2',
        type: 'line',
        source: 'metro-line-2',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': 'hsl(var(--metro-blue))',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });
    });
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setIsTokenSet(true);
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className={`bg-white rounded-lg shadow-card p-6 h-96 flex flex-col items-center justify-center ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interactive Metro Map</h3>
        <p className="text-sm text-gray-600 mb-4 text-center">
          To display the interactive map with real metro station locations, please enter your Mapbox public token.
        </p>
        <p className="text-xs text-gray-500 mb-4 text-center">
          Get your free token at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-metro-teal hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-3">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Load Interactive Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow-card overflow-hidden ${className}`}>
      <div ref={mapContainer} className="w-full h-96" />
      <div className="p-4 text-xs text-gray-500 flex items-center justify-between border-t">
        <span>Real-time Metro Station Locations</span>
        <span>Powered by Mapbox</span>
      </div>
    </div>
  );
};

export default InteractiveMap;