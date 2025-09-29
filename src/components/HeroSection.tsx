import { useEffect, useState } from 'react';
import heroImage from '@/assets/metro-hero-illustration.jpg';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-metro-blue-light to-white">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px) translateX(${mousePosition.x * 0.02}px)` 
        }}
      >
        <img
          src={heroImage}
          alt="Kochi Metro System Illustration"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-metro-teal/30 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-metro-teal/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up text-shadow-strong">
            <span className="inline-block animate-gradient-shift bg-gradient-to-r from-white via-metro-blue-light to-white bg-300% bg-clip-text">
              Kochi Metro
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-shadow-strong animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Connecting Lives, Building Tomorrow
          </p>
          
          {/* Enhanced Station Labels with Better Visibility */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Station name labels positioned around the illustration with enhanced visibility */}
            <div className="absolute top-1/4 left-8 text-overlay text-white font-medium text-sm">Aluva</div>
            <div className="absolute top-1/3 left-24 text-overlay text-white font-medium text-sm">Pulinchodu</div>
            <div className="absolute top-2/5 left-32 text-overlay text-white font-medium text-sm">Companypady</div>
            <div className="absolute top-1/2 left-40 text-overlay text-white font-medium text-sm">Kalamassery</div>
            <div className="absolute bottom-1/3 left-8 text-overlay text-white font-medium text-sm">Cochin University</div>
            <div className="absolute bottom-1/4 left-24 text-overlay text-white font-medium text-sm">Edapally</div>
            <div className="absolute bottom-1/5 left-48 text-overlay text-white font-medium text-sm">Changampuzha Park</div>
            <div className="absolute bottom-1/6 right-48 text-overlay text-white font-medium text-sm">Palarivattom</div>
            <div className="absolute bottom-1/4 right-32 text-overlay text-white font-medium text-sm">JLN Stadium</div>
            <div className="absolute bottom-1/3 right-24 text-overlay text-white font-medium text-sm">Kaloor</div>
            <div className="absolute bottom-2/5 right-16 text-overlay text-white font-medium text-sm">Town Hall</div>
            <div className="absolute top-2/3 right-8 text-overlay text-white font-medium text-sm">M.G Road</div>
            <div className="absolute top-3/5 right-24 text-overlay text-white font-medium text-sm">Maharaja's College</div>
            <div className="absolute top-1/2 right-32 text-overlay text-white font-medium text-sm">Ernakulam south</div>
            <div className="absolute top-2/5 right-40 text-overlay text-white font-medium text-sm">Kadavanthra</div>
            <div className="absolute top-1/3 right-48 text-overlay text-white font-medium text-sm">Elamkulam</div>
            <div className="absolute bottom-3/5 right-56 text-overlay text-white font-medium text-sm">Vytilla</div>
            <div className="absolute bottom-1/2 right-64 text-overlay text-white font-medium text-sm">Thaikoodam</div>
            <div className="absolute bottom-2/5 right-72 text-overlay text-white font-medium text-sm">Petta</div>
            <div className="absolute bottom-1/3 right-80 text-overlay text-white font-medium text-sm">Vadakkekotta</div>
            <div className="absolute bottom-1/4 right-88 text-overlay text-white font-medium text-sm">SN Junction</div>
            <div className="absolute bottom-1/5 right-96 text-overlay text-white font-medium text-sm">Tripunithura</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator with Glow Effect */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center animate-pulse-glow">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;