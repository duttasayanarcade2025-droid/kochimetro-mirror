import { useState } from 'react';
import { Route, Clock, MapPin, ArrowRight, Navigation2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { stations } from '@/data/stationsData';
import { Badge } from '@/components/ui/badge';
import { planJourney as calculateJourney, JourneyResult } from '@/lib/journeyPlanner';
import { useLanguage } from '@/contexts/LanguageContext';

const JourneyPlanner = () => {
  const { t } = useLanguage();
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');
  const [journey, setJourney] = useState<JourneyResult | null>(null);

  const planJourney = () => {
    if (!fromStation || !toStation) return;
    
    const result = calculateJourney(fromStation, toStation);
    if (result) {
      setJourney(result);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Route className="w-5 h-5" />
          {t.journeyPlannerTitle}
        </CardTitle>
        <CardDescription>
          {t.journeyPlannerDesc}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t.from}</label>
            <Select value={fromStation} onValueChange={setFromStation}>
              <SelectTrigger>
                <SelectValue placeholder={t.selectStation} />
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
            <label className="text-sm font-medium">{t.to}</label>
            <Select value={toStation} onValueChange={setToStation}>
              <SelectTrigger>
                <SelectValue placeholder={t.selectStation} />
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
          {t.planJourney}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {journey && (
          <div className="space-y-4">
            {/* Journey Summary */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <Clock className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">{journey.totalDuration}</p>
                <p className="text-xs text-muted-foreground">{t.minutes}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <MapPin className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">{journey.totalStops}</p>
                <p className="text-xs text-muted-foreground">{t.stops}</p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <Route className="w-5 h-5 mx-auto mb-2 text-metro-teal" />
                <p className="text-2xl font-bold">{t.rupees}{journey.fare}</p>
                <p className="text-xs text-muted-foreground">{t.fare}</p>
              </div>
            </div>

            {/* Transfer Alert */}
            {journey.requiresTransfer && journey.transferStation && (
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Navigation2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-700 dark:text-yellow-400">
                      Transfer Required
                    </p>
                    <p className="text-sm text-yellow-600/80 dark:text-yellow-400/80 mt-1">
                      Change trains at <span className="font-semibold">{journey.transferStation.name}</span> • Additional 5 minutes
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Route Segments */}
            {journey.segments.map((segment, segmentIndex) => (
              <div 
                key={segmentIndex}
                className="bg-gradient-to-r from-metro-teal/10 to-metro-purple/10 p-4 rounded-lg border border-metro-teal/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-metro-teal" />
                    <h4 className="font-semibold">
                      {segmentIndex === 0 ? 'Start Journey' : 'After Transfer'}
                    </h4>
                  </div>
                  <Badge 
                    variant="secondary"
                    className={segment.line === 'Line 1' ? 'bg-metro-teal/20' : 'bg-metro-purple/20'}
                  >
                    {segment.line}
                  </Badge>
                </div>

                <div className="space-y-2">
                  {segment.stations.map((station, stationIndex) => {
                    const isFirst = segmentIndex === 0 && stationIndex === 0;
                    const isLast = segmentIndex === journey.segments.length - 1 && 
                                   stationIndex === segment.stations.length - 1;
                    const isTransfer = journey.requiresTransfer && 
                                      stationIndex === segment.stations.length - 1 &&
                                      segmentIndex < journey.segments.length - 1;
                    
                    return (
                      <div key={station.id} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${
                            isFirst || isLast || isTransfer
                              ? segment.line === 'Line 1' ? 'bg-metro-teal' : 'bg-metro-purple'
                              : segment.line === 'Line 1' ? 'bg-metro-teal/50' : 'bg-metro-purple/50'
                          } ${isTransfer ? 'ring-4 ring-yellow-400/30' : ''}`} />
                          {stationIndex < segment.stations.length - 1 && (
                            <div className={`w-0.5 h-8 ${
                              segment.line === 'Line 1' ? 'bg-metro-teal/30' : 'bg-metro-purple/30'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{station.name}</p>
                          <p className="text-xs text-muted-foreground">{station.code}</p>
                        </div>
                        <div className="flex gap-1">
                          {isFirst && (
                            <Badge variant="outline" className="text-xs bg-green-500/10 border-green-500/20">
                              Start
                            </Badge>
                          )}
                          {isTransfer && (
                            <Badge variant="outline" className="text-xs bg-yellow-500/10 border-yellow-500/20">
                              Transfer
                            </Badge>
                          )}
                          {isLast && (
                            <Badge variant="outline" className="text-xs bg-red-500/10 border-red-500/20">
                              End
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-3 pt-3 border-t border-metro-teal/20 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {segment.stations.length - 1} stop{segment.stations.length - 1 !== 1 ? 's' : ''}
                  </span>
                  <span className="font-medium">~{segment.duration} min</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default JourneyPlanner;
