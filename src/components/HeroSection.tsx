import heroImage from '@/assets/metro-hero-illustration.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-metro-blue-light to-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Kochi Metro System Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Kochi Metro
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Connecting Lives, Building Tomorrow
          </p>
          
          {/* Station Labels */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Station name labels positioned around the illustration */}
            <div className="absolute top-1/4 left-8 text-metro-dark font-medium">Aluva</div>
            <div className="absolute top-1/3 left-24 text-metro-dark font-medium">Pulinchodu</div>
            <div className="absolute top-2/5 left-32 text-metro-dark font-medium">Companypady</div>
            <div className="absolute top-1/2 left-40 text-metro-dark font-medium">Kalamassery</div>
            <div className="absolute bottom-1/3 left-8 text-metro-dark font-medium">Cochin University</div>
            <div className="absolute bottom-1/4 left-24 text-metro-dark font-medium">Edapally</div>
            <div className="absolute bottom-1/5 left-48 text-metro-dark font-medium">Changampuzha Park</div>
            <div className="absolute bottom-1/6 right-48 text-metro-dark font-medium">Palarivattom</div>
            <div className="absolute bottom-1/4 right-32 text-metro-dark font-medium">JLN Stadium</div>
            <div className="absolute bottom-1/3 right-24 text-metro-dark font-medium">Kaloor</div>
            <div className="absolute bottom-2/5 right-16 text-metro-dark font-medium">Town Hall</div>
            <div className="absolute top-2/3 right-8 text-metro-dark font-medium">M.G Road</div>
            <div className="absolute top-3/5 right-24 text-metro-dark font-medium">Maharaja's College</div>
            <div className="absolute top-1/2 right-32 text-metro-dark font-medium">Ernakulam south</div>
            <div className="absolute top-2/5 right-40 text-metro-dark font-medium">Kadavanthra</div>
            <div className="absolute top-1/3 right-48 text-metro-dark font-medium">Elamkulam</div>
            <div className="absolute bottom-3/5 right-56 text-metro-dark font-medium">Vytilla</div>
            <div className="absolute bottom-1/2 right-64 text-metro-dark font-medium">Thaikoodam</div>
            <div className="absolute bottom-2/5 right-72 text-metro-dark font-medium">Petta</div>
            <div className="absolute bottom-1/3 right-80 text-metro-dark font-medium">Vadakkekotta</div>
            <div className="absolute bottom-1/4 right-88 text-metro-dark font-medium">SN Junction</div>
            <div className="absolute bottom-1/5 right-96 text-metro-dark font-medium">Tripunithura</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;