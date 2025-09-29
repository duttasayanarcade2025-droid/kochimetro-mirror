import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import HeadlinesSection from '@/components/HeadlinesSection';
import MediaGallerySection from '@/components/MediaGallerySection';
import StationsSection from '@/components/StationsSection';
import InnovationsSection from '@/components/InnovationsSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <HeadlinesSection />
      <MediaGallerySection />
      <StationsSection />
      <InnovationsSection />
      <Footer />
    </div>
  );
};

export default Index;
