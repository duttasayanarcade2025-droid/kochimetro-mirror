import metroInterior from '@/assets/metro-interior.jpg';
import AnimatedSection from './AnimatedSection';
import FeatureCards from './FeatureCards';

const WelcomeSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Creative Layout with Shape Outside */}
        <div className="text-wrap-content mb-16">
          <AnimatedSection animation="fade-in-left">
            <img
              src={metroInterior}
              alt="Metro Station Interior"
              className="shape-float-left shape-organic w-full max-w-[45%] h-auto object-cover shadow-elegant hover-lift transition-all duration-500"
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right" delay={200}>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Welcome To The Most <span className="text-metro-teal">Advanced Metro System</span> In India
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
              Our objective is to make Kochi the first city in the country where the entire public transport system: the metro, the buses, the boats, the auto-rickshaws and the taxies work together as a seamless integrated system; with a common timetable, common ticketing and centralised 'command and control'.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Kochi Metro represents a revolutionary leap in urban transportation, combining cutting-edge technology with sustainable practices. Our commitment extends beyond just moving people—we're creating a comprehensive ecosystem that transforms how the city connects, communicates, and commutes.
            </p>
            <div className="space-y-4 mb-8">
              <AnimatedSection animation="fade-in-up" delay={400}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow"></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Advanced automated train systems with real-time monitoring</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={500}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Integrated public transport network across all modes</span>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up" delay={600}>
                <div className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-metro-teal rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
                  <span className="text-gray-700 group-hover:text-metro-teal transition-colors">Environment-friendly transportation reducing carbon footprint</span>
                </div>
              </AnimatedSection>
            </div>
            <p className="text-base text-gray-600 leading-relaxed">
              With state-of-the-art facilities, accessibility features, and a focus on passenger comfort, Kochi Metro sets new benchmarks in public transportation. Experience the future of urban mobility today, where technology meets sustainability to create a seamless journey for every passenger.
            </p>
          </AnimatedSection>
        </div>
        
        {/* Feature Cards Section */}
        <FeatureCards />
      </div>
    </section>
  );
};

export default WelcomeSection;
