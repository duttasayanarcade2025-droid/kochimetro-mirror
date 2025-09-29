import metroInterior from '@/assets/metro-interior.jpg';
import AnimatedSection from './AnimatedSection';

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-metro-teal to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <img
                  src={metroInterior}
                  alt="Metro Station Interior"
                  className="w-full h-[500px] object-cover rounded-lg shadow-elegant hover-lift transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection animation="fade-in-right" delay={200} className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Welcome To The Most <span className="gradient-text">Advanced Metro System</span> In India
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our objective is to make Kochi the first city in the country where the entire public transport system: the metro, the buses, the boats, the auto-rickshaws and the taxies work together as a seamless integrated system; with a common timetable, common ticketing and centralised 'command and control'.
            </p>
            <div className="space-y-4">
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow"></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Advanced automated train systems</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={500}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Integrated public transport network</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={600}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Environment-friendly transportation</span>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;