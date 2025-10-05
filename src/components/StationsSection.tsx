import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InteractiveMap from './InteractiveMap';
import { stations, getStationsByLine } from '@/data/stationsData';

const StationsSection = () => {
  const line1Stations = getStationsByLine("Line 1");
  const line2Stations = getStationsByLine("Line 2");

  const stationRoutes = [
    {
      line: "Line 1",
      stations: line1Stations,
      color: "metro-teal"
    },
    {
      line: "Line 2",
      stations: line2Stations,
      color: "metro-purple"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="text-metro-teal font-medium mb-2">Stations</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Connecting Lives
            </h2>
            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6">
              Metro stations in Ernakulam
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Take a closer look at our station locations in this interactive map to plan your trip and day with ease.
            </p>

            {/* Station Routes */}
            <div className="space-y-6">
              {stationRoutes.map((route) => (
                <div key={route.line}>
                  <h4 className="font-semibold text-lg mb-3">{route.line}</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stations.map((station, index) => (
                      <span key={station.id} className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`text-${route.color} hover:text-${route.color} hover:bg-${route.color}/10 p-2 h-auto font-normal text-sm`}
                          title={`${station.name} (${station.code})`}
                        >
                          {station.name}
                        </Button>
                        {index < route.stations.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-muted-foreground mx-1" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative">
            <InteractiveMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationsSection;