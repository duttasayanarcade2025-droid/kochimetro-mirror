import metroInterior from '@/assets/metro-interior.jpg';

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={metroInterior}
                alt="Metro Station Interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Welcome To The Most Advanced Metro System In India
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our objective is to make Kochi the first city in the country where the entire public transport system: the metro, the buses, the boats, the auto-rickshaws and the taxies work together as a seamless integrated system; with a common timetable, common ticketing and centralised 'command and control'.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-metro-teal rounded-full"></div>
                <span className="text-gray-700">Advanced automated train systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-metro-teal rounded-full"></div>
                <span className="text-gray-700">Integrated public transport network</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-metro-teal rounded-full"></div>
                <span className="text-gray-700">Environment-friendly transportation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;