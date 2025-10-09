import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import MetroMap from '@/components/MetroMap';
import HeadlinesSection from '@/components/HeadlinesSection';
import MediaGallerySection from '@/components/MediaGallerySection';
import StationsSection from '@/components/StationsSection';
import TicketingSection from '@/components/TicketingSection';
import SchedulesSection from '@/components/SchedulesSection';
import NewsSection from '@/components/NewsSection';
import DownloadsSection from '@/components/DownloadsSection';
import InnovationsSection from '@/components/InnovationsSection';
import ToolsSection from '@/components/ToolsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import StructuredData from '@/components/StructuredData';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

const Index = () => {
  return (
    <>
      <StructuredData />
      <PerformanceOptimizer />
      <head>
        <title>Kochi Metro Rail | Official Website - Kerala's Advanced Public Transport System</title>
        <meta name="description" content="Kochi Metro Rail Limited (KMRL) - India's most advanced metro system. Explore routes, station facilities, journey planner, real-time train information, and ticketing options." />
        <meta name="keywords" content="Kochi Metro, Kerala Metro, KMRL, Metro Rail Kochi, Public Transport Kerala, Kochi Metro Stations, Metro Tickets, Journey Planner" />
        <meta property="og:title" content="Kochi Metro Rail | Advanced Public Transport System" />
        <meta property="og:description" content="Experience the future of urban mobility with Kochi Metro - Kerala's first integrated metro rail system." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://kochimetro.org" />
      </head>
      <div className="min-h-screen">
        <ScrollProgress />
        <Header />
        <main role="main" aria-label="Main content">
          <HeroSection />
          <MetroMap />
          <WelcomeSection />
          <HeadlinesSection />
          <MediaGallerySection />
          <StationsSection />
          <TicketingSection />
          <ToolsSection />
          <SchedulesSection />
          <NewsSection />
          <DownloadsSection />
          <InnovationsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
