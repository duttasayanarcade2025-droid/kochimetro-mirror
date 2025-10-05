import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import MetroMap from '@/components/MetroMap';
import HeadlinesSection from '@/components/HeadlinesSection';
import MediaGallerySection from '@/components/MediaGallerySection';
import StationsSection from '@/components/StationsSection';
import TicketingSection from '@/components/TicketingSection';
import InnovationsSection from '@/components/InnovationsSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <MetroMap />
      <WelcomeSection />
      <HeadlinesSection />
      <MediaGallerySection />
      <StationsSection />
      <TicketingSection />
      <InnovationsSection />
      <Footer />
    </div>
  );
};

export default Index;
