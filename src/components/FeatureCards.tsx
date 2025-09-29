import { Clock, Shield, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const FeatureCards = () => {
  const features = [
    {
      icon: Clock,
      title: "Timely Service",
      description: "Experience punctual and reliable metro services with trains running every few minutes during peak hours.",
      delay: 0
    },
    {
      icon: Shield,
      title: "Safety First", 
      description: "Travel with confidence knowing our comprehensive safety measures ensure your journey is secure and comfortable.",
      delay: 200
    },
    {
      icon: Zap,
      title: "Eco-Friendly",
      description: "Contribute to a greener future with our electric metro system that reduces carbon footprint and air pollution.",
      delay: 400
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {features.map((feature, index) => (
        <AnimatedSection key={index} animation="scale-in" delay={feature.delay}>
          <div className="bg-white rounded-xl shadow-card p-8 card-3d magnetic-btn animate-card-float" style={{ animationDelay: `${feature.delay / 1000}s` }}>
            <div className="flex items-center justify-center w-16 h-16 bg-metro-teal/10 rounded-full mb-6 mx-auto">
              <feature.icon className="w-8 h-8 text-metro-teal" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              {feature.description}
            </p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
};

export default FeatureCards;