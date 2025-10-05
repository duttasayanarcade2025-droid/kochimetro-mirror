import { Clock, Activity, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { stations } from '@/data/stationsData';

const LiveTrainInfo = () => {
  // Simulated live data - in production, this would come from an API
  const currentTime = new Date();
  const getNextTrainTime = (minutes: number) => {
    const next = new Date(currentTime.getTime() + minutes * 60000);
    return next.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const liveStations = stations.slice(0, 6); // Show first 6 stations for demo

  return (
    <div className="space-y-4">
      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              System Status
            </span>
            <Badge className="bg-green-500">Operational</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Line 1</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="font-medium">Normal Service</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Line 2</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="font-medium">Normal Service</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Trains */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Next Train Arrivals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {liveStations.map((station, index) => (
              <div
                key={station.id}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold">{station.name}</p>
                  <p className="text-xs text-muted-foreground">{station.line}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-bold text-metro-teal">
                    {getNextTrainTime(3 + index * 2)}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {3 + index * 2} mins
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Service Announcements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Service Updates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                Extended hours on weekends
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Metro services available until 11:00 PM on Saturdays and Sundays
              </p>
            </div>
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                New smart card top-up kiosks
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Now available at all major stations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveTrainInfo;
