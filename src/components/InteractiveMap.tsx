import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stations } from '@/data/stationsData';
import { MapPin, Navigation, Clock, Info } from 'lucide-react';

// Map station data to Mapbox format [lng, lat]
const metroStations = stations.map(station => ({
  ...station,
  mapboxCoords: [station.coordinates.lng, station.coordinates.lat] as [number, number]
}));

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
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, hsl(var(--metro-teal)), hsl(var(--metro-blue)));
          border: 3px solid white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          color: white;
          transition: all 0.3s ease;
        `;

        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.transform = 'scale(1.2)';
          markerElement.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
          markerElement.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        });

        // Create enhanced popup with station details
        const facilityList = [
          station.facilities.parking && 'Parking',
          station.facilities.wifi && 'WiFi',
          station.facilities.elevator && 'Elevator',
          station.facilities.escalator && 'Escalator',
          station.facilities.atm && 'ATM',
          station.facilities.foodCourt && 'Food Court'
        ].filter(Boolean);
        
        const facilitiesHTML = facilityList.length > 0
          ? `<div style="display: flex; flex-wrap: wrap; gap: 4px; margin-top: 8px;">
              ${facilityList.map(f => `
                <span style="background: hsl(var(--metro-teal) / 0.1); color: hsl(var(--metro-teal)); 
                      padding: 2px 8px; border-radius: 12px; font-size: 10px;">${f}</span>
              `).join('')}
            </div>`
          : '';

        const popup = new mapboxgl.Popup({ 
          offset: 30,
          className: 'metro-station-popup',
          maxWidth: '280px'
        }).setHTML(`
          <div style="padding: 12px; font-family: var(--font-primary);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
              <div style="width: 8px; height: 8px; background: hsl(var(--metro-teal)); 
                          border-radius: 50%; animation: pulse 2s infinite;"></div>
              <h3 style="margin: 0; font-weight: 700; color: hsl(var(--metro-dark)); font-size: 16px;">
                ${station.name}
              </h3>
            </div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <span style="font-size: 11px; color: #666; font-weight: 600;">${station.code}</span>
              <span style="background: hsl(var(--metro-blue) / 0.2); color: hsl(var(--metro-dark)); 
                    padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600;">
                ${station.line}
              </span>
            </div>
            ${facilitiesHTML}
            ${station.nearbyLandmarks && station.nearbyLandmarks.length > 0 ? `
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
                <p style="margin: 0 0 4px 0; font-size: 11px; color: #888; font-weight: 600;">Nearby:</p>
                <p style="margin: 0; font-size: 11px; color: #666; line-height: 1.4;">
                  ${station.nearbyLandmarks.slice(0, 2).join(' • ')}
                </p>
              </div>
            ` : ''}
          </div>
        `);

        // Create marker
        new mapboxgl.Marker(markerElement)
          .setLngLat(station.mapboxCoords)
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
              .map(station => station.mapboxCoords)
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
              .map(station => station.mapboxCoords)
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
      <Card className={`p-8 h-96 flex flex-col items-center justify-center ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-8 h-8 text-metro-teal" />
          <h3 className="text-2xl font-heading font-bold">Interactive Metro Map</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3 text-center max-w-md">
          To display the interactive map with real-time metro station locations and route planning, 
          please enter your Mapbox public token.
        </p>
        <div className="flex items-center gap-2 mb-6">
          <Info className="w-4 h-4 text-metro-blue" />
          <p className="text-xs text-muted-foreground">
            Get your free token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-metro-teal hover:underline font-semibold"
            >
              mapbox.com
            </a>
          </p>
        </div>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-3">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full" size="lg">
            <Navigation className="w-4 h-4 mr-2" />
            Load Interactive Map
          </Button>
        </form>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="bg-gradient-to-r from-metro-teal/10 to-metro-blue/10 p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-metro-teal rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg">Interactive Metro Map</h3>
              <p className="text-xs text-muted-foreground">Click stations for details</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs">
              <Clock className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>
        </div>
      </div>
      <div ref={mapContainer} className="w-full h-[500px]" />
      <div className="p-3 bg-muted/30 text-xs text-muted-foreground flex items-center justify-between border-t">
        <span className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-metro-teal animate-pulse" />
          Real-time Metro Station Locations
        </span>
        <span>Powered by Mapbox</span>
      </div>
    </Card>
  );
};

export default InteractiveMap;