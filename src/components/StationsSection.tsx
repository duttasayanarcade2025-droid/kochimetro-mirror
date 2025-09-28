import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StationsSection = () => {
  const stationRoutes = [
    {
      line: "Line 1",
      stations: [
        "Aluva", "Pulinchodu", "Companypady", "Ambattukavu", "Muttom", 
        "Kalamassery", "Cochin University", "Pathadipalam", "Edapally", 
        "Changampuzha Park", "Palarivattom", "JLN Stadium", "Kaloor", 
        "Town Hall", "M.G Road", "Maharaja's College", "Ernakulam south"
      ]
    },
    {
      line: "Line 2",
      stations: [
        "Kadavanthra", "Elamkulam", "Vytilla", "Thaikoodam", "Petta", 
        "Vadakkekotta", "SN Junction", "Tripunithura"
      ]
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
                  <h4 className="font-semibold text-lg text-gray-900 mb-3">{route.line}</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stations.map((station, index) => (
                      <span key={index} className="flex items-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-metro-teal hover:text-metro-teal hover:bg-metro-teal/10 p-1 h-auto font-normal"
                        >
                          {station}
                        </Button>
                        {index < route.stations.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-gray-400 mx-1" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-card p-4 h-96">
              {/* Simplified map representation */}
              <div className="relative w-full h-full bg-gradient-to-br from-green-200 to-green-100 rounded-lg overflow-hidden">
                {/* Map background */}
                <div className="absolute inset-0 bg-green-50">
                  {/* Station markers */}
                  <div className="absolute top-20 left-16 w-8 h-8 bg-metro-teal rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <div className="absolute top-32 left-24 w-8 h-8 bg-metro-teal rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div className="absolute top-44 left-32 w-8 h-8 bg-metro-teal rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <div className="absolute bottom-32 right-24 w-8 h-8 bg-metro-teal rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  
                  {/* Location labels */}
                  <div className="absolute top-12 left-8 text-xs font-medium text-gray-700">North Paravur</div>
                  <div className="absolute top-24 right-8 text-xs font-medium text-gray-700">Perumbavoor</div>
                  <div className="absolute bottom-20 left-8 text-xs font-medium text-gray-700">Kochi</div>
                  <div className="absolute bottom-8 right-8 text-xs font-medium text-gray-700">Ernakulam</div>
                  
                  {/* Metro line representation */}
                  <div className="absolute top-24 left-20 w-48 h-1 bg-metro-teal transform rotate-12 rounded-full"></div>
                  <div className="absolute bottom-40 left-40 w-32 h-1 bg-metro-teal transform -rotate-12 rounded-full"></div>
                </div>
                
                {/* Google branding */}
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs text-gray-600">
                  Google
                </div>
                
                {/* Map controls */}
                <div className="absolute bottom-2 right-2 flex flex-col space-y-1">
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white">
                    <span className="text-gray-600">+</span>
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-white">
                    <span className="text-gray-600">-</span>
                  </Button>
                </div>
              </div>
              
              {/* Map legend */}
              <div className="mt-4 text-xs text-gray-500 flex items-center justify-between">
                <span>Keyboard shortcuts</span>
                <span>Map data ©2025</span>
                <span>Terms</span>
                <span>Report a map error</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StationsSection;