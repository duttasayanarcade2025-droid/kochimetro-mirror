import { useEffect, useRef, useState } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stations } from '@/data/stationsData';
import { MapPin, Navigation, Maximize2 } from 'lucide-react';

const TOMTOM_API_KEY = 'YVCU4ApGj7uiv2zFv9QBSvrahsUASymi';
const OPENTOPOMAP_KEY = 'ff621de3f26f96d7ae5bc59aec3e3b59';

const TomTom3DMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedStation, setSelectedStation] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Calculate center of Kerala metro stations
    const centerLat = stations.reduce((sum, s) => sum + s.coordinates.lat, 0) / stations.length;
    const centerLng = stations.reduce((sum, s) => sum + s.coordinates.lng, 0) / stations.length;

    // Initialize TomTom map
    map.current = tt.map({
      key: TOMTOM_API_KEY,
      container: mapContainer.current,
      center: [centerLng, centerLat],
      zoom: 11,
      pitch: 60, // 3D tilt
      bearing: 0,
      style: `https://api.tomtom.com/style/1/style/22.2.1-*?map=basic_main&key=${TOMTOM_API_KEY}`,
    });

    // Add navigation controls
    map.current.addControl(new tt.NavigationControl());
    map.current.addControl(new tt.FullscreenControl());

    // Add 3D buildings and terrain
    map.current.on('load', () => {
      // Remove Mapbox terrain - TomTom doesn't support setTerrain
      // Instead, we'll use TomTom's native 3D building support
      
      // Add 3D building layer using TomTom's vector data
      const layers = map.current.getStyle().layers;
      const labelLayerId = layers.find(
        (layer: any) => layer.type === 'symbol' && layer.layout && layer.layout['text-field']
      )?.id;

      // TomTom has built-in 3D building support in their vector tiles
      if (!map.current.getLayer('3d-buildings')) {
        map.current.addLayer(
          {
            id: '3d-buildings',
            source: 'vector',
            'source-layer': 'Building',
            filter: ['==', 'extrude', 'true'],
            type: 'fill-extrusion',
            minzoom: 14,
            paint: {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.7
            }
          },
          labelLayerId
        );
      }

      // Add metro lines
      const line1Coords = stations
        .filter(s => s.line === 'Line 1')
        .sort((a, b) => a.distance - b.distance)
        .map(s => [s.coordinates.lng, s.coordinates.lat]);

      const line2Coords = stations
        .filter(s => s.line === 'Line 2')
        .sort((a, b) => a.distance - b.distance)
        .map(s => [s.coordinates.lng, s.coordinates.lat]);

      // Line 1
      map.current.addSource('line1', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: line1Coords
          }
        }
      });

      map.current.addLayer({
        id: 'line1-layer',
        type: 'line',
        source: 'line1',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0EA5E9',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });

      // Line 2
      map.current.addSource('line2', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: line2Coords
          }
        }
      });

      map.current.addLayer({
        id: 'line2-layer',
        type: 'line',
        source: 'line2',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#8B5CF6',
          'line-width': 4,
          'line-opacity': 0.8
        }
      });

      // Add station markers
      stations.forEach((station) => {
        // Create custom marker element
        const markerElement = document.createElement('div');
        markerElement.className = 'metro-station-marker';
        markerElement.style.cssText = `
          width: 24px;
          height: 24px;
          background: ${station.line === 'Line 1' ? '#0EA5E9' : '#8B5CF6'};
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        `;

        markerElement.addEventListener('mouseenter', () => {
          markerElement.style.transform = 'scale(1.3)';
          markerElement.style.zIndex = '1000';
        });

        markerElement.addEventListener('mouseleave', () => {
          markerElement.style.transform = 'scale(1)';
        });

        // Create popup content
        const popupContent = `
          <div style="min-width: 200px; font-family: sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: ${station.line === 'Line 1' ? '#0EA5E9' : '#8B5CF6'};">
              ${station.name}
            </h3>
            <p style="margin: 4px 0; font-size: 12px; color: #666;">
              <strong>Code:</strong> ${station.code} | <strong>Line:</strong> ${station.line}
            </p>
            <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee;">
              <p style="margin: 2px 0; font-size: 11px;">
                📍 ${station.nearbyLandmarks.slice(0, 2).join(', ')}
              </p>
              <p style="margin: 2px 0; font-size: 11px;">
                🕐 ${station.operatingHours.weekday}
              </p>
            </div>
            <div style="margin-top: 8px; display: flex; gap: 4px; flex-wrap: wrap;">
              ${station.facilities.wifi ? '<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px;">📶 WiFi</span>' : ''}
              ${station.facilities.parking ? '<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px;">🅿️ Parking</span>' : ''}
              ${station.facilities.foodCourt ? '<span style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-size: 10px;">🍽️ Food</span>' : ''}
            </div>
          </div>
        `;

        const popup = new tt.Popup({
          offset: 30,
          closeButton: true,
          closeOnClick: false
        }).setHTML(popupContent);

        const marker = new tt.Marker({ element: markerElement })
          .setLngLat([station.coordinates.lng, station.coordinates.lat])
          .setPopup(popup)
          .addTo(map.current);

        markerElement.addEventListener('click', () => {
          setSelectedStation(station.id);
          map.current.flyTo({
            center: [station.coordinates.lng, station.coordinates.lat],
            zoom: 16,
            pitch: 60,
            bearing: 30,
            duration: 2000
          });
        });
      });
    });

    // Rotation animation
    let rotationEnabled = true;
    let userInteracting = false;

    const rotate = () => {
      if (!map.current || !rotationEnabled || userInteracting) return;
      map.current.rotateTo(map.current.getBearing() + 0.1, { duration: 100 });
      requestAnimationFrame(rotate);
    };

    map.current.on('mousedown', () => {
      userInteracting = true;
    });

    map.current.on('mouseup', () => {
      userInteracting = false;
    });

    setTimeout(() => rotate(), 2000);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  const handleResetView = () => {
    if (!map.current) return;
    const centerLat = stations.reduce((sum, s) => sum + s.coordinates.lat, 0) / stations.length;
    const centerLng = stations.reduce((sum, s) => sum + s.coordinates.lng, 0) / stations.length;

    map.current.flyTo({
      center: [centerLng, centerLat],
      zoom: 11,
      pitch: 60,
      bearing: 0,
      duration: 2000
    });
    setSelectedStation(null);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainer.current?.parentElement?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-metro-teal/10 to-metro-purple/10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-metro-teal" />
              3D Interactive Kerala Metro Map
            </CardTitle>
            <CardDescription>
              Explore Kerala metro stations in stunning 3D with terrain elevation
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleResetView}>
              <Navigation className="w-4 h-4 mr-2" />
              Reset View
            </Button>
            <Button variant="outline" size="sm" onClick={toggleFullscreen}>
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div
          ref={mapContainer}
          className="w-full h-[600px] bg-muted"
          style={{ position: 'relative' }}
        />
        <div className="p-4 bg-muted/30 border-t">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-metro-teal rounded" />
                <span>Line 1 ({stations.filter(s => s.line === 'Line 1').length} stations)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-1 bg-metro-purple rounded" />
                <span>Line 2 ({stations.filter(s => s.line === 'Line 2').length} stations)</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Click and drag to rotate • Scroll to zoom • Click stations for details
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TomTom3DMap;
