import { Users, Sun, Flower, Recycle } from 'lucide-react';

const InnovationsSection = () => {
  const innovations = [
    {
      icon: Users,
      title: "Social Inclusion",
      description: "Ensuring accessibility and equal opportunities for all members of society"
    },
    {
      icon: Sun,
      title: "Solar Energy",
      description: "Harnessing renewable energy to power sustainable transportation"
    },
    {
      icon: Flower,
      title: "Vertical Garden",
      description: "Creating green spaces and promoting environmental sustainability"
    },
    {
      icon: Recycle,
      title: "Plastic Bottle Recycling",
      description: "Converting waste into useful resources for environmental protection"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Innovations Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-8">
              {innovations.map((innovation) => {
                const IconComponent = innovation.icon;
                return (
                  <div key={innovation.title} className="text-center group cursor-pointer">
                    <div className="w-20 h-20 bg-metro-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-metro-teal group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-10 h-10 text-metro-teal group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-gray-900 mb-2 group-hover:text-metro-teal transition-colors">
                      {innovation.title.toUpperCase()}
                    </h3>
                    <p className="text-sm text-gray-600 hidden lg:block">
                      {innovation.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              How We Stand Apart
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  Innovations – Social Inclusion, Solar Energy, Vertical Garden, Plastic bottle recycling
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Adding to our many firsts are a bunch of novel innovations from our young team of planners. Here's what we did to give back to nature. Take a look at our success story, stay inspired.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-metro-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Social Inclusion:</strong> Barrier-free accessibility features for differently-abled passengers
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-metro-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Solar Energy:</strong> 100% solar-powered metro operations reducing carbon footprint
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-metro-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Vertical Garden:</strong> Green infrastructure integrated into station design
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-metro-teal rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Plastic Recycling:</strong> Innovative waste management and recycling programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationsSection;