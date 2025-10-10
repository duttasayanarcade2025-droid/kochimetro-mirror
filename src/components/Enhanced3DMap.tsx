import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { stations } from '@/data/stationsData';
import { MapPin, Navigation, Maximize2, Mountain } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Using a public Mapbox token - users should replace with their own
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const Enhanced3DMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Calculate center of Kerala metro stations
    const centerLat = stations.reduce((sum, s) => sum + s.coordinates.lat, 0) / stations.length;
    const centerLng = stations.reduce((sum, s) => sum + s.coordinates.lng, 0) / stations.length;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    // Initialize Mapbox map with 3D terrain
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [centerLng, centerLat],
      zoom: 11,
      pitch: 60,
      bearing: 0,
      antialias: true,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(new mapboxgl.FullscreenControl());

    map.current.on('load', () => {
      if (!map.current) return;

      // Add 3D terrain
      map.current.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
        tileSize: 512,
        maxzoom: 14,
      });

      map.current.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

      // Add sky layer for realistic atmosphere
      map.current.addLayer({
        id: 'sky',
        type: 'sky',
        paint: {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 90.0],
          'sky-atmosphere-sun-intensity': 15,
        },
      });

      // Add 3D buildings
      const layers = map.current.getStyle().layers || [];
      const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout && (layer.layout as any)['text-field']
      )?.id;

      if (!map.current.getLayer('3d-buildings')) {
        map.current.addLayer(
          {
            id: '3d-buildings',
            source: 'composite',
            'source-layer': 'building',
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
                ['get', 'height'],
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                14,
                0,
                14.05,
                ['get', 'min_height'],
              ],
              'fill-extrusion-opacity': 0.8,
            },
          },
          labelLayerId
        );
      }

      // Add metro lines
      const line1Coords = stations
        .filter((s) => s.line === 'Line 1')
        .sort((a, b) => a.distance - b.distance)
        .map((s) => [s.coordinates.lng, s.coordinates.lat]);

      const line2Coords = stations
        .filter((s) => s.line === 'Line 2')
        .sort((a, b) => a.distance - b.distance)
        .map((s) => [s.coordinates.lng, s.coordinates.lat]);

      // Line 1
      map.current.addSource('line1', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: line1Coords,
          },
        },
      });

      map.current.addLayer({
        id: 'line1-layer',
        type: 'line',
        source: 'line1',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#0EA5E9',
          'line-width': 5,
          'line-opacity': 0.9,
        },
      });

      // Line 2
      map.current.addSource('line2', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: line2Coords,
          },
        },
      });

      map.current.addLayer({
        id: 'line2-layer',
        type: 'line',
        source: 'line2',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#8B5CF6',
          'line-width': 5,
          'line-opacity': 0.9,
        },
      });

      // Add station markers
      stations.forEach((station) => {
        const el = document.createElement('div');
        el.className = 'metro-marker';
        el.style.cssText = `
          width: 28px;
          height: 28px;
          background: ${station.line === 'Line 1' ? '#0EA5E9' : '#8B5CF6'};
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 3px 12px rgba(0,0,0,0.4);
          cursor: pointer;
          transition: all 0.3s ease;
        `;

        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.4)';
          el.style.zIndex = '1000';
        });

        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
        });

        const popupHTML = `
          <div style="min-width: 220px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-size: 17px; font-weight: 700; color: ${
              station.line === 'Line 1' ? '#0EA5E9' : '#8B5CF6'
            };">
              ${station.name}
            </h3>
            <p style="margin: 4px 0; font-size: 13px; color: #555;">
              <strong>${t.routes}:</strong> ${station.code} | ${station.line}
            </p>
            ${
              station.isInterchange
                ? `<span style="background: #fbbf24; color: #78350f; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; display: inline-block; margin-top: 4px;">
                    ${t.interchange}
                  </span>`
                : ''
            }
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 3px 0; font-size: 12px; color: #666;">
                📍 ${station.nearbyLandmarks.slice(0, 2).join(', ')}
              </p>
            </div>
            <div style="margin-top: 8px; display: flex; gap: 6px; flex-wrap: wrap;">
              ${
                station.facilities.wifi
                  ? '<span style="background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 11px;">📶 WiFi</span>'
                  : ''
              }
              ${
                station.facilities.parking
                  ? '<span style="background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 11px;">🅿️ Parking</span>'
                  : ''
              }
              ${
                station.facilities.foodCourt
                  ? '<span style="background: #dbeafe; color: #1e40af; padding: 3px 8px; border-radius: 4px; font-size: 11px;">🍽️ Food</span>'
                  : ''
              }
            </div>
          </div>
        `;

        const popup = new mapboxgl.Popup({
          offset: 35,
          closeButton: true,
          closeOnClick: false,
          maxWidth: '300px',
        }).setHTML(popupHTML);

        new mapboxgl.Marker({ element: el })
          .setLngLat([station.coordinates.lng, station.coordinates.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });
    });

    // Smooth rotation
    let rotating = true;
    let userInteracting = false;

    const rotateCamera = () => {
      if (!map.current || !rotating || userInteracting) return;
      map.current.rotateTo(map.current.getBearing() + 0.15, { duration: 100 });
      requestAnimationFrame(rotateCamera);
    };

    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    map.current.on('mouseup', () => {
      userInteracting = false;
    });

    setTimeout(() => rotateCamera(), 3000);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [t]);

  const handleResetView = () => {
    if (!map.current) return;
    const centerLat = stations.reduce((sum, s) => sum + s.coordinates.lat, 0) / stations.length;
    const centerLng = stations.reduce((sum, s) => sum + s.coordinates.lng, 0) / stations.length;

    map.current.flyTo({
      center: [centerLng, centerLat],
      zoom: 11,
      pitch: 60,
      bearing: 0,
      duration: 2500,
    });
  };

  const toggle3D = () => {
    if (!map.current) return;
    const newPitch = is3DEnabled ? 0 : 60;
    map.current.easeTo({ pitch: newPitch, duration: 1000 });
    setIs3DEnabled(!is3DEnabled);
  };

  return (
    <Card className="overflow-hidden shadow-xl">
      <CardHeader className="bg-gradient-to-r from-metro-teal/20 to-metro-purple/20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Mountain className="w-6 h-6 text-metro-teal" />
              3D Terrain Map with Elevation
            </CardTitle>
            <CardDescription className="mt-1">
              Explore Kochi Metro with realistic terrain, buildings, and landscapes
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={toggle3D}>
              <Mountain className="w-4 h-4 mr-2" />
              {is3DEnabled ? '2D View' : '3D View'}
            </Button>
            <Button variant="outline" size="sm" onClick={handleResetView}>
              <Navigation className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div ref={mapContainer} className="w-full h-[700px] bg-muted" />
        <div className="p-4 bg-gradient-to-r from-muted/50 to-muted/30 border-t">
          <div className="flex items-center justify-between text-sm flex-wrap gap-3">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-5 h-1.5 bg-metro-teal rounded" />
                <span className="font-medium">{t.line1} ({stations.filter((s) => s.line === 'Line 1').length})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-1.5 bg-metro-purple rounded" />
                <span className="font-medium">{t.line2} ({stations.filter((s) => s.line === 'Line 2').length})</span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs">
              🗺️ Full 3D terrain • 🏢 Real buildings • 🔄 Auto-rotate • 📍 Click stations
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Enhanced3DMap;
