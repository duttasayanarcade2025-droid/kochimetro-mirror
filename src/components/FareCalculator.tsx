import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
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

const FareCalculator = () => {
  const [fromStation, setFromStation] = useState<string>('');
  const [toStation, setToStation] = useState<string>('');
  const [fare, setFare] = useState<number | null>(null);

  const calculateFare = () => {
    if (!fromStation || !toStation) return;

    const from = stations.find(s => s.id === fromStation);
    const to = stations.find(s => s.id === toStation);

    if (!from || !to) return;

    // Calculate distance-based fare
    const distance = Math.abs(from.distance - to.distance);
    
    // Kochi Metro fare structure (approximate)
    let calculatedFare = 10; // Base fare
    if (distance > 2) calculatedFare = 20;
    if (distance > 5) calculatedFare = 30;
    if (distance > 10) calculatedFare = 40;
    if (distance > 15) calculatedFare = 50;

    setFare(calculatedFare);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" />
          Fare Calculator
        </CardTitle>
        <CardDescription>
          Calculate your journey fare between any two stations
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
          onClick={calculateFare}
          disabled={!fromStation || !toStation}
          className="w-full"
          size="lg"
        >
          Calculate Fare
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>

        {fare !== null && (
          <div className="bg-gradient-to-r from-metro-teal/10 to-metro-purple/10 p-6 rounded-lg border border-metro-teal/20">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Estimated Fare</p>
              <p className="text-4xl font-bold text-metro-teal">₹{fare}</p>
              <p className="text-xs text-muted-foreground">
                * Token fare for single journey
              </p>
            </div>
          </div>
        )}

        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-sm">Fare Information</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Minimum fare: ₹10 (up to 2 km)</li>
            <li>• Maximum fare: ₹50 (19+ km)</li>
            <li>• Smart cards offer 5% discount</li>
            <li>• Group tickets available for 10+ passengers</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FareCalculator;
