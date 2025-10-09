/**
 * StructuredData Component
 * Adds JSON-LD structured data for better SEO
 * Helps search engines understand the content and show rich results
 */
const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TransportationCompany",
    "name": "Kochi Metro Rail Limited",
    "alternateName": "KMRL",
    "url": "https://kochimetro.org",
    "logo": "https://kochimetro.org/logo.png",
    "description": "India's most advanced metro rail system providing sustainable and efficient public transportation in Kochi, Kerala",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/kochimetro",
      "https://twitter.com/kochimetro",
      "https://www.instagram.com/kochimetro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-484-2803333",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam", "Hindi"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Metro Rail Transportation",
    "provider": {
      "@type": "Organization",
      "name": "Kochi Metro Rail Limited"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kochi"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Metro Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metro Train Service",
            "description": "Regular metro train service connecting 22+ stations across Kochi"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Card Services",
            "description": "Rechargeable smart cards for seamless travel"
          }
        }
      ]
    }
  };

  const transitSchema = {
    "@context": "https://schema.org",
    "@type": "BusOrCoach",
    "name": "Kochi Metro",
    "provider": {
      "@type": "Organization",
      "name": "Kochi Metro Rail Limited"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transitSchema) }}
      />
    </>
  );
};

export default StructuredData;
