import { useState } from 'react';
import { Route, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { stations, Station } from '@/data/stationsData';
import { Badge } from '@/components/ui/badge';

interface JourneyResult {
  stations: Station[];
  duration: number;
  fare: number;
  line: string;
  requiresTransfer: boolean;
}

const JourneyPlanner = () => {
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');
  const [journey, setJourney] = useState<JourneyResult | null>(null);

  const planJourney = () => {
    if (!fromStation || !toStation) return;

    const from = stations.find(s => s.id === fromStation);
    const to = stations.find(s => s.id === toStation);

    if (!from || !to) return;

    // Check if transfer is needed
    const requiresTransfer = from.line !== to.line;
    
    // Get intermediate stations
    let routeStations: Station[] = [];
    
    if (!requiresTransfer) {
      // Same line, get all stations between
      const lineStations = stations.filter(s => s.line === from.line);
      const fromIndex = lineStations.findIndex(s => s.id === from.id);
      const toIndex = lineStations.findIndex(s => s.id === to.id);
      
      if (fromIndex < toIndex) {
        routeStations = lineStations.slice(fromIndex, toIndex + 1);
      } else {
        routeStations = lineStations.slice(toIndex, fromIndex + 1).reverse();
      }
    } else {
      // Transfer needed - simplified route via common interchange
      routeStations = [from, to];
    }

    // Calculate duration (approximately 2 minutes per station + 1 minute wait)
    const stationCount = routeStations.length - 1;
    const duration = stationCount * 2 + 1 + (requiresTransfer ? 5 : 0);

    // Calculate fare
    const distance = Math.abs(from.distance - to.distance);
    let fare = 10;
    if (distance > 2) fare = 20;
    if (distance > 5) fare = 30;
    if (distance > 10) fare = 40;
    if (distance > 15) fare = 50;

    setJourney({
      stations: routeStations,
      duration,
      fare,
      line: from.line,
      requiresTransfer
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Route className="w-5 h-5" />
          Journey Planner
        </CardTitle>
        <CardDescription>
          Plan your journey and view the complete route
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">From Station</label>
            <Select value={fromStation} onValueChange={setFromStation}>
              <SelectTrigger>
                <SelectValue placeholder="Select origin" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
                  <SelectItem key={station.id} value={station.id}>
                    {station.name} ({station.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To Station</label>
            <Select value={toStation} onValueChange={setToStation}>
              <SelectTrigger>
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {stations.map((station) => (
                  <SelectItem key={station.id} value={station.id}>
                    {station.name} ({station.code})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={planJourney}
          disabled={!fromStation || !toStation}
          className="w-full"
          size="lg"
        >
          Plan Journey
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {journey && (
          <div className="space-y-4">
            {/* Journey Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <Clock className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">{journey.duration}</p>
                <p className="text-xs text-muted-foreground">minutes</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">{journey.stations.length - 1}</p>
                <p className="text-xs text-muted-foreground">stops</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <Route className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">₹{journey.fare}</p>
                <p className="text-xs text-muted-foreground">fare</p>
              </div>
            </div>

            {/* Route Details */}
            <div className="bg-gradient-to-r from-metro-teal/10 to-metro-purple/10 p-4 rounded-lg border border-metro-teal/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Route Details</h4>
                <Badge variant="secondary">{journey.line}</Badge>
              </div>
              
              {journey.requiresTransfer && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded mb-4">
                  <p className="text-sm text-yellow-700 dark:text-yellow-500 font-medium">
                    ⚠️ Transfer required between lines
                  </p>
                </div>
              )}

              <div className="space-y-2">
                {journey.stations.map((station, index) => (
                  <div key={station.id} className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        index === 0 || index === journey.stations.length - 1
                          ? 'bg-metro-teal'
                          : 'bg-metro-teal/50'
                      }`} />
                      {index < journey.stations.length - 1 && (
                        <div className="w-0.5 h-8 bg-metro-teal/30" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{station.name}</p>
                      <p className="text-xs text-muted-foreground">{station.code}</p>
                    </div>
                    {index === 0 && (
                      <Badge variant="outline" className="text-xs">Start</Badge>
                    )}
                    {index === journey.stations.length - 1 && (
                      <Badge variant="outline" className="text-xs">End</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JourneyPlanner;
