import { Calculator, Route, Activity, Smartphone, Map } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FareCalculator from './FareCalculator';
import JourneyPlanner from './JourneyPlanner';
import LiveTrainInfo from './LiveTrainInfo';
import TomTom3DMap from './TomTom3DMap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ToolsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Smartphone className="w-6 h-6 text-metro-teal" />
            <p className="text-metro-teal font-medium">Planning Tools</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Metro Planning Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan your journey, calculate fares, and track trains in real-time with our comprehensive suite of tools
          </p>
        </div>

        <Tabs defaultValue="3dmap" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="3dmap" className="gap-2">
              <Map className="w-4 h-4" />
              3D Map
            </TabsTrigger>
            <TabsTrigger value="journey" className="gap-2">
              <Route className="w-4 h-4" />
              Journey Planner
            </TabsTrigger>
            <TabsTrigger value="fare" className="gap-2">
              <Calculator className="w-4 h-4" />
              Fare Calculator
            </TabsTrigger>
            <TabsTrigger value="live" className="gap-2">
              <Activity className="w-4 h-4" />
              Live Trains
            </TabsTrigger>
          </TabsList>

          <TabsContent value="3dmap" className="max-w-6xl mx-auto">
            <TomTom3DMap />
          </TabsContent>

          <TabsContent value="journey" className="space-y-6">
            <JourneyPlanner />
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-metro-teal mb-1">2-5 min</div>
                  <p className="text-xs text-muted-foreground">Average wait time</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-metro-teal mb-1">22</div>
                  <p className="text-xs text-muted-foreground">Total stations</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-metro-teal mb-1">2</div>
                  <p className="text-xs text-muted-foreground">Active lines</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fare" className="space-y-6">
            <FareCalculator />
            
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-metro-teal/10 to-metro-purple/10 border-metro-teal/20">
              <CardHeader>
                <CardTitle className="text-lg">Smart Card Benefits</CardTitle>
                <CardDescription>Save more with our reloadable smart cards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Instant 5% discount on all rides</span>
                  <span className="text-metro-teal font-semibold">Save ₹5-10/trip</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">No queuing at ticket counters</span>
                  <span className="text-metro-teal font-semibold">Save time</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Valid across all lines</span>
                  <span className="text-metro-teal font-semibold">Convenience</span>
                </div>
                <Button className="w-full mt-4">Get Your Smart Card</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="live" className="max-w-4xl mx-auto">
            <LiveTrainInfo />
          </TabsContent>
        </Tabs>

        {/* Mobile App Promotion */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-heading font-bold mb-4">
                  Download the Kochi Metro App
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get real-time updates, book tickets, track trains, and access all these features on the go with our mobile app.
                </p>
                <div className="flex gap-4">
                  <Button size="lg">
                    Download for iOS
                  </Button>
                  <Button size="lg" variant="outline">
                    Download for Android
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-metro-teal/20 to-metro-purple/20 p-8 flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-metro-teal/40" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;