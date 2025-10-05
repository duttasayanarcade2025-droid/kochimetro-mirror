import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone, Ticket } from 'lucide-react';
import FareCalculator from './FareCalculator';
import JourneyPlanner from './JourneyPlanner';
import LiveTrainInfo from './LiveTrainInfo';

const TicketingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-metro-teal font-medium mb-2">Plan Your Journey</p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Tickets & Travel Info
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate fares, plan your journey, and stay updated with live train information
          </p>
        </div>

        <Tabs defaultValue="fare" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="fare" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              <span className="hidden sm:inline">Fare</span>
            </TabsTrigger>
            <TabsTrigger value="journey" className="flex items-center gap-2">
              <Ticket className="w-4 h-4" />
              <span className="hidden sm:inline">Journey</span>
            </TabsTrigger>
            <TabsTrigger value="live" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Live</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fare" className="mt-0">
            <FareCalculator />
          </TabsContent>

          <TabsContent value="journey" className="mt-0">
            <JourneyPlanner />
          </TabsContent>

          <TabsContent value="live" className="mt-0">
            <div className="max-w-2xl mx-auto">
              <LiveTrainInfo />
            </div>
          </TabsContent>
        </Tabs>

        {/* Ticket Types Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-metro-teal/10 to-transparent p-6 rounded-lg border border-metro-teal/20">
            <div className="w-12 h-12 bg-metro-teal rounded-lg flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Token</h3>
            <p className="text-sm text-muted-foreground">
              Single journey tickets available at all stations
            </p>
          </div>

          <div className="bg-gradient-to-br from-metro-purple/10 to-transparent p-6 rounded-lg border border-metro-purple/20">
            <div className="w-12 h-12 bg-metro-purple rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Smart Card</h3>
            <p className="text-sm text-muted-foreground">
              Reloadable cards with 5% discount on all trips
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-lg border border-blue-500/20">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">Mobile App</h3>
            <p className="text-sm text-muted-foreground">
              Book and store tickets on your smartphone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSection;
